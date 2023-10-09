import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() title: string;
  @Input() isOpen: boolean;
  @Output() closed = new EventEmitter<void>();
  @Output() confirmed = new EventEmitter<void>();
  @Input() set userData(userData: any){
    this.userProfile = userData
     this.fullName = this.userProfile?.first_name + " " + this.userProfile?.last_name
     console.log(this.fullName, this.userProfile)
     this.username.setValue(this.fullName);
     this.username.updateValueAndValidity();
        
  }
  @Input() isForm:boolean = false;

  userForm: FormGroup;
  userProfile:any
  fullName:string
  username = new FormControl('', [Validators.required]);
  jobTitle = new FormControl('', [Validators.nullValidator]);

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: this.username,
      jobTitle:this.jobTitle,
    })  
  }

  
  // get form controls
  get formControls() {
    return this.userForm.controls;
  }


  closeModal() {
    this.closed.emit();
  }

  confirmModal() {
    this.confirmed.emit();
  }

  onSubmit(){
    console.log(this.userForm.value)
  }

 
}
