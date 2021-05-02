import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProjectService} from '../service/project.service';
import {CookieService} from 'ngx-cookie-service';
import {ProjectDetails} from '../Entity/ProjectDetails';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectname: any = '';
  description: any = '';
  toolsUsed: string[] ;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  teamname: any;
  teammemberId: any;
  projectId: string;
  username: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient,
              private projectServive: ProjectService, private cookieService: CookieService) {
    this.username = this.cookieService.get('user');
    this.projectId = this.route.snapshot.paramMap.get('projectId');
    this.projectServive.getProject(this.projectId).subscribe((data: any) => {

      const x = data['data'];
      const project = x[0];
      this.projectname = project['name'];
      this.description = project['description'];
      this.teammemberId = project['teammemberId'];
      this.teamname = project['teamname'];
      this.toolsUsed = project['languages'];
    });
  }

  ngOnInit(): void {
  }

  remove(tool: string): void {
    const index = this.toolsUsed.indexOf(tool);

    if (index >= 0) {
      this.toolsUsed.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void{
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

  takeproject(): void {
    const pd =  new ProjectDetails(this.projectId, this.projectname, this.description, this.toolsUsed,
      this.teamname, this.teammemberId);
    this.projectServive.selectProjects(pd).subscribe((data) => {
      // @ts-ignore
      const status: any = data['status'];
      window.alert(status);
      if(status === 'SUCCESSFUL') {
        let d = JSON.parse(this.cookieService.get('userdata'));
        let projects = d['projects'];
        projects.push(pd);
        d['projects'] = projects;
        this.cookieService.set('userdata', JSON.stringify(d));
      }
      this.router.navigate(['user']);
    });
  }

  redirectHome() {
    this.router.navigate(['user']);
  }
}
