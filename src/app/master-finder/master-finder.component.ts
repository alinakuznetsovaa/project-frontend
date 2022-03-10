import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MasterService} from "../entity/master/master.service";
import {Master} from "../entity/master/master";

@Component({
  selector: 'app-master-finder',
  templateUrl: './master-finder.component.html',
  styleUrls: ['./master-finder.component.css']
})
export class MasterFinderComponent {
  masterId: string;
  master: Master;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private masterService: MasterService) {
  }

  onSubmit() {
    this.masterService.getMasterById(this.masterId).subscribe(result => {
      this.master = result;
      this.gotoMasterPage()
    });
  }

  gotoMasterPage() {
    this.router.navigate(['/masterpage/' + this.masterId]);
  }


}
