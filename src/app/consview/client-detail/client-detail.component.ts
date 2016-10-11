import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs/Rx';


import { Client } from '../client-list';

import { ClientNotesService } from '../client-notes/client-notes.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private clientIndex: number;

  selectedClient: Client;

  constructor(
              private clientNotesService: ClientNotesService,
              private route: ActivatedRoute,
              private clientService: ClientService,
            ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.clientIndex = params['id'];
        this.selectedClient = this.clientService.getClient(this.clientIndex)
      }
    )
  }

  onAddToNotes() {
    this.clientNotesService.addNotes(this.selectedClient.notes);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
