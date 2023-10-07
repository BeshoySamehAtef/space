import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getData } from '../store/data/data.actions';
import { selectData } from '../store/data/data.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  secretData$: Observable<any>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.secretData$ = this.store.pipe(select(selectData));
    this.store.dispatch(getData());
  }
}
