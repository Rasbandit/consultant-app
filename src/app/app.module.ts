import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './publicview/home/home.component';
import { AboutComponent } from './publicview/about/about.component';
import { ProjectsComponent } from './publicview/projects/projects.component';
import { ContactComponent } from './publicview/contact/contact.component';
import { ClientListComponent } from './consview/client-list/client-list.component';
import { ClientInfoComponent } from './consview/client-info/client-info.component';
import { ClientAddNoteComponent } from './consview/client-add-note/client-add-note.component';
import { ClientEditNoteComponent } from './consview/client-edit-note/client-edit-note.component';
import { FixedExpensesComponent } from './consview/fixed-expenses/fixed-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ClientListComponent,
    ClientInfoComponent,
    ClientAddNoteComponent,
    ClientEditNoteComponent,
    FixedExpensesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
