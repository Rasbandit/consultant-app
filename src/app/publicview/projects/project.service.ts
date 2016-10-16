import { Injectable } from '@angular/core';

import { Project } from './project';
// import { Client } from '../../consview/client-list/client';
import { Note } from '../../consview/note';
// import { Location } from '../../shared/location';

@Injectable()
export class ProjectService {
  private projects: Project[] = [

//     new Project(
// //added for location
//       [
//       new Client(
// // pre-location stuff
//         'Freemont Street Experience',
//       'test description1 this is a description for the first project',
//       'https://unsplash.it/600/400',
//       [
//         new Note('Meeting', 2),
//         new Note('Phone Call', 7)
//       ],
//       //added for location [lat, long]
//       [new Location(36.170776, -115.144728)])
// //added for loaction
//     ]
// // pre-location stuff
//   ),
//
//     new Project([
//       new Client('The Mob Museum',
//         'test description2 more words here about project 2',
//         'https://unsplash.it/600/400/?random',
//         [
//           new Note('Meeting', 2),
//           new Note('Phone Call', 7)
//         ],
//         //added for location [lat, long]
//         [new Location(36.172768, -115.139999)]
//       )]
//     ),
//
//         new Project([
//           new Client('Heritage Park',
//             'test description3 project 3 filler',
//             'https://unsplash.it/600/400/?random',
//             [
//               new Note('Meeting', 2),
//               new Note('Phone Call', 7)
//             ],
//             //added for location [lat, long]
//             [new Location(36.030705, -114.955465)]
//           )]
//         ),
//
//         new Project([
//           new Client('test4',
//             'test description4 carry the 4. F U Science!',
//             'https://unsplash.it/600/400/?random',
//             [
//               new Note('Meeting', 2),
//               new Note('Phone Call', 7)
//             ],
//             //added for location [lat, long]
//             [new Location(36.1699, -115.1398)]
//           )]
//         ),

new Project(
//added for location

// pre-location stuff
    'Freemont Street Experience',
  'test description1 this is a description for the first project',
  'https://unsplash.it/600/400',
  [
    new Note('Meeting', 2),
    new Note('Phone Call', 7)
  ],
  //added for location [lat, long]
  // [new Location(36.170776, -115.144728)]
),


new Project('The Mob Museum',
    'test description2 more words here about project 2',
    'https://unsplash.it/600/400/?random',
    [
      new Note('Meeting', 2),
      new Note('Phone Call', 7)
    ],
    //added for location [lat, long]
    // [new Location(36.172768, -115.139999)]

  ),

    // new Project([
    //   new Client('Heritage Park',
    //     'test description3 project 3 filler',
    //     'https://unsplash.it/600/400/?random',
    //     [
    //       new Note('Meeting', 2),
    //       new Note('Phone Call', 7)
    //     ],
    //     //added for location [lat, long]
    //     [new Location(36.030705, -114.955465)]
    //   )]
    // ),
    //
    // new Project([
    //   new Client('test4',
    //     'test description4 carry the 4. F U Science!',
    //     'https://unsplash.it/600/400/?random',
    //     [
    //       new Note('Meeting', 2),
    //       new Note('Phone Call', 7)
    //     ],
    //     //added for location [lat, long]
    //     [new Location(36.1699, -115.1398)]
    //   )]
    // ),

  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProject(id: number) {
    return this.projects[id];
  }

  addProject(project: Project) {
    this.projects.push(project);
  }

}
