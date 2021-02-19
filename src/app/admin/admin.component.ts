import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(
    public authService: AuthService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {}
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout() {
    this.authService.signOut();
  }
  isLogIn() {
    // tslint:disable-next-line: no-unused-expression
    this.authService.isLoggedIn;
  }
}
