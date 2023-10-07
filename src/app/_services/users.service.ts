import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly baseUrl = 'https://reqres.in/api';
  constructor(
    private readonly http: HttpClient,
  ) {}

  getUsers() {
    return this.http.get<any>(`${this.baseUrl}/users?page=2`);
  }

  updateUser(id: number, name: string, job: string){
    return this.http.patch<any>(`${this.baseUrl}/users/${{id}}`, {'name': name,'job': job});
  }

  deleteUser(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/users/${{id}}`);
  }
}