import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs/Rx';

import { Note } from '../note';
import { Client } from '../client-list';
import { NoteService } from '../note.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit, OnDestroy {
  selectedClient: Client;
  private subscription: Subscription;
  private clientIndex: number;

  constructor(private noteService: NoteService,
              private route: ActivatedRoute,
              private clientService: ClientService,
              private router: Router,) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.clientIndex = params['id'];
        this.selectedClient = this.clientService.getClient(this.clientIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/list', this.clientIndex, 'edit']);
  }

  onDelete() {
    this.clientService.deleteClient(this.selectedClient);
    this.router.navigate(['/list']);
  }

  onAddToNotes() {
    this.noteService.addNotes(this.selectedClient.notes);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
