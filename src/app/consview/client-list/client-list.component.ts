import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Client, ClientListItemComponent, Note, ClientService } from '../../consview';
//

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [
    new Client('test1', 'test description1', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg'
    , [
      new Note('Meeting', 2),
      new Note('Phone Call', .75)
  ]
),
    new Client('test2', 'test description2', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg'
    , [
      new Note('stuff', 6),
      new Note('things', 3),
      new Note('more here', 1.3)
    ]
  )
  ];



  @Output() clientSelected = new EventEmitter<Client>();

  // constructor(private clientService: ClientService) { }
  constructor() { }

  ngOnInit() {
    // this.clients = this.clientService.getClients();
  }

  onSelected(client: Client) {
    this.clientSelected.emit(client);
  }

}
