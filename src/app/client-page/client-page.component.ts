import {Component, OnInit} from '@angular/core';
import {Client} from "../entity/client/client";
import {ClientService} from "../entity/client/client.service";
import {recordDtoForClient} from "../entity/recordDto/RecordDtoForClient";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {RecordService} from "../entity/record/record.service";
import {map} from 'rxjs/operators';

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
  recs: recordDtoForClient[];

  //currentDate = new Date();

  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientService, private recordService: RecordService) {
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
    this.clientService.getAllRecordsOfClient(this.clientId).pipe(map((data: recordDtoForClient[]) => {
      return data.sort((a, b) => {
        if (a.dateStart > b.dateStart) {
          return -1;
        } else if (a.dateStart < b.dateStart) {
          return 1;
        }

        return 0;
      });
    })).subscribe(
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
    this.router.navigate(['client/' + this.clientId + '/masters']);
  }

  gotoLoginForm() {
    this.router.navigate(['/clientfinder']);
  }

  canDeleteRecord(dateStr: string): boolean {
    const date = new Date(dateStr).getTime();
    return date < Date.now();
  }

  deleteRecord(recordId: string) {
    this.recordService.deleteRecord(recordId).subscribe(
      result => {
        this.clientService.getAllRecordsOfClient(this.clientId).subscribe(
          data => {
            this.recs = data;


          }
        )
      }
    )
  }
}
