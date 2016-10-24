import { NgModule } from '@angular/core';

import { DepartmentListComponent } from './department-list.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentService } from './department.service';
import { DepartmentRoutingModule } from './department-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailComponent
  ],
  imports: [
    SharedModule,
    DepartmentRoutingModule
  ],
  providers: [
    DepartmentService
  ]
})

export class DepartmentModule {}
