import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Category} from "../entity/category/category";
import {CategoryService} from "../entity/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Favour} from "../entity/favour/favour";
import {Master} from "../entity/master/master";
import {FavourService} from "../entity/favour/favour.service";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  public categories: Category[];
  public deleteCategory: Category;
  public category: Category;
  public categoryId: string;
  public favour: Favour;
  public masterId: string;
  public master: Master;
  public favours: Favour[];

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService, favourService: FavourService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
    this.route.params.subscribe(params => {
      this.masterId = params['masterId'];
    });

    this.getCategories();

  }

  public getCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  gotoAddFavours(id: string) {

    this.router.navigate(['masterpage/' + this.masterId + '/category/' + id + '/addfavours']);
  }

  gotoMasterPage() {

    this.router.navigate(['masterpage/' + this.masterId]);
  }

}
