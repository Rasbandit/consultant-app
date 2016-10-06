import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './publicview/home/home.component';
import { AboutComponent } from './publicview/about/about.component';
import { ProjectsComponent } from './publicview/projects/projects.component';
import { ContactComponent } from './publicview/contact/contact.component';
//
// consview router
// import { ConsRoutingModule } from './consview/cons-routing.module'
import { ClientsComponent } from './consview/clients/clients.component';
import { ClientListComponent } from './consview/clients/client-list/client-list.component';
import { ClientNotesComponent } from './consview/clients/client-notes/client-notes.component';
import { FixedExpensesComponent } from './consview/fixed-expenses/fixed-expenses.component';





const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'clients', component: ClientsComponent, children: [
        { path: 'list', component: ClientListComponent },
        { path: ':id/notes', component: ClientNotesComponent },
        { path: 'expenses', component: FixedExpensesComponent },

        { path: '**', redirectTo: 'list', pathMatch: 'full'}
  ] },

  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []   //ConsRoutingModule
})

export class MaxfieldGroupRoutingModule { }
