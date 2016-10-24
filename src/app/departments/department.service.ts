import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

import { Department } from './department';

@Injectable()
export class DepartmentService {

  private _departmentUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/';
  constructor(private _http: Http){}

  getDepartments(): Observable<Department[]> {
    return this._http.get(this._departmentUrl)
            .map((response: Response) => <Department[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  getDepartment(id: number): Observable<Department> {
    return this.getDepartments()
            .map((departments: Department[]) => departments.find(department => department.id === id));
  }

  create(name: string): Promise<Department> {
    return this._http
    .post(this._departmentUrl, JSON.stringify({name: name}))
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
