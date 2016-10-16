import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


// PublicView
//Services
import { ProjectService } from './publicview/projects/project.service';

// Components
import { PublicviewComponent } from './publicview/publicview.component';
import { PublicViewHeaderComponent } from './publicview/public-view-header/public-view-header.component';
import { HomeComponent } from './publicview/home/home.component';
import { ContactComponent } from './publicview/contact/contact.component';
  import { EmailFormComponent } from './publicview/contact/email-form.component';
  import { BidFormComponent } from './publicview/contact/bid-form.component';
import { AboutComponent } from './publicview/about/about.component';
import { ProjectsComponent } from './publicview/projects/projects.component';
  import { ProjectListComponent } from './publicview/projects/project-list/project-list.component';
  import { ProjectItemComponent } from './publicview/projects/project-list/project-item.component';
  import { ProjectDetailsComponent } from './publicview/projects/project-details/project-details.component';
  import { ProjectStartComponent } from './publicview/projects/project-start/project-start.component';


// ---------------------------------------------------------------------------- \\
//Consview
//Services
import { NoteService } from './consview/note.service';
import { ClientService } from './consview/client.service';

//Components
import { ConsviewComponent } from './consview/consview.component';
import { ConsViewHeaderComponent } from './consview/cons-view-header/cons-view-header.component';
import { ClientListComponent } from './consview/client-list/client-list.component';
  import { ClientListItemComponent } from './consview/client-list/client-list-item.component';
import { ClientDetailComponent } from './consview/client-detail/client-detail.component';
  // import { ClientNotesComponent } from './consview/client-detail/client-notes/client-notes.component';
  // import { ClientNotesAddComponent } from './consview/client-detail/client-notes/client-notes-add.component';
import { ClientEditComponent } from './consview/client-edit/client-edit.component';
import { ClientStartComponent } from './consview/client-start/client-start.component';
import { FixedExpensesComponent } from './consview/fixed-expenses/fixed-expenses.component';
import { LoginComponent } from './consview/login/login.component';

import {ConfirmOptions, Position} from 'angular2-bootstrap-confirm';
import {Positioning} from 'angular2-bootstrap-confirm/position';
import {ConfirmModule} from 'angular2-bootstrap-confirm';

//Routing
import { routing } from './app.routing';
import { NotesDetailComponent } from './consview/notes-detail/notes-detail.component';
import { NotesListComponent } from './consview/notes-list/notes-list.component';
import { NotesEditComponent } from './consview/notes-edit/notes-edit.component';
import { NotesListItemComponent } from './consview/notes-list/notes-list-item.component';
import { ContactSliderComponent } from './publicview/contact/contact-slider/contact-slider.component';
import { ContactWordsComponent } from './publicview/contact/contact-words/contact-words.component';
import { MapComponent } from './publicview/map/map.component';
import { StaticMapComponent } from './publicview/map/static-map/static-map.component';
import { ProjInStatesSmComponent } from './publicview/map/static-map/proj-in-states-sm/proj-in-states-sm.component';
import { ProjectsMapComponent } from './publicview/map/static-map/projects-map/projects-map.component';
import { ConfirmComponent } from './consview/confirm/confirm.component';






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
    ClientListItemComponent,
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
    EmailFormComponent,
    BidFormComponent,
    LoginComponent,
    NotesDetailComponent,
    NotesListComponent,
    NotesEditComponent,
    NotesListItemComponent,
    ContactSliderComponent,
    ContactWordsComponent,
    MapComponent,
    StaticMapComponent,
    ProjInStatesSmComponent,
    ProjectsMapComponent,
    ConfirmComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    ConfirmModule
  ],
  providers: [
    NoteService,
    ClientService,
    ProjectService,
    ConfirmOptions,
    {provide: Position, useClass: Positioning},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
