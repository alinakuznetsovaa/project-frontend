import { Component, OnInit } from '@angular/core';
import {Client} from "../entity/client/client";
import {ClientService} from "../entity/client/client.service";
import {Record} from "../entity/record/record";
import {rec} from "../entity/rec/rec";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  client: Client;
  recs: rec[];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
      this.clientService.getAllRecordsOfClient(this.client.id).subscribe(
        data => {
          this.recs = data;
        }
      )
  }

}
