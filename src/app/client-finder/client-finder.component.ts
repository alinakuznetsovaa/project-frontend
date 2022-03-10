import {Component} from '@angular/core';
import {Client} from "../entity/client/client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../entity/client/client.service";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-finder.component.html',
  styleUrls: ['./client-finder.component.css']
})
export class ClientFinderComponent {

  clientId: string;
  client: Client;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService) {
  }

  onSubmit() {
    this.clientService.getClientById(this.clientId).subscribe(
      result => {
        this.client = result;
        this.gotoClientPage()
      });
  }

  gotoClientPage() {
    this.router.navigate(['/clientpage/' + this.clientId]);
  }


}
