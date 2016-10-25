import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Department } from './department';

@Injectable()
export class DepartmentService {

  private _headers = new Headers({'Content-Type': 'application/json'});
  private _departmentUrl = 'http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments/';
  constructor(private _http: Http){}

  getDepartments(): Promise<Department[]> {
    return this._http.get(this._departmentUrl)
            .toPromise()
            .then(response => response.json() as Department[])
            .catch(this.handleError);
  }

  getDepartment(id: number): Promise<Department> {
    return this.getDepartments()
            .then(departments => departments.find(department => department.id === id));
  }

  create(name: string): Promise<Department> {
    return this._http
    .post(this._departmentUrl, JSON.stringify({name: name}), {headers: this._headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
