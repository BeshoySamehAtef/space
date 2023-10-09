import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() type: string | 'text';
  @Input() placeholder: string | ' ';
  @Input() control: FormControl = new FormControl();
  @Input() label: string | undefined;
  @Input() fieldClass: string = 'form-field';
  @Input() labelClass: string = 'form-label';

}
