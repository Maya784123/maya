import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ResigneeListComponent } from './resignee-list/resignee-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewResigneeComponent } from './new-resignee/new-resignee.component';
import { ChartsModule } from 'ng2-charts';


const appRoutes: Routes = [ 
  { path: 'resignee-list', 
    component: ResigneeListComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'new-resignee',
    component: NewResigneeComponent
  }
];

//export default appRoutes;

@NgModule({
  declarations: [
    AppComponent,
    ResigneeListComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewResigneeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule, //imports firebase/firestore, only needed for database features
    AngularFireAuthModule, //imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
