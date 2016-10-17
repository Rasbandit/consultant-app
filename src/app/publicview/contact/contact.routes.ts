import { Routes } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { ContactComponent } from './contact.component';
import { BidFormComponent } from './bid-form.component';
import { EmailFormComponent } from './email-form.component';



export const ContactRoutes: Routes = [

  { path: '', component: EmailFormComponent},
  { path: 'bid', component: BidFormComponent},

]
