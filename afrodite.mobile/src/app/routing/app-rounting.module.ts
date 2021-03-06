import { NgModule } from '@angular/core';

import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: { name: 'Home'}},
    { 
      path: '**', 
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
