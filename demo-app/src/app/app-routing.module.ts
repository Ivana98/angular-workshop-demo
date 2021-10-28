import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

  //{ path: '', loadChildren: () => import('./base/base.module').then(m => m.BaseModule),
  { path: '', component: HomepageComponent, children: [
      { path: 'first-component', loadChildren: () => import('./routing-example/routing-example.module').then(m => m.RoutingExampleModule) },
      { path: 'http-demo', loadChildren: () => import('./sending-requests/sending-requests.module').then(m => m.SendingRequestsModule) },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
