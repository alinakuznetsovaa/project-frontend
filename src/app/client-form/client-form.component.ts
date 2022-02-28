import { Component, OnInit } from '@angular/core';
import {Client} from "../entity/client/client";
import {ClientService} from "../entity/client/client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {

  client: Client;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) {
    this.client = new Client();
  }

  onSubmit() {
    this.clientService.createClient(this.client).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/clients']);
  }


}
