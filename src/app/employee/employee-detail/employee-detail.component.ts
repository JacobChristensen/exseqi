import {Component, OnInit, OnDestroy, state} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import 'rxjs/add/operator/find';
const STATE_EDIT = 'edit';
const STATE_NEW = 'new';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [EmployeeService]
})


export class EmployeeDetailComponent implements OnInit, OnDestroy {

  private employee: Employee;
  private employees: Employee[];
  private state: String;
  private key: string;
  private email: string;
  private password: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if (id == STATE_NEW) {
        this.state = STATE_NEW;
        this.setNewView();
      } else {
        this.state = STATE_EDIT;
        this.key = id;
        this.setDetailView(id);
      }
    })
  }

  ngOnDestroy() {

  }

  setDetailView(key: string) {
    this.employeeService.getEmployee(key).subscribe(emp => {
      this.employee = (emp)
    });

  }

  setNewView() {
    this.employee = new Employee();
  }

/*  saveEmployee(empKey: string, emp: Employee) {
    if (this.state == STATE_NEW) {
      this.employeeService.createEmployee(this.employee);
    } else {
      this.employeeService.updateEmployee(empKey, emp);
    }
    this.router.navigate(['/employees']);
  }*/

  gotoListView() {
    this.router.navigate(['/employees']);
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.email = formData.email;
      this.password = formData.password;


    }

  }
}
