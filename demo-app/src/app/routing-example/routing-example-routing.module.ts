import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: '', component: FirstComponent, children: [  // /first-component
    { path: 'child-a', component: ChildAComponent },  // /first-component/child-a
    { path: 'child-b', component: ChildBComponent },  // /first-component/child-a
  ] },
  {path: 'childa', component: ChildAComponent }      // /first-component/childa
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingExampleRoutingModule { }
