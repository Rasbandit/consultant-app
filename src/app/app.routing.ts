import {Routes, RouterModule} from '@angular/router';


import { PublicviewComponent, PublicRoutes, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent } from './publicview';

import { GalleryComponent } from './publicview/projects/gallery/gallery.component';


import { ProjectRoutes } from './publicview/projects/project.routes';
import { ContactRoutes } from './publicview/contact/contact.routes';



//Components
import { ConsviewComponent } from './consview/consview.component';
import { FixedExpensesComponent } from './consview/fixed-expenses/fixed-expenses.component';
// import { ClientNotesComponent } from './consview/client-detail/client-notes/client-notes.component';
import { ConsRoutes } from './consview/cons.routes';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent, children: ProjectRoutes},
    { path: 'gallery', component: GalleryComponent },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent, children: ContactRoutes},
    { path: 'list', component: ConsviewComponent, children: ConsRoutes },
    { path: 'expenses', component: FixedExpensesComponent },
    // { path: 'notes', component: ClientNotesComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
