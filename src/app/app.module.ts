import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {
  PublicviewComponent,
  AboutComponent,
  ContactComponent,
  HomeComponent,
  ProjectsComponent,
  ProjectItemComponent,
  ProjectDetailsComponent,
  PublicViewHeaderComponent } from './publicview';

import {
  ClientNotesService,
  ConsviewComponent,
  ClientListComponent,
  ClientNotesComponent,
  ClientListItemComponent,
  ClientNotesItemComponent,
  ConsViewHeaderComponent,
  FixedExpensesComponent,

  ClientService
} from './consview';


import { routing } from './app.routing';
import { ClientDetailComponent } from './consview/client-detail/client-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicviewComponent,
    ConsviewComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ClientListComponent,
    ClientNotesComponent,
    ClientListItemComponent,
    ClientNotesItemComponent,
    PublicViewHeaderComponent,
    ConsViewHeaderComponent,
    FixedExpensesComponent,
    ProjectDetailsComponent,
    ProjectItemComponent,
    ClientDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ClientNotesService,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
