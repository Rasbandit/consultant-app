import { Note } from '../note';

//for location
import { Location } from '../../shared/location';


export class Client {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public notes: Note[],

    //added for location
    public location: Location[],
    
  ) {}
}


// export class Client {
//   constructor(public name: string, public description: string, public imagePath: string, notes: Note[], public location: Location[]) {}
// }
