import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Category} from "../entity/category/category";
import {CategoryService} from "../entity/category/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Favour} from "../entity/favour/favour";

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  public categories: Category[];
  public deleteCategory: Category;
  public category: Category;
  public id: string;
  public favour: Favour;

  constructor(private router: Router, private route: ActivatedRoute, private categoryService: CategoryService) {
  }

  ngOnInit(): void {

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

  public onAddCategory(addForm: NgForm): void {
    document.getElementById('add-category-form')!.click();
    this.categoryService.createCategory(addForm.value).subscribe(
      (response: void) => {
        console.log(response);
        this.getCategories();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteCategory(id: string): void {
    this.categoryService.deleteCategory(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCategories();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(category: Category, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCategoryModal');
    }

    if (mode === 'delete') {
      this.deleteCategory = category;
      button.setAttribute('data-target', '#deleteCategoryModal');
    }

    container!.appendChild(button);
    button.click();
  }

  gotoAddFavours(id: string) {

    this.router.navigate(['/addfavours/' + id]);
  }

}
