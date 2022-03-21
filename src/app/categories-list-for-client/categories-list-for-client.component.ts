import { Component, OnInit } from '@angular/core';
import {Category} from "../entity/category/category";
import {CategoryService} from "../entity/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-categories-list-for-client',
  templateUrl: './categories-list-for-client.component.html',
  styleUrls: ['./categories-list-for-client.component.css']
})
export class CategoriesListForClientComponent implements OnInit {
  public categories: Category[];
  public clientId: string;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = params['clientId'];
    });

    this.getCategories();
  }
  public getCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
        console.log(this.categories);
      }
    );

  }
  gotoClientPage() {
    this.router.navigate(['clientpage/' + this.clientId]);
  }

  gotoChooseFavours(categoryId: string) {
    this.router.navigate(['client/' + this.clientId +'/category/' + categoryId + '/favours']);
  }

}
