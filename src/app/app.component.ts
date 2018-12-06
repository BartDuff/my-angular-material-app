import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: any;
  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe(res => this.myData = res);
    console.log(this.myData);
  }
}

