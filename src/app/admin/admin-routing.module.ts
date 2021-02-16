import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../admin/auth/login/login.component';
import { RegisterComponent } from '../admin/auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../shared/guards/auth.guard';
export const routes: Routes = [
  // { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: 'admin-panel', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
