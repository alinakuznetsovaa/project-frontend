import {Component, OnInit} from '@angular/core';
import {Category} from "../entity/category/category";
import {Favour} from "../entity/favour/favour";
import {Master} from "../entity/master/master";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../entity/category/category.service";
import {FavourService} from "../entity/favour/favour.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {favourDtoToAddFavour} from "../favourDto/favourDtoToAddFavour";

@Component({
  selector: 'app-add-favours',
  templateUrl: './add-favours.component.html',
  styleUrls: ['./add-favours.component.css']
})
export class AddFavoursComponent implements OnInit {
  public categories: Category[];
  public deleteCategory: Category;
  public category: Category;
  public categoryId: string;
  public favour: Favour;
  public masterId: string;
  public master: Master;
  public favours: Favour[];
  public favs: favourDtoToAddFavour[];
  public fav: favourDtoToAddFavour;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService, private favourService: FavourService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
    this.route.params.subscribe(params => {
      this.masterId = params['masterId'];
    });
    this.getFavours();
  }

  public getFavours(): void {
    this.favourService.getFavoursOfMaster(this.masterId).subscribe(
      (response: favourDtoToAddFavour[]) => {
        this.favs = response;
        console.log(this.favs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }

  public onOpenModal(favour: Favour, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addFavourModal');
    }
    container!.appendChild(button);
    button.click();
  }

  public onAddFavour(addForm: NgForm): void {
    document.getElementById('add-favour-form')!.click();
    this.favourService.createFavour(this.masterId, this.categoryId, addForm.value).subscribe(
      (response: Favour) => {
        this.favour = response;
        console.log(response);
        this.getFavours();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteFavour(favourId: string): void {

    this.favourService.deleteFavour(favourId).subscribe(
      (response: void) => {
        console.log(response);
        this.getFavours();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  gotoFavour(id: string) {
    this.router.navigate(['masterpage/' + this.masterId + '/category/' + this.categoryId + '/favour/' + id]);
  }

  gotoCategoriesPage() {
    this.router.navigate(['masterpage/' + this.masterId + '/categories']);
  }

}
