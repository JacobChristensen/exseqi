import {Injectable, OnInit} from '@angular/core';
import {AngularFire, AuthProviders, FirebaseAuthState, AuthMethods} from "angularfire2";
import Promise = firebase.Promise;
import {EmployeeService} from "../employee/employee.service";
import {Employee} from "../employee/employee";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  public user: {};
  public key: string;
  public isAuthUser: Boolean = false;

  constructor(private af: AngularFire,
              private employeeService: EmployeeService,
              private router: Router) {}

  epLogin(){
    this.af.auth.login({
      //provider: AuthProviders.Password

    })
  }



}
