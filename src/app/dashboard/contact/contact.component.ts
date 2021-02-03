import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../../shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
      ]),
      company: new FormControl(''),
      message: new FormControl('', [Validators.required]),
    });
  }
  sendMessage(FormData) {
    this.contactService.PostMessage(FormData);
    this.snackBar.open('Message Send Successfully.', 'ok', {
      duration: 5000,
    });
    this.FormData.reset();
  }
}
