import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonTableComponent } from './person-table/person-table.component';
import {MatTableModule} from '@angular/material/table';
import { AddFormaComponent } from './add-forma/add-forma.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PersonTableComponent,
    AddFormaComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    PersonRoutingModule,
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports:[
    PersonTableComponent
  ]
})
export class PersonModule { }
