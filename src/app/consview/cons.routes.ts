import { Routes } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ConsviewComponent } from './consview.component';

// import { ClientListComponent } from './client-list/client-list.component';
// import { ClientListItemComponent } from './client-list/client-list-item.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
// import { ClientNotesComponent } from './client-notes/client-notes.component';
// import { ClientNotesItemComponent } from './client-notes/client-notes-item.component';

import { ClientStartComponent } from './client-start/client-start.component';
// import { ConsViewHeaderComponent } from './cons-view-header/cons-view-header.component';
// import { FixedExpensesComponent } from './fixed-expenses/fixed-expenses.component';


export const ConsRoutes: Routes = [

  { path: '', component: ClientStartComponent},
  { path: 'new', component: ClientEditComponent},

  { path: ':id', component: ClientDetailComponent},
  { path: ':id/edit', component: ClientEditComponent},
  // { path: '**', redirectTo: '/list'}


]
