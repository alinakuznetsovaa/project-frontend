import {Component} from '@angular/core';
import {Client} from "../entity/client/client";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../entity/client/client.service";
import {login} from "../login/login";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-finder.component.html',
  styleUrls: ['./client-finder.component.css']
})
export class ClientFinderComponent {

  clientId: string;
  email: string;
  password: string;
  client: Client;
  log: login;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService,
  ) {
    this.client = new Client();
    this.log = new login();
  }

  onSubmit() {
    this.clientService.getClientOnLogin(this.log).subscribe(
      result => {
        this.client = result;
        this.clientId = this.client.id;
        this.gotoClientPage()
      });
  }

  gotoClientPage() {
    this.router.navigate(['/clientpage/' + this.clientId]);
  }


}
