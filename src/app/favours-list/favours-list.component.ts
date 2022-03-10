import {Component, OnInit} from '@angular/core';
import {FavourService} from "../entity/favour/favour.service";
import {Favour} from "../entity/favour/favour";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Category} from "../entity/category/category";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-favours-list',
  templateUrl: './favours-list.component.html',
  styleUrls: ['./favours-list.component.css']
})
export class FavoursListComponent implements OnInit {
  public favours: Favour[];
  public deleteFavour: Favour;
  public favour: Favour;
  public id: string;
  public category: Category;

  constructor(private router: Router, private route: ActivatedRoute, private favourService: FavourService) {
  }

  ngOnInit(): void {
    //this.route.params.subscribe(params => {this.category.id = params['id'];});

    this.getFavours();

  }

  public getFavours(): void {
    this.favourService.getAllFavours().subscribe(
      (response: Favour[]) => {
        this.favours = response;
        console.log(this.favours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddFavour(addForm: NgForm): void {
    document.getElementById('add-favour-form')!.click();
    this.id = this.category.id;
    this.favourService.createFavour(addForm.value).subscribe(
      (response: Favour) => {
        this.favour = response;
        // this.id = this.favour.category.id;
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

  public onDeleteFavour(id: string): void {
    this.favourService.deleteFavour(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getFavours();
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

    if (mode === 'delete') {
      this.deleteFavour = favour;
      button.setAttribute('data-target', '#deleteFavourModal');
    }

    container!.appendChild(button);
    button.click();
  }

  gotoAddCategories() {
    this.router.navigate(['/addcategories']);
  }
}
