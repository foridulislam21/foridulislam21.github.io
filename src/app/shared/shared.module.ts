import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentModule } from './material-component/material-component.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponentModule],
  exports: [MaterialComponentModule],
})
export class SharedModule {}
