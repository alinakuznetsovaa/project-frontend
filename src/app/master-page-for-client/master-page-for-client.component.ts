import {Component, OnInit} from '@angular/core';
import {Master} from "../entity/master/master";
import {ActivatedRoute, Router} from "@angular/router";
import {MasterService} from "../entity/master/master.service";
import {FavourService} from "../entity/favour/favour.service";
import {favourDtoToAddFavour} from "../favourDto/favourDtoToAddFavour";

@Component({
  selector: 'app-master-page-for-client',
  templateUrl: './master-page-for-client.component.html',
  styleUrls: ['./master-page-for-client.component.css']
})
export class MasterPageForClientComponent implements OnInit {

  master: Master;
  faves: favourDtoToAddFavour[];
  masterId: string;
  clientId: string;

  constructor(private router: Router, private route: ActivatedRoute, private masterService: MasterService,
              private favourService: FavourService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId'];
    });
    this.route.params.subscribe(params => {
      this.masterId = params['masterId'];
    });
    this.masterService.getMasterById(this.masterId).subscribe(
      data => {
        this.master = data;
        console.log(this.master);
      }
    )
    this.favourService.getFavoursOfMaster(this.masterId).subscribe(
      data => {
        this.faves = data;
        console.log(this.faves);
      }
    )
  }

  gotoFavour(categoryId: string, favourId: string) {
    this.router.navigate(['client/' + this.clientId + '/master/' + this.masterId + '/category/' + categoryId + '/favour/' + favourId + '/record']);
  }

  gotoMasterList() {
    this.router.navigate(['client/' + this.clientId + '/masters']);
  }
}
