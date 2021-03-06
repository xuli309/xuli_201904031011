import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  // {path: '**', redirectTo: NotFoundComponet},
  {path: '', pathMatch: 'full',  component: HomeComponent},
  {path: '**', redirectTo: '/user/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
