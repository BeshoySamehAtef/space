import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../store/auth/auth.actions';
import { selectError, selectUser } from '../store/auth/auth.selectors';

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <div *ngIf="error$ | async as error" class="error">{{ error }}</div>
    <div *ngIf="token$ | async as token">{{ token.token  }}</div>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" [(ngModel)]="username" name="username" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" [(ngModel)]="password" name="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  `,
  styles: [`
    .error {
      color: red;
    }
  `]
})
export class LoginComponent {
  username = 'eve.holt@reqres.in';
  password = 'cityslicka';

  error$ = this.store.select(selectError);
  token$ = this.store.select(selectUser);

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(new Login({ username: this.username, password: this.password }));

    setTimeout(() => {
      console.log(this.error$)
    }, 2000);
  }
}