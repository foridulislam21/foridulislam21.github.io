import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(public authService: AuthService) {}
  ngOnInit() {}
  logout() {
    this.authService.signOut();
  }
  isLogIn() {
    // tslint:disable-next-line: no-unused-expression
    this.authService.isLoggedIn;
  }
}
