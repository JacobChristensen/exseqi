import {Injectable} from "@angular/core";
import { Employee } from "./employee";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Http, Response, BaseRequestOptions } from '@angular/http'
import {AngularFire, FirebaseListObservable} from "angularfire2";

function delete$key (key:string, value:any){
  if ( key === "$key" ) {
    return undefined;
  }
  return value;
}

@Injectable()
export class EmployeeService {

  private EMPLOYEES: FirebaseListObservable<Employee[]> = this.af.database.list('/employees/', {
      query: {
        orderByChild: 'isActive',
        equalTo: true
      }
    });

  private INACTIVE_EMPLOYEES: FirebaseListObservable<Employee[]> = this.af.database.list('/employees/', {
    query: {
      orderByChild: 'isActive',
      equalTo: false
    }
  });

  constructor(
    private af: AngularFire
  ){}

  getEmployees(): Observable<Employee[]>{
    return this.EMPLOYEES;
  }
  getInactiveEmployees(): Observable<Employee[]>{
    return this.INACTIVE_EMPLOYEES;
  }

  getEmployee(uid: string): Observable<Employee> {
    return this.af.database.object('/employees/' + uid);
  }

  getEmployeeByEmail(email:string):Observable<any> {
    return this.af.database.list('/employees/', {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    })
  }

  createEmployee(email: string, password: string, emp:Employee){
    this.af.auth.createUser({"email": email, "password": password}).then(
      user => {
        emp.uid = user.uid;
        this.EMPLOYEES.push(emp);
      }
    );
  }

  updateEmployee(key:string, emp:Employee){
    this.EMPLOYEES.update(key, JSON.parse(JSON.stringify(emp, delete$key)));
  }

}
