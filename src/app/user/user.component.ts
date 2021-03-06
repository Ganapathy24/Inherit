import {Component, Inject, OnInit} from '@angular/core';
import {ProjectDetails} from '../Entity/ProjectDetails';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../service/user.service';
import {ProjectService} from '../service/project.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  noOfItems: number;
  languagesUsed: any;
  pageSize: number;
  itemsPerPage: number;
  names: string[];
  itemList: ProjectDetails[] = new Array();
  selectable = true;
  username: string;
  studentId: string;
  ghusername: string;
  mobileno: string;
  department: string;
  year: any;
  projects: string[];


  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient,
              private projectService: ProjectService, private cookieService: CookieService) {
    const userdata = JSON.parse(this.cookieService.get('userdata'));
    console.log(userdata['year']);
    console.log(userdata['name']);
    this.username = userdata['name'];
    this.studentId = userdata['studentID'];
    this.ghusername = userdata['ghusername'];
    this.mobileno = userdata['mobileno'];
    this.department = userdata['department'];
    const x = JSON.parse(userdata['year']);
    this.year = x['roman'];
    this.projects = userdata['projects'];
  }

  ngOnInit(): void {
    let pd: ProjectDetails;
    this.projectService.getProjects(this.languagesUsed).subscribe((abc) => {
      const data = JSON.parse(JSON.stringify(abc));
      const dataArray = data['data'];

      for (const dat in dataArray) {
        const a = dataArray[dat];
        console.log(a['_id'] + ' listing all projects');
        pd = new ProjectDetails(a['_id'], a['name'], a['description'], a['languages'], a['teamname'], a['teammemberId']);
        this.itemList.push(pd);
      }
    });

    this.noOfItems = 4;
  }

  openDialog(projectId: string): void {
    console.log(projectId + 'id');
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    let data: any = {};
    data['project'] = projectId;
    data['flag'] = true;
    dialogconfig.data = data;
    const dialogRef = this.dialog.open(ProjectDialogComponent, dialogconfig);

    dialogRef.afterClosed().subscribe(result => {
      result ? this.redirect(projectId) : null;
    });
  }

  redirect(projectId: string): void {
    console.log('selected projects -' + projectId);
    this.router.navigate(['project-details', projectId]);
  }

  uploadProject(): void {
    this.router.navigate(['import-project']);
  }

  logout(): void {
    this.cookieService.deleteAll();
    this.router.navigate(['login']);
  }

  redirectHome(): void {
    this.router.navigate(['user']);
  }

  selectProjects(): void {
    this.router.navigate(['selected-projects']);
  }
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project.dialog.html'
})

export class ProjectDialogComponent {
  description: string;
  flag: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) {
    this.flag = data['flag'];
    console.log(this.flag + ' for dialog box');
    this.projectService.getProject(data['project']).subscribe((d: any) => {
      console.log(d['data'] + 'retrived project');
      const x = d['data'];

      const project = x[0];
      this.description = project['description'];
      console.log(this.description);
    });

  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
