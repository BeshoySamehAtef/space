import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from './store/auth/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spaces';

  constructor(private store:Store){
  }

  token$ = this.store.select(selectUser);

}
