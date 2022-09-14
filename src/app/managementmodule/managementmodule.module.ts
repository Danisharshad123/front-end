import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementmoduleRoutingModule } from './managementmodule-routing.module';
import { ManagementmoduleComponent } from './managementmodule.component';



@NgModule({
  declarations: [
    ManagementmoduleComponent,
 
  ],
  imports: [
    CommonModule,
    ManagementmoduleRoutingModule
  ]
})
export class ManagementmoduleModule { }
