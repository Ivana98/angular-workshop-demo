import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  myInfoForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern("[A-Z][a-z]*")]],
    lastName: ['', Validators.required],
    info: [''],
  });

  fillForm(): void {
    this.myInfoForm.setValue({
      firstName: 'Petar',
      lastName: 'Petrovic',
      info: 'My info...'
    });
  }

  resetForm(): void {
    this.myInfoForm.reset({
      firstName: '',
      lastName: '',
      info: ''
    });
  }


}
