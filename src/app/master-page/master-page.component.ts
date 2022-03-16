import {Component, OnInit} from '@angular/core';
import {rec} from "../entity/rec/rec";
import {Master} from "../entity/master/master";
import {MasterService} from "../entity/master/master.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Favour} from "../entity/favour/favour";

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {
  masterId: string;
  master: Master;
  editMaster: Master;
  deleteMaster: Master;
  favour: Favour;


  recs: rec[];

  constructor(private router: Router, private route: ActivatedRoute, private masterService: MasterService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.masterId = params['masterId'];
    });
    this.masterService.getMasterById(this.masterId).subscribe(
      data => {
        this.master = data;
      }
    )
    this.masterService.getRecordsOfMaster(this.masterId).subscribe(
      data => {
        this.recs = data;
      }
    )
  }


  public onOpenModal(master: Master, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');


    if (mode === 'delete') {
      this.deleteMaster = master;
      button.setAttribute('data-target', '#deleteMasterModal');
    }
    container!.appendChild(button);
    button.click();
  }


  public onDeleteMaster(masterId: string): void {
    this.masterService.deleteMaster(masterId).subscribe(
      (response: void) => {
        console.log(response);
        this.gotoAddMaster();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  gotoAddMaster() {
    this.router.navigate(['/addmaster']);
  }
  gotoLoginForm() {
    this.router.navigate(['/masterfinder']);
  }

  gotoAddCategories() {
    this.router.navigate(['/masterpage/' + this.masterId + '/categories']);
  }


}
