import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdminmoduleComponent } from './adminmodule.component';
import { AdmindashboardComponent } from './admindcomponent/admindashboard/admindashboard/admindashboard.component';
// import { ProductsComponent } from './products/products/products.component';
import { Products1Component } from './products1/products1/products1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminmoduleComponent,
    AdmindashboardComponent,
    // ProductsComponent,
    Products1Component
  ],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule 
  ]
})
export class AdminmoduleModule { }
