import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ImportProjectComponent} from './import-project/import-project.component';

const routes: Routes = [
  { path: 'user', component : UserComponent},
  { path: 'login', component : LoginComponent},
  { path: '', component: LoginComponent},
  {path: 'project-details', component: ProjectDetailsComponent},
  {path: 'import-project', component: ImportProjectComponent}
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
