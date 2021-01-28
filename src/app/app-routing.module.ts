import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './dashboard/about-me/about-me.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutService } from './shared/services/about.service';

const routes: Routes = [{ path: '', component: AboutMeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
