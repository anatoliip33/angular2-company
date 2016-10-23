import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'departments', component: DepartmentListComponent },
      { path: 'department/:id', component: DepartmentDetailComponent }
    ])
  ],
  exports: [ RouterModule ]
})

export class DepartmentRoutingModule { };
