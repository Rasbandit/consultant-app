import { Note } from '../client-notes/note';

export class ClientNotesService {

  private notes: Note[] = [];

  constructor() { }

  getNotes() {
    return this.notes;
  }

  addNotes(notes: Note[]) {
    Array.prototype.push.apply(this.notes, notes);
  }

}
