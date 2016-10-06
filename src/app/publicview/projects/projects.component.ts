import { Component, OnInit } from '@angular/core';

import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [this.project, this.otherProject, this.anotherProject];
  project = new Project('TestProjectName', 'Test Project Information Description words about this project and other stuff', 'https://source.unsplash.com/random/400x300');

  otherProject = new Project('TestProjectName2', '22 Test Project Information Description words about this project and other stuff', 'https://source.unsplash.com/random/400x300');

  anotherProject = new Project('TestProjectName3', '33 Test Project Information Description words about this project and other stuff', 'https://source.unsplash.com/random/400x300');

  constructor() { }

  ngOnInit() {
  }

}
