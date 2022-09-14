import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './MainComponent/header/header.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { AboutComponent } from './MainComponent/about/about.component';
import { ProductsComponent } from './MainComponent/Products/products/products.component';
import { SignInComponent } from './MainComponent/sign-in/sign-in.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
