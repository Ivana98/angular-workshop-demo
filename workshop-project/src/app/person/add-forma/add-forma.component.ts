import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpReqService } from 'src/app/services/http-req.service';

@Component({
  selector: 'app-add-forma',
  templateUrl: './add-forma.component.html',
  styleUrls: ['./add-forma.component.scss']
})
export class AddFormaComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: HttpReqService) { }

  formValue = "";

  @Input() myParentData = "";


  ngOnInit(): void {
    this.fetchData();
  }

  addForma = this.fb.group({
    firstName: ['', Validators.required],
    email: [''],
    address: this.fb.group(
      {
        city: [''],
        street: ['']
      }
    ),
    password: ['']

  });

  addFunkcija(){
    this.formValue = this.addForma.getRawValue();
  }

  fillForm(){
    this.addForma.setValue({
      firstName: 'Petar',
      email: "primer neki",
      address : {city: "Belgrade", street:"Maksima Grokog"},
      password: "12345"
    });
  }

  fetchData()
  {
    this.httpService.getOne(1).subscribe(
      (data) => {console.log(data)}
    );
    // argumenti => izrazi
  }

}
