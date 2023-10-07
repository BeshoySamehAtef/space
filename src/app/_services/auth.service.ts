import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/userAuth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly baseUrl = 'https://reqres.in/api';
  constructor(
    private readonly http: HttpClient,
  ) {}

  login(userForm:any) {
    return this.http.post<any>(`${this.baseUrl}/login`, {'email':userForm.username ,'password':userForm.password});
  }

  
}