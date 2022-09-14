import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductsComponent } from '../main/MainComponent/Products/products/products.component';
import { AdmindashboardComponent } from './admindcomponent/admindashboard/admindashboard/admindashboard.component';
import { AdminmoduleComponent } from './adminmodule.component';
import { Products1Component } from './products1/products1/products1.component';

const routes: Routes = [{ path: '', component: AdminmoduleComponent,children:[
  {
    path:'admin-dashboard',component:AdmindashboardComponent
  },
  {
    path:'products', component:Products1Component
  },
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }
