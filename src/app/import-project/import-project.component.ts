import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-import-project',
  templateUrl: './import-project.component.html',
  styleUrls: ['./import-project.component.scss']
})
export class ImportProjectComponent implements OnInit {

  projectname: any;
  description: any;
  toolsUsed: string[] = ['python', 'java'];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  teamname: string;
  teammemberId: string;


  constructor() {
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
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

  remove(tools: string): void {
    const index = this.toolsUsed.indexOf(tools);

    if (index >= 0) {
      this.toolsUsed.splice(index, 1);
    }
  }

}
