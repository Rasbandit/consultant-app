import { Routes } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ProjectsComponent } from './projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectStartComponent } from './project-start/project-start.component';
// import { GalleryComponent } from './gallery/gallery.component';


export const ProjectRoutes: Routes = [

  { path: '', component: ProjectStartComponent},
  // { path: 'gallery', component: GalleryComponent },
  { path: ':id', component: ProjectDetailsComponent},

]
