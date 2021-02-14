import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

;

interface Years {
  roman: string | undefined;
  year: number | undefined;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  years: Years[] | undefined;
  username: string | undefined;
  password: string | undefined;
  studentid: string | undefined;
  mobileno: number | undefined;
  ghusername: number | undefined;
  isVisible = false;

  departments: string[];

  departmentControl: any;

  yearControl: any;


  ngOnInit() {
    this.departmentControl = new FormControl('', Validators.required);
    this.yearControl = new FormControl('', Validators.required);
    const selectFormControl = new FormControl('', Validators.required);
    this.departments = ['EEE', 'IT', 'CSE'];
    this.years = [
      {roman: 'I', year: 1},
      {roman: 'II', year: 2},
      {roman: 'III', year: 3},
      {roman: 'IV', year: 4},
    ];

  }

  login(): void {
    if (this.username == 'inherit' && this.password == '1234') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid credientials');
    }
  }

  forgetpassword(): void {
    console.log('Forgot password');

  }

  signup(): void {
    const rightCard = document.getElementById('rcard');
    const rightForm = document.getElementById('rform');
    const leftCard = document.getElementById('lcard');
    const leftForm = document.getElementById('lform');
    const leftBg = document.getElementById('left');
    const rightBg = document.getElementById('right');
    leftBg
      .style
      .background = 'linear-gradient(-315deg, #36096d 0%, #37d5d6 94%)';
    rightBg
      .style
      .background = '#ffff';
    rightCard
      .style
      .display = 'none';
    rightForm
      .style
      .display = 'flex';
    leftCard
      .style
      .display = 'block';
    leftForm
      .style
      .display = 'none';

  }

  signin(): void {
    const rightCard = document.getElementById('rcard');
    const rightForm = document.getElementById('rform');
    const leftCard = document.getElementById('lcard');
    const leftForm = document.getElementById('lform');
    const leftBg = document.getElementById('left');
    const rightBg = document.getElementById('right');
    rightBg
      .style
      .background = 'linear-gradient(315deg, #36096d 0%, #37d5d6 94%)';
    leftBg
      .style
      .background = '#ffff';
    rightCard
      .style
      .display = 'block';
    rightForm
      .style
      .display = 'none';
    leftCard
      .style
      .display = 'none';
    leftForm
      .style
      .display = 'flex';
  }

}
