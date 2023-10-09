import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { StoreModule, reduceState } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dataReducer } from '../store/data/data.reducer';
import { DataEffects } from '../store/data/data.effects';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    StoreModule.forFeature('data',dataReducer),
    EffectsModule.forFeature([DataEffects]),
  ]
})
export class UsersModule { }
