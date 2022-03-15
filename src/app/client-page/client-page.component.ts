import {Component, OnInit} from '@angular/core';
import {Client} from "../entity/client/client";
import {ClientService} from "../entity/client/client.service";
import {rec} from "../entity/rec/rec";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  clientId: string;
  client: Client;
  editClient: Client;
  deleteClient: Client;
  recs: rec[];

  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientService) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.clientId = params['clientId'];
    });
    this.clientService.getClientById(this.clientId).subscribe(
      data => {
        this.client = data;
      }
    )
    this.clientService.getAllRecordsOfClient(this.clientId).subscribe(
      data => {
        this.recs = data;


      }
    )
  }


  public onOpenModal(client: Client, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');


    if (mode === 'delete') {
      this.deleteClient = client;
      button.setAttribute('data-target', '#deleteClientModal');
    }
    container!.appendChild(button);
    button.click();
  }


  public onDeleteClient(clientId: string): void {
    this.clientService.deleteClient(clientId).subscribe(
      (response: void) => {
        console.log(response);
        this.gotoAddClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  gotoAddClient() {
    this.router.navigate(['/addclient']);
  }

  gotoListOfMasters() {
    this.router.navigate(['/masters']);
  }

}
