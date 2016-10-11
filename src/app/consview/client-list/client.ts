import { Note } from '../client-notes/note';
export class Client {
  constructor(public name: string, public description: string, public imagePath: string, public notes: Note[]) {}
}


// , public notes: Note[]
