import { Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable ({
  providedIn: 'root'
})

export class AuthService {
  private localApi = 'http://localhost:3000/users/';
  // private _storage: any = null;

  constructor(
    private http:HttpClient,
    private router: Router) {
    // this._storage = localStorage;
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.localApi);
  }


  //login(data:any): Observable<UserInterface>{
  //---- need to create a better login function and not from getUsers() option
  // --- FIND USER USING USER'S ID ; CREATE a better ID system
  // --- const user = new User(data)
  // --- localStorage.setItem('userData', JSON.stringify(user))
  // }

  // findUser
  findByUsername(inputData: any): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.localApi + '/' + inputData)
  }

  // register
  onRegister(data: any): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.localApi, data)
  }

  // update/edit
  updateUser(id: any, inputdata: any): Observable<UserInterface> {
    return this.http.put<UserInterface> (this.localApi + '/' + id, inputdata);
  }

  // logout
  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('userData')
  }


}
