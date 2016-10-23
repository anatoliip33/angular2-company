import { Injectable } from '@angular/core';
import { IDepartment } from './department';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'


@Injectable()
export class DepartmentService {

  private _departmentUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/';
  constructor(private _http: Http){}

  getDepartments(): Observable<IDepartment[]> {
    return this._http.get(this._departmentUrl)
            .map((response: Response) => <IDepartment[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  getDepartment(id: number): Observable<IDepartment> {
    return this.getDepartments()
            .map((departments: IDepartment[]) => departments.find(department => department.id === id));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
