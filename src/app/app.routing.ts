import {Routes, RouterModule} from '@angular/router';

import { ConsviewComponent, ConsRoutes, ClientListComponent, ClientNotesComponent, FixedExpensesComponent } from './consview';
// import { PublicviewComponent, PublicRoutes, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent } from './publicview';

const APP_ROUTES: Routes = [
  { path: '', component: ConsviewComponent },
  // { path: '', component: PublicviewComponent, children: PublicRoutes },
  // { path: 'consview', component: ConsviewComponent },
  // { path: 'consview', component: ConsviewComponent, children: ConsRoutes },
  // { path: '**', redirectTo: '/', pathMatch: 'full'},
]

export const routing = RouterModule.forRoot(APP_ROUTES);
