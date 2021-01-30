import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [MatSnackBarModule, MatButtonModule],
  exports: [MatSnackBarModule, MatButtonModule],
})
export class AngularMaterialModule {}
