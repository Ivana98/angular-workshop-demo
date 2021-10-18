import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingExampleRoutingModule } from './routing-example-routing.module';
import { FirstComponent } from './first/first.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';


@NgModule({
  declarations: [
    FirstComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    CommonModule,
    RoutingExampleRoutingModule
  ],
  exports: [
    FirstComponent,
    ChildAComponent,
    ChildBComponent
  ]
})
export class RoutingExampleModule { }
