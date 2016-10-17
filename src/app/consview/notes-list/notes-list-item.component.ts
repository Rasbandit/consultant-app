import { Component, Input } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.css']
})
export class NotesListItemComponent {

  @Input() note: Note;
  @Input() noteId: number;

}
