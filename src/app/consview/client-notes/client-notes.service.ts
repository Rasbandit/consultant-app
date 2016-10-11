import { Note } from '../../consview';

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
