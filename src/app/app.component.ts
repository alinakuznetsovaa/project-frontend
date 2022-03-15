import {Component} from '@angular/core';
import {Client} from "./entity/client/client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  clients: Client[];

  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }

}
