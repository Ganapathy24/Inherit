import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://inheritproject.herokuapp.com/api/users/';

  constructor(private http: HttpClient) {
  }

  doValidation(username: string, password: string) {
    console.log('Username + ' + username + ' Password' + password);
    let body : any = {};
    body['name'] = username;
    body['password'] = password;
    return this.http.post(this.url + 'login', body);

  }
}
