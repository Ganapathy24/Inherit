import {Component, OnInit} from '@angular/core';
import {ProjectDetails} from '../Entity/ProjectDetails';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
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
  languagesUsed: string;
  pageSize: number;
  itemsPerPage: number;
  names: string[];
  itemList: ProjectDetails[] = new Array();

  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient,
              private projectService: ProjectService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    let pd: ProjectDetails;
    this.projectService.getProjects().subscribe((abc) => {
      let data = JSON.parse(JSON.stringify(abc));
      const dataArray = data['data'];
      for (const dat in dataArray) {
        const a = dataArray[dat];
        pd = new ProjectDetails(a['_id'], a['name'], 'William Shakespeare\'s name is synonymous with many of the famous' +
          ' lines he wrote in his plays and prose....', a['languages'], 'Dummy');
        this.itemList.push(pd);
      }
    });
    // pd = new ProjectDetails('Project1', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project2', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project3', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project4', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project5', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project6', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project6', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project6', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    // pd = new ProjectDetails('Project6', '....', ['Python', 'java'], 'Dummy');
    // this.itemList.push(pd);
    this.noOfItems = 4;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      result ? this.redirect() : null;
    });
  }

  redirect(): void {
    this.router.navigate(['project-details']);
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
  constructor(
    public dialogRef: MatDialogRef<any>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
