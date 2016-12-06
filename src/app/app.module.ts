import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { TimecardComponent } from './timecard/timecard.component';
import { CashRegistrerComponent } from './cash-registrer/cash-registrer.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeService } from './employee/employee.service'
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {AuthService} from "./shared/auth.service";
import {LoginComponent} from "./shared/login/login.component";
import {AuthGuardService} from "./shared/auth-guard.service";

const firebaseConfig = {
  apiKey: "AIzaSyAtqiACj58VTYIUF6-1s5bXjveyYX4SIOw",
  authDomain: "exseqi-7c0a6.firebaseapp.com",
  databaseURL: "https://exseqi-7c0a6.firebaseio.com",
  storageBucket: "exseqi-7c0a6.appspot.com",
  messagingSenderId: "1015002344955"
}

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent,
    TimecardComponent,
    CashRegistrerComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      routing,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    EmployeeService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
