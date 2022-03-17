import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientFormComponent} from './client-form/client-form.component';
import {MasterListComponent} from "./master-list/master-list.component";
import {MasterFormComponent} from "./master-form/master-form.component";
import {ClientFinderComponent} from "./client-finder/client-finder.component";
import {ClientPageComponent} from "./client-page/client-page.component";
import {MasterPageComponent} from "./master-page/master-page.component";
import {MasterFinderComponent} from "./master-finder/master-finder.component";
import {CategoriesListComponent} from "./categories-list/categories-list.component";
import {MasterPageForClientComponent} from "./master-page-for-client/master-page-for-client.component";
import {AddFavoursComponent} from "./add-favours/add-favours.component";
import {FavourAddDatesComponent} from "./favour-add-dates/favour-add-dates.component";

const routes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'addclient', component: ClientFormComponent},
  {path: 'masters', component: MasterListComponent},
  {path: 'addmaster', component: MasterFormComponent},
  {path: 'clientpage/:clientId', component: ClientPageComponent},
  {path: 'clientfinder', component: ClientFinderComponent},
  {path: 'masterpage/:masterId', component: MasterPageComponent},
  {path: 'masterfinder', component: MasterFinderComponent},
  {path: 'masterpage/:masterId/categories', component: CategoriesListComponent},
  {path: 'masters/:masterId', component: MasterPageForClientComponent},
  {path: 'masterpage/:masterId/category/:categoryId/addfavours', component: AddFavoursComponent},
  {path: 'masterpage/:masterId/category/:categoryId/favour/:id', component: FavourAddDatesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
