import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from '../../store/auth/auth.actions';
import { selectError, selectUser } from '../../store/auth/auth.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username = 'eve.holt@reqres.in';
  // password = 'cityslicka';

  error$ = this.store.select(selectError);
  token$ = this.store.select(selectUser);

  loginForm: FormGroup;
  title = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);


  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      title: this.title,
      password:this.password,
    })
  }

  onSubmit() {

    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
      return
    }

    this.store.dispatch(new Login({ username: this.title.value ?? '', password: this.password.value ?? '' }));
  }
}