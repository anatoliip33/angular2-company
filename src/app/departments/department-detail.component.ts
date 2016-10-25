import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Department } from './department';
import { DepartmentService } from './department.service';

@Component({
  templateUrl: './department-detail.component.html'
})

export class DepartmentDetailComponent implements OnInit {
  pageTitle: string = 'Department Detail';
  department: Department;

  constructor(private _route: ActivatedRoute,
              private _location: Location,
              private _departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      let id = +params['id'];
      this._departmentService.getDepartment(id)
        .then(department => this.department = department);
    });
  }

  // save(): void {
  //   this._departmentService.update(this.department)
  //     .then(() => this.onBack());
  // }

  onBack(): void {
    this._location.back();
  }
}
