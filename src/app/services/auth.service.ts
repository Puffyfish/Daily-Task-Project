import { Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../types/User.model';

@Injectable ({
  providedIn: 'root'
})

export class AuthService {
  user = new BehaviorSubject<User | null>(null)
  // private api = 'http://localhost:3000/users/';
  private api = 'https://my-json-server.typicode.com/Puffyfish/Daily-Task-Project/users/';

  constructor(
    private http:HttpClient,
    private router: Router) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.api);
  }

  // login -- since we are only using a json-server,
  // then we will just login by finding the user and checking if the pw is correct
  findByUsername(id: string) {
    return this.http.get<UserInterface>(this.api + id)
  }

  // find user using authSerice.findByUsername
  // check if user is authenticated in the auth.component.ts
  // if authenticated, proceed to store info
  storeUser (user: UserInterface) {
      const {id, name, email, password} = user
      const currentUser = new User(id, name, email, password)
      this.user.next(currentUser)
      localStorage.setItem('userData', JSON.stringify(currentUser))
    }

  // register
  onRegister(data: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(this.api, data)
  }

  // update/edit
  updateUser(id: any, inputdata: any): Observable<UserInterface> {
    return this.http.put<UserInterface> (this.api + '/' + id, inputdata);
  }

  // logout
  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('userData')
  }
}
