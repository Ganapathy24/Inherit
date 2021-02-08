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

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'inherit' && this.password == '1234') {
      this.router.navigate(['user']);
    } else {
      alert('Invalid credientials');
    }
  }

}
