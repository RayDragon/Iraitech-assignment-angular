import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Q1MissingNumberComponent } from './q1-missing-number/q1-missing-number.component';
import { Q2DynamicXyComponent } from './q2-dynamic-xy/q2-dynamic-xy.component';
import { Q3FormComponent } from './q3-form/q3-form.component';
import { Q4SquareCornersComponent } from './q4-square-corners/q4-square-corners.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "q2"},
  {path: "q1", component: Q1MissingNumberComponent},
  {path: "q2", component: Q2DynamicXyComponent},
  {path: "q3", component: Q3FormComponent},
  {path: "q4", component: Q4SquareCornersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
