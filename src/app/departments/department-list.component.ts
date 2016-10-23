import { Component, OnInit } from '@angular/core';
import { IDepartment } from './department';
import { DepartmentService } from './department.service';

@Component({
  templateUrl: './department-list.component.html',
})

export class DepartmentListComponent implements OnInit {
  pageTitle: string = 'Department List';
  showEmployees: boolean = false;
  errorMessage: string;

  departments: IDepartment[];

  constructor(private _departmentService: DepartmentService){

  }

  toggleEmployees(): void {
    this.showEmployees = !this.showEmployees;
  }

  ngOnInit(): void {
    this._departmentService.getDepartments()
      .subscribe(departments => this.departments = departments,
                  error => this.errorMessage = <any>error);
  }
}
