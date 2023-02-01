import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveGridColumnsDirective } from './responsive-grid-columns.directive';



@NgModule({
  declarations: [
    ResponsiveGridColumnsDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResponsiveGridColumnsDirective
  ]
})
export class ResponsiveGridColumnsModule { }
