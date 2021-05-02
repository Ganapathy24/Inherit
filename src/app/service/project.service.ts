import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectDetails} from '../Entity/ProjectDetails';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // url = 'http://inheritproject.herokuapp.com/api/projects/';
  url = 'http://localhost:8081/api/projects/';

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  getProjects(languagesUsed: any) {
    console.log('Getting projects');
    const data: any = {};
    const queryselect: any = {};
    queryselect['languages'] = languagesUsed;
    data['query'] = queryselect;
    data['start'] = 0;
    data['limit'] = 10;
    console.log(data);
    return this.http.post(this.url + 'get', data);

  }

  uploadData(data: any) {
    return this.http.post(this.url + 'upload', data);
  }

  getProject(projectId: string) {
    const data: any = {};
    const queryselect: any = {};
    queryselect['_id'] = projectId;
    data['query'] = queryselect;
    data['start'] = 0;
    data['limit'] = 10;
    console.log(projectId + 'sending id');
    return this.http.post(this.url + 'get', data);

  }

  selectProjects(project: ProjectDetails) {
    const data: any = {};
    data['id'] = this.cookieService.get('id');
    data['project'] = project;
    console.log(data);
    return this.http.post(this.url + 'select', data);
  }
}
