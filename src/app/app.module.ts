import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ProjectDialogComponent, UserComponent} from './user/user.component';
import {CustomMaterialModule} from './core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ImportProjectComponent} from './import-project/import-project.component';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {ProjectService} from './service/project.service';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ToolbarComponent,
    ProjectDialogComponent,
    ProjectDetailsComponent,
    ImportProjectComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatPaginatorModule,
    HttpClientModule,
    MatChipsModule
  ],
  providers: [UserService, ProjectService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
