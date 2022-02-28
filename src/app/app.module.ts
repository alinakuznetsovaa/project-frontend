import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import {ClientService} from "./entity/client/client.service";
import {AppRoutingModule} from "./app.roating.module";
import { MasterListComponent } from './master-list/master-list.component';
import { MasterFormComponent } from './master-form/master-form.component';
import {MasterService} from "./entity/master/master.service";
import { ClientFinderComponent } from './client-finder/client-finder.component';
import { ClientPageComponent } from './client-page/client-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientFormComponent,
    MasterListComponent,
    MasterFormComponent,
    ClientFinderComponent,
    ClientPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientService, MasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
