import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {Router} from '@angular/router'
import {EmployeeService} from "../employee.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {

  private employees: Employee[];

  constructor(private employeeService: EmployeeService,
              private router: Router) {
  }

  //getEmployees() {
  //this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  //}
  ngOnInit() {
    //this.getEmployees();
  }

  onSelect(key: string) {
    this.router.navigate(['/employee', key]);
  }

  onClickNew() {
    this.router.navigate(['/employee', 'new']);
  }
}
