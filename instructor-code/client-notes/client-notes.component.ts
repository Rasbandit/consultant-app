import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs/Rx';

import { Note } from './note';
import { NoteService } from './note.service';
import { Client } from '../../client-list';
import { ClientService } from '../../client.service';
import { ClientNotesAddComponent } from './client-notes-add.component';

@Component({
  selector: 'app-client-notes',
  templateUrl: './client-notes.component.html',
  styleUrls: ['./client-notes.component.css']
})
export class ClientNotesComponent implements OnInit {

  private subscription: Subscription;
  private clientIndex: number;
  selectedClient: Client;

  notes: Note[] = [];
  selectedNote: Note = null;

  @Input() noteId: number;

  constructor(
        private noteService: NoteService,
        private route: ActivatedRoute,
        private clientService: ClientService,
        private router: Router,) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.clientIndex = params['id'];
        this.selectedClient = this.clientService.getClient(this.clientIndex);
      }
    );
  }

  onSelectNote(note: Note) {
    this.selectedNote = note;
  }

  onCleared() {
    this.selectedNote = null;
  };

//this edit needsto be changed to relate to the note, not the client
  onEdit() {
    this.router.navigate(['/list', this.clientIndex, 'edit']);

  }

  onDelete() {
    this.clientService.deleteClient(this.selectedClient);
    this.router.navigate(['/list']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
