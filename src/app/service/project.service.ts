import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = 'http://inheritproject.herokuapp.com/api/projects/';

  constructor(private http: HttpClient) {
  }

  getProjects() {
    console.log('Getting projects');
    const data: any = {};
    const queryselect: any = {};
    queryselect['languages'] = 'Javascript';
    data['query'] = queryselect;
    data['start'] = 0;
    data['limit'] = 10;
    console.log(data);
    return this.http.post(this.url + 'get', data);

  }

  uploadData(data: any) {
    return this.http.post(this.url + 'upload', data);
  }
}
