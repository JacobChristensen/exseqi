import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {EmployeeListComponent} from './employee/employee-list/employee-list.component'
import {TimecardComponent} from "./timecard/timecard.component";
import {CashRegistrerComponent} from './cash-registrer/cash-registrer.component'
import {EmployeeDetailComponent} from "./employee/employee-detail/employee-detail.component";
import {LoginComponent} from "./shared/login/login.component";
import {AuthGuardService} from "./shared/auth-guard.service";


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
     canActivate: [AuthGuardService]
},
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'time-card',
    component: TimecardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cash-transactions',
    component: CashRegistrerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
