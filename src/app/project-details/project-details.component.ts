import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectname: any = 'Facial Gestures';
  description: any = 'Project project project';
  toolsUsed: string[] = ['python', 'java'];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  teamname = 'Geeked Out!';
  teammemberId = 'e7it085';

  constructor() {
  }

  ngOnInit(): void {
  }

  remove(tool: string) {
    const index = this.toolsUsed.indexOf(tool);

    if (index >= 0) {
      this.toolsUsed.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.toolsUsed.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
}
