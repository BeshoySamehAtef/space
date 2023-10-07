import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, tap, switchMap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { UsersService } from '../../_services/users.service';
import  {getData, getDataComplete} from './data.actions';

@Injectable()
export class DataEffects {
    constructor(private actions$: Actions, private dataService: UsersService) {}
  
    getData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(getData),
        switchMap(() =>
          this.dataService
            .getUsers()
            .pipe(map(
              (data) => {
                console.log(data,'dataaaa')
                return getDataComplete({ data })
            }))
        )
      )
    );
  }