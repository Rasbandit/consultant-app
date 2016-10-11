import { Component, OnInit, EventEmitter, Output } from '@angular/core';


import { Note } from '../client-notes/note';
import { ClientNotesService } from '../client-notes/client-notes.service';
import { ClientService } from '../client.service';

import { Client } from '../client-list/client';
import { ClientListItemComponent } from '../client-list/client-list-item.component';
//

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [
//     new Client('Test1', 'test description1', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg'
//     , [
//       new Note('Meeting', 2),
//       new Note('Phone Call', .75)
//   ]
// ),
//     new Client('Test2', 'test description2', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg'
//     , [
//       new Note('stuff', 6),
//       new Note('things', 3),
//       new Note('more here', 1.3)
//     ]
//   )
  ];




  constructor(private clientService: ClientService) { }
  // constructor() { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

  onSelected(client: Client) {

  }

}
