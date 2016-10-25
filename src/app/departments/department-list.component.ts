import { Component, OnInit } from '@angular/core';

import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
  templateUrl: './department-list.component.html',
})

export class DepartmentListComponent implements OnInit {
  pageTitle: string = 'Departments';
  showEmployees: boolean = false;

  departments: Department[];
  selectedDepartment: Department;

  constructor(private _departmentService: DepartmentService){
  }

  getDepartments(): void {
    this._departmentService
        .getDepartments()
        .then(departments => this.departments = departments);
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
    this.getDepartments();
  }

  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }
}
