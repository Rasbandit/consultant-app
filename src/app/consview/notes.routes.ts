import { Routes } from '@angular/router';

// import { ClientStartComponent } from './client-start/client-start.component';
// import { ClientDetailComponent } from './client-detail/client-detail.component';
// import { ClientEditComponent } from './client-edit/client-edit.component';
// import { ClientNotesComponent } from './client-detail/client-notes/client-notes.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { NotesEditComponent } from './notes-edit/notes-edit.component';


export const NotesRoutes: Routes = [
  // { path: '', component: ClientStartComponent},
  { path: 'new', component: NotesEditComponent},
  { path: ':id', component: NotesDetailComponent},
  { path: ':id/edit', component: NotesEditComponent},
];
