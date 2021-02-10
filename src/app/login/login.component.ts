import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  username: string | undefined;
  password: string | undefined;
  email: string | undefined;

  isVisible = false;


  ngOnInit() {
    console.log('hello');

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
    leftBg.style.background = 'linear-gradient(-315deg, #36096d 0%, #37d5d6 94%)';
    rightBg.style.background = '#ffff';
    rightCard.style.display = 'none';
    rightForm.style.display = 'block';
    leftCard.style.display = 'block';
    leftForm.style.display = 'none';

  }

  signin(): void {
    const rightCard = document.getElementById('rcard');
    const rightForm = document.getElementById('rform');
    const leftCard = document.getElementById('lcard');
    const leftForm = document.getElementById('lform');
    const leftBg = document.getElementById('left');
    const rightBg = document.getElementById('right');
    rightBg.style.background = 'linear-gradient(315deg, #36096d 0%, #37d5d6 94%)';
    leftBg.style.background = '#ffff';
    rightCard.style.display = 'block';
    rightForm.style.display = 'none';
    leftCard.style.display = 'none';
    leftForm.style.display = 'flex';
  }

}
