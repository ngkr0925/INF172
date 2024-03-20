import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature1Component } from './feature1/feature1.component';
import { Feature2Component } from './feature2/feature2.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'feature1', component: Feature1Component },
  { path: 'feature2', component: Feature2Component },
  // Add other routes here
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Adjust as needed
  // { path: '**', component: PageNotFoundComponent }, // Optional: Handle unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
