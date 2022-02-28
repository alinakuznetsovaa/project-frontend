import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "./entity/client/client";
import {ClientService} from "./entity/client/client.service";

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




  // constructor(private clientService: ClientService){}


}
