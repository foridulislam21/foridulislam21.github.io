import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, AngularMaterialModule, ReactiveFormsModule],
  exports: [AngularMaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
