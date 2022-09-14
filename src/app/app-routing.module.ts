import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule) }, 
{ path: 'usermodule', loadChildren: () => import('./usermodule/usermodule.module').then(m => m.UsermoduleModule) }, 
{ path: 'adminmodule', loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule) },
{ path: 'managementmodule', loadChildren: () => import('./managementmodule/managementmodule.module').then(m => m.ManagementmoduleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
