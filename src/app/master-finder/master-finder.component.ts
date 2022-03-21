import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MasterService} from "../entity/master/master.service";
import {Master} from "../entity/master/master";
import {login} from "../login/login";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-master-finder',
  templateUrl: './master-finder.component.html',
  styleUrls: ['./master-finder.component.css']
})
export class MasterFinderComponent {
  masterId: string;
  master: Master;
  log: login;
  isMasterFound: boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private masterService: MasterService) {
    this.master = new Master();
    this.log = new login();
  }

  onSubmit() {
    this.masterService.getMasterOnLogin(this.log).subscribe(result => {
      this.master = result;
      this.gotoMasterPage();
    },(error: HttpErrorResponse) => {

      this.isMasterFound = false;
    }
  );
  }


  gotoMasterPage() {
    this.router.navigate(['/masterpage/' + this.master.id]);
  }

  gotoRegistrationPage() {
    this.router.navigate(['addmaster/']);
  }


}
