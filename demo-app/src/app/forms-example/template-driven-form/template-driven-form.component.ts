import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from '../model/person';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  person = new Person("", "");

  ngOnInit(): void {
  }

  fillForm(): void {
    this.person = new Person("Petar", "Petrovic", "Some info...");
  }

  //second way
  /*
  In template call it:
  <button mat-raised-button color="primary" (click)="fillForm2(myTemplateForm)" id="leftBtn"> Fill form </button>
  */
  fillForm2(form: NgForm): void {
    //this creates new person object and not change original person property
    let person = new Person("Petar", "Petrovic");
    person.info = "Some info...";
    form.setValue(person);
  }

  resetForm(form: NgForm): void {
    form.resetForm(new Person("", "", ""));
  }

}
