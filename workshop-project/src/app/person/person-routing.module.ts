import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormaComponent } from './add-forma/add-forma.component';
import { PersonTableComponent } from './person-table/person-table.component';

const routes: Routes = [
  {path:"people-table",component: PersonTableComponent}, //children: [
    //{path: "add", component: AddFormaComponent} ]}

  //{path: "people-table/add", component: AddFormaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
