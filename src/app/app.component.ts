import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  startDate: any = new Date();
  onStartDateChange(date) {
    this.startDate = date;
    this.startDate = new Date(this.startDate).toISOString();
  }
}
