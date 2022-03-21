import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientFormComponent} from './client-form/client-form.component';
import {ClientService} from "./entity/client/client.service";
import {AppRoutingModule} from "./app.roating.module";
import {MasterListComponent} from './master-list/master-list.component';
import {MasterFormComponent} from './master-form/master-form.component';
import {MasterService} from "./entity/master/master.service";
import {ClientFinderComponent} from './client-finder/client-finder.component';
import {ClientPageComponent} from './client-page/client-page.component';
import {MasterFinderComponent} from './master-finder/master-finder.component';
import {MasterPageComponent} from './master-page/master-page.component';
import {FavourService} from "./entity/favour/favour.service";
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {CategoryService} from "./entity/category/category.service";
import {MasterPageForClientComponent} from './master-page-for-client/master-page-for-client.component';
import {AddFavoursComponent} from './add-favours/add-favours.component';
import {FavourAddDatesComponent} from './favour-add-dates/favour-add-dates.component';
import {RecordService} from "./entity/record/record.service";

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientFormComponent,
    MasterListComponent,
    MasterFormComponent,
    ClientFinderComponent,
    ClientPageComponent,
    MasterFinderComponent,
    MasterPageComponent,
    CategoriesListComponent,
    MasterPageForClientComponent,
    AddFavoursComponent,
    FavourAddDatesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService, MasterService, FavourService, CategoryService, RecordService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
