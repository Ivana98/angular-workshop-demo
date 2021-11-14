import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonTableComponent } from './person-table/person-table.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    PersonTableComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    MatTableModule
  ],
  exports:[
    PersonTableComponent
  ]
})
export class PersonModule { }
