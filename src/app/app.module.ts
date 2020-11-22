import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q1MissingNumberComponent } from './q1-missing-number/q1-missing-number.component';
import { Q2DynamicXyComponent } from './q2-dynamic-xy/q2-dynamic-xy.component';
import { Q3FormComponent } from './q3-form/q3-form.component';
import { Q4SquareCornersComponent } from './q4-square-corners/q4-square-corners.component';
import { FormsModule } from '@angular/forms';
import { WrapperMaterialModule } from './mylib/material.module';
import { XComponent } from './q2-dynamic-xy/x/x.component';
import { YComponent } from './q2-dynamic-xy/x/y/y.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Q1MissingNumberComponent,
    Q2DynamicXyComponent,
    Q3FormComponent,
    Q4SquareCornersComponent,
    XComponent,
    YComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    WrapperMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
