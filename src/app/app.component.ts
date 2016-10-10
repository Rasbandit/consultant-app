import { Component } from '@angular/core';
<<<<<<< HEAD
=======
// import { Router, RouterModule} from '@angular/router';

import { HeaderComponent } from './publicview/header/header.component';
import { HomeComponent } from './publicview/home/home.component';
import { AboutComponent } from './publicview/about/about.component';
import { ProjectsComponent } from './publicview/projects/projects.component';
import { ContactComponent } from './publicview/contact/contact.component';
import { ClientListComponent } from './consview/client-list/client-list.component';
import { ClientInfoComponent } from './consview/client-info/client-info.component';
import { ClientAddNoteComponent } from './consview/client-add-note/client-add-note.component';
import { ClientEditNoteComponent } from './consview/client-edit-note/client-edit-note.component';
import { FixedExpensesComponent } from './consview/fixed-expenses/fixed-expenses.component';

// import { MaxfieldGroupRoutingModule } from './app-routing.module';
>>>>>>> parent of 0775b87... moved header into shared folder

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
