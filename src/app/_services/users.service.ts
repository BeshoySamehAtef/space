import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly baseUrl = 'https://reqres.in/api';
  constructor(
    private http: HttpClient,
  ) {}

  getUsers() {
    return this.http.get<any>(`${this.baseUrl}/users?page=2`);
  }
}