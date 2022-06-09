import {Component, OnInit} from '@angular/core';
import {recordDtoForClient} from "../entity/recordDto/RecordDtoForClient";
import {Master} from "../entity/master/master";
import {MasterService} from "../entity/master/master.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Favour} from "../entity/favour/favour";
import {map} from 'rxjs/operators';
import {RecordService} from "../entity/record/record.service";
import {Email} from "../entity/email/mail";
import {EmailService} from "../entity/email/email.service";
import {NgForm} from '@angular/forms'


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


  mail: Email = new Email();
  recs: recordDtoForClient[];

  constructor(private router: Router, private route: ActivatedRoute, private masterService: MasterService, private recordService: RecordService, private emailService: EmailService) {

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
    this.masterService.getRecordsOfMaster(this.masterId).pipe(map((data: recordDtoForClient[]) => {
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
  }

  deleteRecord(recordId: string) {
    this.recordService.deleteRecord(recordId).subscribe(
      result => {
        this.masterService.getRecordsOfMaster(this.masterId).subscribe(
          data => {
            this.recs = data;


          }
        )
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

    if (mode === 'send') {
      button.setAttribute('data-target', '#sendMessageModal');
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

  public sendEmail(mail: Email) {
    this.emailService.sendEmail(mail).subscribe(
      data => console.log(data)
    );



  }



  canDeleteRecord(dateStr: string): boolean {
    const date = new Date(dateStr).getTime();
    return date < Date.now();
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
