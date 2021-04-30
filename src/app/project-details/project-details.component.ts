import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProjectService} from '../service/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectname: any = 'Inherit';
  description: any = 'William Shakespeare \'s name is synonymous with many of the famous lines he wrote in his plays and prose. Yet his' +
    'poems are not nearly as recognizable to many as the characters and famous monologues from his many plays.' +
    'In Shakespeare\'s era (1564-1616), it was not profitable but very fashionable to write poetry. It also provided' +
    'credibility to his talent as a writer and helped to enhance his social standing. It seems writing poetry was' +
    'something he greatly enjoyed and did mainly for himself at times when he was not consumed with writing a play.' +
    'Because of their more private nature, few poems, particularly long-form poems, have been published.' +
    'The two longest works that scholars agree were written by Shakespear.';
  toolsUsed: string[] = ['python', 'Django'];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  teamname = 'Geeked Out!';
  teammemberId = 'e7it085';
  projectId: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
              private projectServive: ProjectService) {
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    this.projectServive.getProject(this.projectId).subscribe((data: any) => {

      const x = data['data'];
      const project = x[0];
      this.projectname = project['name'];
      this.description = project['description'];
      this.teammemberId = project['teammember'];
      this.teamname = project['teamname'];
      this.toolsUsed = project['languages'];
    });
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

  logout(): void {
    this.router.navigate(['login']);
  }
}
