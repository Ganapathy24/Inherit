import { Component, OnInit } from '@angular/core';
import {ProjectDetails} from '../Entity/ProjectDetails';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ProjectService} from '../service/project.service';
import {CookieService} from 'ngx-cookie-service';
import {ProjectDialogComponent} from '../user/user.component';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.scss']
})
export class SelectProjectComponent implements OnInit {

  noOfItems: number;
  languagesUsed: any;
  pageSize: number;
  itemsPerPage: number;
  names: string[];
  itemList: ProjectDetails[] = new Array();
  username: string;
  studentId: string;
  ghusername: string;
  mobileno: string;
  department: string;
  year: any;
  projects: string[];
  selectable: true;


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
    const x = JSON.parse(this.cookieService.get('userdata'));
    console.log(x);
    const projects = x['projects'];
    console.log(projects);
    for (const index in projects){
      const a = projects[index];
      console.log(a['_projectId'] + 'selected project id');
      pd = new ProjectDetails(a['_projectId'], a['_title'], a['_description'], a['_languagesUsed'], a['_teamname'], a['_teammemberId']);
      this.itemList.push(pd);
    }

    // this.projectService.getProjects(this.languagesUsed).subscribe((abc) => {
    //   const data = JSON.parse(JSON.stringify(abc));
    //   const dataArray = data['data'];
    //   for (const dat in dataArray) {
    //     const a = dataArray[dat];
    //     pd = new ProjectDetails(a['_id'], a['name'], a['description'], a['languages'], a['teamname'], a['teammemberId']);
    //     this.itemList.push(pd);
    //   }
    // });

    this.noOfItems = 4;
  }

  openDialog(projectId: string): void {
    console.log('selected project id - ' + projectId);
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    let data: any = {};
    data['project'] = projectId;
    data['flag'] = false;
    dialogconfig.data = data;
    const dialogRef = this.dialog.open(ProjectDialogComponent, dialogconfig);

    dialogRef.afterClosed().subscribe(result => {
      result ? this.redirect(projectId) : null;
    });
  }

  redirect(projectId: string): void {
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
