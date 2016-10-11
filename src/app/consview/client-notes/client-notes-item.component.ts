import { Component, OnInit, Input } from '@angular/core';

import { Note } from '../../consview';

@Component({
  selector: 'app-client-notes-item',
  templateUrl: './client-notes-item.component.html',
  styleUrls: ['./client-notes-item.component.css']
})
export class ClientNotesItemComponent implements OnInit {

  @Input() note: Note;
  noteId: number;

  constructor() { }

  ngOnInit() {
  }

}
