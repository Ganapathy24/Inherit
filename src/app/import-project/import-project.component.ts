import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {ProjectService} from '../service/project.service';
import {Router} from '@angular/router';

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


  constructor(private projectService: ProjectService, private router: Router) {
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

  uploadProject(): void {
    let data: any = {};
    data['name'] = this.projectname;
    data['description'] = this.description;
    data['languages'] = this.toolsUsed;
    data['teamname'] = this.teamname;
    data['teammember'] = this.teammemberId;
    this.projectService.uploadData(data).subscribe((data) => {
      const x = JSON.parse(JSON.stringify(data));
      if (x['status'] === 'SUCCESSFUL') {
        alert('Project Uploaded Successfully');
        this.router.navigate(['user']);
      } else {
        alert('Something went wrong !!');
      }
    });
  }
}
