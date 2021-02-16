import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ProjectDialog, UserComponent} from './user/user.component';
import {CustomMaterialModule} from './core/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ImportProjectComponent } from './import-project/import-project.component';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ToolbarComponent,
    ProjectDialog,
    ProjectDetailsComponent,
    ImportProjectComponent,
  ],
    imports: [
        BrowserModule,
        DragDropModule,
        CustomMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        MatPaginatorModule,
        MatChipsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
