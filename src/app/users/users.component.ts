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
  selectedUser: any;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.secretData$ = this.store.pipe(select(selectData));
    this.store.dispatch(getData());

    setTimeout(() => {
      this.modalTitle = 'asasaaaaaaa'
    }, 4000);
  }

  toggleSideBar(i:number){
    this.secretData$.subscribe(event => this.selectedUser = event.data[i]);
    console.log(this.selectedUser)
  }

  showModal = false;
  modalTitle = 'Example Mojjjjdal';

  openModal() {
    console.log('clicked')
    this.showModal = true;
  }

  onModalClosed() {
    this.showModal = false;
    console.log('close')
    // Handle any logic when the modal is closed
  }

  onModalConfirmed() {
    this.showModal = false;
    console.log('conf');
    
    // Handle any logic when the modal is confirmed
  }

}
