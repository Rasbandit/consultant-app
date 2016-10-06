import { Component } from '@angular/core';

import { PublicviewComponent } from './publicview/publicview.component';
import { ConsviewComponent } from './consview/consview.component';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
  `,
  // styleUrls: ['./app.component.css'],
  // providers: [],
})
export class AppComponent {
}
