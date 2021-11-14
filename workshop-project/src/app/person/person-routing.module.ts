import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonTableComponent } from './person-table/person-table.component';

const routes: Routes = [
  {path:"people-table",component: PersonTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
