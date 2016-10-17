import { Component, Input } from '@angular/core';

import { Client } from '../client-list/client';

@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.css']
})
export class ClientListItemComponent {

  @Input() client: Client;
  @Input() clientId: number;


}
