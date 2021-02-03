import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  FormData: FormGroup;
  constructor(
    private authService: AuthService,
    private builder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).{4,8}$'),
      ]),
    });
  }
  register(FormData) {
    this.authService
      .signIn(FormData.email, FormData.password)
      .then(() => {
        this.snackBar.open('You have successfully registared', 'Ok', {
          duration: 5000,
        });
        this.FormData.reset();
      })
      .catch((error) => {
        this.snackBar.open(error.message, 'Ok', {
          duration: 5000,
        });
        this.FormData.reset();
      });
  }
}
