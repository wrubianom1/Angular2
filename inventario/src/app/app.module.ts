import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PersonaComponent } from './persona/persona.component';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { TabsModule } from 'ng2-bootstrap';
import { Ng2PaginationModule } from 'ng2-pagination'; // <-- import the module
import { Ng2TableModule } from '../components/ng-table-module';

import { PaginationModule } from 'ng2-bootstrap';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'persona', component: PersonaComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2TableModule,
    PaginationModule,
    TabsModule,
    RouterModule.forRoot(appRoutes),
  ],
 // providers: [Http],
  bootstrap: [AppComponent],


})
export class AppModule { }
