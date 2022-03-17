import {Component, OnInit} from '@angular/core';
import {favourDate} from "../favour-date/favourDate";
import {ActivatedRoute, Router} from "@angular/router";
import {MasterService} from "../entity/master/master.service";


@Component({
  selector: 'app-favour-add-dates',
  templateUrl: './favour-add-dates.component.html',
  styleUrls: ['./favour-add-dates.component.css']
})
export class FavourAddDatesComponent implements OnInit {

  date: Date;
  favourDate: favourDate;
  dates: Date[];
  masterId: string;
  categoryId: string;

  constructor(private route: ActivatedRoute,
              private router: Router, private masterService: MasterService) {
    this.favourDate = new favourDate();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.masterId = params['masterId'],
        this.categoryId = params['categoryId'],
      this.favourDate.favourId = params['id'];
    });
  }

  onSubmit() {
    this.date = this.favourDate.dateStart;
    this.masterService.setFreeDatesOfMaster(this.categoryId,this.masterId,this.date).subscribe(

    );
  }

}
