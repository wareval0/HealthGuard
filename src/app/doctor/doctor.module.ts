import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DoctorRoutingModule
  ],
  declarations: [DoctorComponent]
})
export class DoctorModule { }
