import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendingRequestsRoutingModule } from './sending-requests-routing.module';
import { RequestExampleComponent } from './request-example/request-example.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    RequestExampleComponent,
    RequestDemoComponent
  ],
  imports: [
    CommonModule,
    SendingRequestsRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RequestDemoComponent
  ]
})
export class SendingRequestsModule { }
