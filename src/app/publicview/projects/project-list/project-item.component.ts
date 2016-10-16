import { Component, Input } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styles: [`
        .resize {
          width: 150px;
          height: auto;
        }
    `],
})
export class ProjectItemComponent {

  @Input() project: Project;
  @Input() projectId: number;

  log() {
    console.log(this.project);
  }

}
