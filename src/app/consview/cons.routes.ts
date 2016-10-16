import { Routes } from '@angular/router';

import { ClientStartComponent } from './client-start/client-start.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { NotesRoutes } from './notes.routes';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';

export const ConsRoutes: Routes = [
  { path: '', component: ClientStartComponent },
  { path: 'new', component: ClientEditComponent },
  { path: ':id', component: ClientDetailComponent },
  { path: ':id/edit', component: ClientEditComponent },
  { path: ':/id/notes', component: NotesDetailComponent
// },
  , children: NotesRoutes },
];


// import { ClientNotesAddComponent } from './client-notes/client-notes-add.component';


// { path: 'notes/:id', component: ClientNotesAddComponent},
