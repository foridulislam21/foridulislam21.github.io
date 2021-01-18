import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  team$: Observable<any> = this.http.get('/api/about');
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.team$;
  }
}
