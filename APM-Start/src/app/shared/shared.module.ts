import { FormsModule } from '@angular/forms';
import { StartComponent } from './start.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    StartComponent
  ],
  exports: [
    StartComponent,
    CommonModule,
    FormsModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
