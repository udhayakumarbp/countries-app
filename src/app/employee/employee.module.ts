import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeidComponent } from '../employeeid/employeeid.component';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: ':id',
    component: EmployeeidComponent
  },
];

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeidComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
