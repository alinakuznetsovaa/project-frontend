import {Component, OnInit} from '@angular/core';
import {Master} from "../entity/master/master";
import {MasterService} from "../entity/master/master.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {

  masters: Master[];
  masterId: string;
  clientId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private masterService: MasterService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId'];
    });

    this.masterService.getAllMasters().subscribe(
      data => {
        this.masters = data;
      }
    )
  }


  gotoMasterPage(masterId: string) {
    this.masterId = masterId;
    this.router.navigate(['client/' + this.clientId + '/master/' + this.masterId]);
  }
  gotoClientPage() {
    this.router.navigate(['clientpage/' + this.clientId]);
  }

}
