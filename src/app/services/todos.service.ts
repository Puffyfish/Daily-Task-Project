import { Injectable } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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
  // since BehaviorSubject is not an array, we can't directly push elements
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  private localApi = 'http://localhost:3000/todos/';

  constructor(private http:HttpClient) {}

  addNewTodo(data: TodoInterface): Observable<TodoInterface> {
    return this.http.post<TodoInterface>(this.localApi, data, httpOptions)
  }

  getTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.localApi);
  }

  // to archive tasks
  archiveTodos(todos: TodoInterface): Observable<TodoInterface> {
    const url = `${this.localApi}/${todos.id}`;
    return this.http.put<TodoInterface>(url, todos, httpOptions);
  }

  // to delete tasks
  deleteTodo(data: TodoInterface): Observable<TodoInterface>  {
    const url = `${this.localApi}${data.id}`;
    return this.http.delete<TodoInterface>(url);
  }

  // for filter
  changeFilter(filterName: FilterEnum): void {
    this.filter$.next(filterName);
  }
}
