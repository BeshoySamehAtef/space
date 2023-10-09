import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../_services/auth.service';
import { AuthActionTypes, Login, LoginSuccess, LoginFailure, Logout } from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(AuthActionTypes.Login),
      exhaustMap((action) =>
        this.authService.login(action.payload).pipe(
          map((response) => new LoginSuccess(response)),
          catchError((error) => of(new LoginFailure(error)))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
        tap((action) => {
          this.router.navigate(['/users']);
        })
      ),
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<LoginFailure>(AuthActionTypes.LoginFailure),
        tap((action) => {
          // Handle the login failure scenario, e.g., displaying an error message
          console.log(action.payload.error.error,'effect')
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType<Logout>(AuthActionTypes.Logout),
        tap((action) => {
          //  logout actions
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private authService: AuthService, private router:Router) {}
}