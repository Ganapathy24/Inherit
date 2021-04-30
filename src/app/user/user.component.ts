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

  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient,
              private projectService: ProjectService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    let pd: ProjectDetails;
    this.projectService.getProjects(this.languagesUsed).subscribe((abc) => {
      let data = JSON.parse(JSON.stringify(abc));
      const dataArray = data['data'];
      for (const dat in dataArray) {
        const a = dataArray[dat];
        pd = new ProjectDetails(a['_id'], a['name'], a['description'], a['languages'], 'Dummy');
        this.itemList.push(pd);
      }
    });

    this.noOfItems = 4;
  }

  openDialog(projectId: string): void {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    let data: any = {};
    data['project'] = projectId;
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

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['login']);
  }
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project.dialog.html'
})

export class ProjectDialogComponent {
  description: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private projectService: ProjectService) {
    this.projectService.getProject(data['project']).subscribe((data: any) => {
      console.log(data);
      const x = data['data'];
      const project = x[0];
      this.description = project['description'];
      console.log(this.description);
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
