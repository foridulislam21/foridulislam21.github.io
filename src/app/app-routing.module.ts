import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './dashboard/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: AboutMeComponent },
  {
    path: 'master-admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((mod) => mod.AdminModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
