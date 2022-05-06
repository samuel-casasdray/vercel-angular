import { Component } from '@angular/core';
import * as jose from 'jose';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data: any;

  constructor() {
    let key =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SARsBE5x_ua2ye823r2zKpQNaew3Daq8riKz5A4h3o4";
    let secret = "your-secret";
    jose.jwtVerify(key, new TextEncoder().encode(secret)).then((data) => {
      this.data = data;
    });
  }
}
