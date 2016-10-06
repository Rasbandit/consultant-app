import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//publicview
import { AppComponent } from './app.component';
import { HomeComponent } from './publicview/home/home.component';
import { AboutComponent } from './publicview/about/about.component';

import { ProjectsComponent } from './publicview/projects/projects.component';
import { ProjectItemComponent } from './publicview/projects/project-item.component';

import { ContactComponent } from './publicview/contact/contact.component';

// consview
import { ClientsComponent } from './consview/clients/clients.component';
import { ClientListComponent } from './consview/clients/client-list/client-list.component';
import { ClientListItemComponent } from './consview/clients/client-list/client-list-item.component';

import { ClientNotesComponent } from './consview/clients/client-notes/client-notes.component';
import { ClientNotesItemComponent } from './consview/clients/client-notes/client-notes-item.component';

import { FixedExpensesComponent } from './consview/fixed-expenses/fixed-expenses.component';

// mini view
import { HeaderComponent } from './shared/header/header.component';


//routers
import { MaxfieldGroupRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

    ProjectsComponent,
    ProjectItemComponent,

    ContactComponent,

    HeaderComponent,

    ClientsComponent,
    ClientListComponent,
    ClientListItemComponent,
    ClientNotesComponent,
    ClientNotesItemComponent,

    FixedExpensesComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaxfieldGroupRoutingModule
  ],
  providers: [AppComponent,
  HomeComponent,
  AboutComponent,
  ProjectsComponent,
  ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
