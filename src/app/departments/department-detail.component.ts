import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IDepartment } from './department';
import { DepartmentService } from './department.service';


@Component({
  templateUrl: './department-detail.component.html'
})

export class DepartmentDetailComponent {
  pageTitle: string = 'Department Detail';
  department: IDepartment;
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.pageTitle += `: ${id}`;
        this.getDepartment(id);
      });
  }

  getDepartment(id: number) {
    this._departmentService.getDepartment(id).subscribe(
      department => this.department = department,
      error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['/departments']);
  }
}
