import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import {MasterListComponent} from "./master-list/master-list.component";
import {MasterFormComponent} from "./master-form/master-form.component";
import {ClientFinderComponent} from "./client-finder/client-finder.component";
import {ClientPageComponent} from "./client-page/client-page.component";

const routes: Routes = [
  { path: 'clients', component: ClientListComponent },
  { path: 'addclient', component: ClientFormComponent },
  { path: 'masters', component: MasterListComponent },
  { path: 'addmaster', component: MasterFormComponent },
  { path: 'clientpage', component: ClientPageComponent },
  { path: 'clientfinder', component: ClientFinderComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
