import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
  ],
  exports: [
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
  ],
})
export class AngularMaterialModule {}
