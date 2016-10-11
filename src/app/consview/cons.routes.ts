import { Routes } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ClientListComponent, ClientNotesComponent, FixedExpensesComponent } from '../consview';


export const ConsRoutes: Routes = [
  // { path: '', redirectTo: 'clients', pathMatch: 'suffix'},
  { path: 'clients', component: ClientListComponent},
  { path: 'client/:id/notes', component: ClientNotesComponent},
  { path: 'expenses', component: FixedExpensesComponent},



]
