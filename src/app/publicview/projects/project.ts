import { Note } from '../../consview/note';
// import { Location } from '../../shared/location';

export class Project {

  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public notes: Note[],

    //added for location
    // public location: Location[],
  ) {}

}
