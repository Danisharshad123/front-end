import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagementmoduleComponent } from './managementmodule.component';

const routes: Routes = [{ path: '', component: ManagementmoduleComponent, children:[
  {

  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementmoduleRoutingModule { }
