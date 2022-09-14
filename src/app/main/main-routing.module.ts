import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AboutComponent } from './MainComponent/about/about.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ProductsComponent } from './MainComponent/Products/products/products.component';
import { SignInComponent } from './MainComponent/sign-in/sign-in.component';

const routes: Routes = [{ path: '', component: MainComponent ,children:[{
  path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'sign-in',component:SignInComponent}


]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
