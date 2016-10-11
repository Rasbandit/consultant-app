import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


// PublicView
//Services

// Components
import { PublicviewComponent } from './publicview/publicview.component';
import { PublicViewHeaderComponent } from './publicview/public-view-header/public-view-header.component';
import { HomeComponent } from './publicview/home/home.component';
import { ContactComponent } from './publicview/contact/contact.component';
import { AboutComponent } from './publicview/about/about.component';

import { ProjectsComponent } from './publicview/projects/projects.component';
import { ProjectListComponent } from './publicview/projects/project-list/project-list.component';
import { ProjectItemComponent } from './publicview/projects/project-list/project-item.component';
import { ProjectDetailsComponent } from './publicview/projects/project-details/project-details.component';
import { ProjectStartComponent } from './publicview/projects/project-start/project-start.component';


// ---------------------------------------------------------------------------- \\
//Consview
//Services
import { ClientNotesService } from './consview/client-notes/client-notes.service';
import { ClientService } from './consview/client.service';

//Components
import { ConsviewComponent } from './consview/consview.component';

import { ClientListComponent } from './consview/client-list/client-list.component';
import { ClientListItemComponent } from './consview/client-list/client-list-item.component';
import { ClientDetailComponent } from './consview/client-detail/client-detail.component';
import { ClientEditComponent } from './consview/client-edit/client-edit.component';
import { ClientNotesComponent } from './consview/client-notes/client-notes.component';
import { ClientNotesItemComponent } from './consview/client-notes/client-notes-item.component';

import { ClientStartComponent } from './consview/client-start/client-start.component';
import { ConsViewHeaderComponent } from './consview/cons-view-header/cons-view-header.component';
import { FixedExpensesComponent } from './consview/fixed-expenses/fixed-expenses.component';



//Routing
import { routing } from './app.routing';





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
    ClientDetailComponent,
    ClientEditComponent,
    ClientStartComponent,
    ProjectStartComponent,
    ProjectListComponent,


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
