import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestDemoComponent } from './request-demo/request-demo.component';

const routes: Routes = [
  {path: '', component: RequestDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendingRequestsRoutingModule { }
