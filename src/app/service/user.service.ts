import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // url = 'http://inheritproject.herokuapp.com/api/users/';
  url = 'http://localhost:8081/api/users/';

  constructor(private http: HttpClient) {
  }

  doValidation(username: string, password: string) {
    console.log('Username + ' + username + ' Password' + password);
    let body: any = {};
    body['name'] = username;
    body['password'] = password;
    return this.http.post(this.url + 'login', body);

  }


  register(username: string, studentid: string, ghusername: number, mobileno: number, departmentControl: any, yearControl: any) {
    let data:any = {};
    data['name'] = username;
    data['studentID'] = studentid;
    data['ghusername'] = ghusername;
    data['mobileno'] = mobileno;
    data['department'] = departmentControl;
    data['year'] = yearControl;
    data['password'] = 'sairam@123';
    console.log(data);
    return this.http.post(this.url + 'register', data);
  }
}
