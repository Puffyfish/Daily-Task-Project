import { Injectable } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { FilterEnum } from '../types/FilterEnum';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable ({
  providedIn: 'root'
})

export class TodosService {
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);
  todosSubject: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([]);

  // private localApi = 'http://localhost:3000/todos/';
  private api = 'https://my-json-server.typicode.com/Puffyfish/Daily-Task-Project/todos/';

  constructor(private http:HttpClient) {}

  addNewTodo(data: TodoInterface): Observable<TodoInterface> {
    return this.http.post<TodoInterface>(this.api, data, httpOptions)
  }

  // <<< TO BE IMPROVED: not updating automatically when a task is deleted >>>
  getTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.api).pipe(
      tap((todos) => {
        this.todosSubject.next(todos)
      })
    )
  }

  // to archive tasks
  archiveTodos(todos: TodoInterface): Observable<TodoInterface> {
    const url = `${this.api}${todos.id}`;
    return this.http.put<TodoInterface>(url, todos, httpOptions);
  }

  // <<< TO BE IMPROVED: not updating automatically when a task is deleted >>>
  deleteTodo(todo: TodoInterface): Observable<TodoInterface>  {
    const url = `${this.api}${todo.id}`;
    return this.http.delete<TodoInterface>(url).pipe(
      tap(() => {
        this.getTodos().subscribe(); // Trigger a new request to fetch the updated todos
      }),
      map(() => todo) // Return the deleted todo in the observable
      )
  }

  // for filter
  changeFilter(filterName: FilterEnum): void {
    this.filter$.next(filterName);
  }
}
