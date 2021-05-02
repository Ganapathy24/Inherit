import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ImportProjectComponent} from './import-project/import-project.component';
import {SelectProjectComponent} from './select-project/select-project.component';

const routes: Routes = [
  { path: 'user', component : UserComponent},
  { path: 'login', component : LoginComponent},
  { path: '', component: LoginComponent},
  {path: 'project-details/:projectId', component: ProjectDetailsComponent},
  {path: 'import-project', component: ImportProjectComponent},
  {path: 'selected-projects', component: SelectProjectComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
