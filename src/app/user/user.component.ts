import {Component, OnInit} from '@angular/core';
import {ProjectDetails} from '../Entity/ProjectDetails';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


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

  constructor(public dialog: MatDialog) {
  }
  ngOnInit(): void {
    let pd: ProjectDetails;
    this.names = ['shankar', 'apple', 'orange'];
    pd = new ProjectDetails('Project1', '....', ['Python', 'java'], 'Dummy');
    this.itemList.push(pd);
    pd = new ProjectDetails('Project2', '....', ['Python', 'java'], 'Dummy');
    this.itemList.push(pd);
    pd = new ProjectDetails('Project3', '....', ['Python', 'java'], 'Dummy');
    this.itemList.push(pd);
    pd = new ProjectDetails('Project4', '....', ['Python', 'java'], 'Dummy');
    this.itemList.push(pd);
    pd = new ProjectDetails('Project5', '....', ['Python', 'java'], 'Dummy');
    this.itemList.push(pd);
    pd = new ProjectDetails('Project6', '....', ['Python', 'java'], 'Dummy');
    this.itemList.push(pd);
    pd = new ProjectDetails('Project6', '....', ['Python', 'java'], 'Dummy');
    this.itemList.push(pd);
    this.noOfItems = 4;
  }
  openDialog(): void{
    const dialogRef = this.dialog.open(ProjectDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project.dialog.html'
})

export class ProjectDialog {
  constructor(
    public dialogRef: MatDialogRef<any>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
