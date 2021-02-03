import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { TextInputComponent } from './components/text-input/text-input.component';

@NgModule({
  declarations: [TextInputComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TextInputComponent,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
