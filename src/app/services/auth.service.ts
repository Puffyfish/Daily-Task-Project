import { Injectable } from '@angular/core';
import { UserInterface } from '../types/user.interface';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})

export class AuthService {
  private localApi = 'http://localhost:3000/users/';
  // private _storage: any = null;

  constructor(private http:HttpClient) {
    // this._storage = localStorage;
  }

  // login
  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.localApi);
  }

  // logout


}
