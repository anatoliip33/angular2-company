import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
  templateUrl: './department-list.component.html',
})

export class DepartmentListComponent implements OnInit {
  pageTitle: string = 'Department List';
  showEmployees: boolean = false;
  errorMessage: string;

  departments: Department[];
  selectedDepartment: Department;

  constructor(private _departmentService: DepartmentService){
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._departmentService.create(name)
      .then(department => {
        this.departments.push(department);
        this.selectedDepartment = null;
    });
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
