import { Note } from './note';

export class NoteService {
  private notes: Note[] = [];

  constructor() { }

  getNotes() {
    return this.notes;
  }

  getNote(id: number) {
    return this.notes[id];
  }

  addNotes(notes: Note[]) {
    Array.prototype.push.apply(this.notes, notes);
  }

  deleteNote(note: Note) {
    this.notes.splice(this.notes.indexOf(note), 1);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  editNote(oldNote: Note, newNote: Note) {
    this.notes[this.notes.indexOf(oldNote)] = newNote;
  };

}
