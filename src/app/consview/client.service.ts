import { Injectable } from '@angular/core';

import { Client, Note } from '../consview';

@Injectable()
export class ClientService {
  private clients: Client[] = [
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

  constructor() { }

  getClients() {
    return this.clients;
  }

}