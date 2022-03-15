import {Component, OnInit} from '@angular/core';
import {Master} from "../entity/master/master";
import {ActivatedRoute, Router} from "@angular/router";
import {MasterService} from "../entity/master/master.service";
import {FavourService} from "../entity/favour/favour.service";
import {fav} from "../fav/fav";

@Component({
  selector: 'app-master-page-for-client',
  templateUrl: './master-page-for-client.component.html',
  styleUrls: ['./master-page-for-client.component.css']
})
export class MasterPageForClientComponent implements OnInit {

  master: Master;
  favs: fav[];
  masterId: string;

  constructor(private router: Router, private route: ActivatedRoute, private masterService: MasterService,
              private favourService: FavourService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.masterId = params['masterId'];
    });
    this.masterService.getMasterById(this.masterId).subscribe(
      data => {
        this.master = data;
        console.log(data);
      }
    )
    this.favourService.getFavoursOfMaster(this.masterId).subscribe(
      data => {
        this.favs = data;
        console.log(data);
      }
    )
  }

}
