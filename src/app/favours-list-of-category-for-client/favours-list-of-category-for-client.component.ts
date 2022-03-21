import { Component, OnInit } from '@angular/core';
import {ClientService} from "../entity/client/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {favourDtoForClient} from "../favourDto/favourDtoForClient";


@Component({
  selector: 'app-favours-list-of-category-for-client',
  templateUrl: './favours-list-of-category-for-client.component.html',
  styleUrls: ['./favours-list-of-category-for-client.component.css']
})
export class FavoursListOfCategoryForClientComponent implements OnInit {

  favs: favourDtoForClient[];
  clientId: string;
  categoryId: string;

  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId'];
      this.categoryId = params['categoryId'];
    });

    this.clientService.getFavoursOfCategory(this.categoryId).subscribe(
      result => {
        this.favs = result;
      }
    )

  }
  gotoCategoriesList() {
    this.router.navigate(['client/' + this.clientId + '/categories']);
  }

  gotoCreateRecord(favourId: string, masterId: string) {
    this.router.navigate(['client/' + this.clientId + '/master/' + masterId + '/category/' + this.categoryId + '/favour/' + favourId + '/record']);
  }
}
