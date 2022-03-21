import {Component, OnInit} from '@angular/core';
import {Master} from "../entity/master/master";
import {ActivatedRoute, Router} from "@angular/router";
import {MasterService} from "../entity/master/master.service";
import {recordDtoForClient} from "../entity/recordDto/RecordDtoForClient";

@Component({
  selector: 'app-master-form',
  templateUrl: './master-form.component.html',
  styleUrls: ['./master-form.component.css']
})
export class MasterFormComponent implements OnInit {

  master: Master;
  recs: recordDtoForClient[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private masterService: MasterService) {
    this.master = new Master();
  }

  onSubmit() {

    this.masterService.createMaster(this.master).subscribe(
      result => {

        this.master = result;
        this.gotoUserList();
      });
  }


  gotoUserList() {
    this.router.navigate(['/masterpage/' + this.master.id]);
  }

  ngOnInit(): void {
  }

}
