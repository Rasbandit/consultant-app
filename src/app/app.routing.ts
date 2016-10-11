import {Routes, RouterModule} from '@angular/router';


import { PublicviewComponent, PublicRoutes, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent } from './publicview';


import { ConsRoutes } from './consview/cons.routes';

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

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'list', component: ConsviewComponent, children: ConsRoutes },
    { path: 'expenses', component: FixedExpensesComponent },
    // { path: '', redirectTo: '/list', pathMatch: 'full'}

  // { path: 'list', component: ClientListComponent },
  // { path: 'expenses', component: FixedExpensesComponent },
  // { path: '', component: PublicviewComponent, children: PublicRoutes },
  // { path: 'consview', component: ConsviewComponent },
  // { path: 'consview', component: ConsviewComponent, children: ConsRoutes },
  // { path: '**', redirectTo: '/', pathMatch: 'full'},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
