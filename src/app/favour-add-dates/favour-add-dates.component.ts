import {Component, OnInit} from '@angular/core';
import {favourDate} from "../favour-date/favourDate";
import {ActivatedRoute, Router} from "@angular/router";
import {Record} from "../entity/record/record";
import {RecordService} from "../entity/record/record.service";
import {recordDtoForClientToCreateRecord} from "../entity/recordDto/RecordDtoForClientToCreateRecord";
import {FavourService} from "../entity/favour/favour.service";
import {Favour} from "../entity/favour/favour";
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-favour-add-dates',
  templateUrl: './favour-add-dates.component.html',
  styleUrls: ['./favour-add-dates.component.css']
})
export class FavourAddDatesComponent implements OnInit {

  dateStart: Date;
  dateEnd: Date;
  favourDate: favourDate;
  dates: Date[];
  masterId: string;
  categoryId: string;
  clientId: string;
  favourId: string;
  record: Record;
  recs: recordDtoForClientToCreateRecord[];
  favour: Favour;
  minDate: string;

  constructor(private route: ActivatedRoute,
              private router: Router, private recordService: RecordService, private favourService: FavourService) {
    this.favourDate = new favourDate();
    this.record = new Record();
    this.favour = new Favour();

    this.minDate = new Date().toISOString().substring(0, 16);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId'];
    });
    this.route.params.subscribe(params => {
      this.masterId = params['masterId']
    });
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId']
    });
    this.route.params.subscribe(params => {
      this.favourId = params['favourId']
    });


    this.recordService.getRecordsOfMasterOnFavour(this.masterId, this.categoryId).pipe(map((data: recordDtoForClientToCreateRecord[]) => {
      return data.sort((a, b) => {
        if (a.dateStart > b.dateStart) {
          return -1;
        } else if (a.dateStart < b.dateStart) {
          return 1;
        }

        return 0;
      });
    })).subscribe(
      data => {
        this.recs = data;
      }
    )

    this.favourService.getFavourById(this.favourId).subscribe(
      result => {
        this.favour = result;
      }
    )

  }

  onCreateRecord() {

    this.record.dateStart = this.favourDate.dateStart;
    this.recordService.createRecord(this.clientId, this.masterId, this.favourId, this.record).subscribe(
      result => {

        this.gotoClientPage();

      }
    )
  }

  gotoClientPage() {
    this.router.navigate(['clientpage/' + this.clientId]);
  }

  gotoMasterPage() {
    this.router.navigate(['client/' + this.clientId + '/master/' + this.masterId]);
  }
}
