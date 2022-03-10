import {Component, OnInit} from '@angular/core';
import {Client} from "../entity/client/client";
import {ClientService} from "../entity/client/client.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data;
    })
  }

}
