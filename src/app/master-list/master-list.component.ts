import {Component, OnInit} from '@angular/core';
import {Master} from "../entity/master/master";
import {MasterService} from "../entity/master/master.service";

@Component({
  selector: 'app-master-list',
  templateUrl: './master-list.component.html',
  styleUrls: ['./master-list.component.css']
})
export class MasterListComponent implements OnInit {

  masters: Master[];

  constructor(private masterService: MasterService) {
  }

  ngOnInit(): void {
    this.masterService.getAllMasters().subscribe(
      data => {
        this.masters = data;
      }
    )
  }

}
