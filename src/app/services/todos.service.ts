import { Injectable } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable ({
  providedIn: 'root'
})

export class TodosService {
 // todos = new BehaviorSubject<TodoInterface[]>([])
  //use interface to make it clear what type of data we are expecting
  // since BehaviorSubject is not an array, we can't directly push elements

  private localApi = 'http://localhost:3000/todos/';

  constructor(private http:HttpClient) {}

  addNewTodo(data: TodoInterface): Observable<TodoInterface> {
    console.log(data);
    return this.http.post<TodoInterface>(this.localApi, data, httpOptions);
  }

  getTodos(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.localApi);
  }

  // to archive tasks

  // to delete tasks
  deleteTodo(data: TodoInterface): Observable<TodoInterface>  {
    const url = `${this.localApi}${data.id}`;
    return this.http.delete<TodoInterface>(url);
  }
}
