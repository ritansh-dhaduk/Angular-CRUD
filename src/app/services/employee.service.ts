import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(data: any) {
    return this.http.post('http://localhost:3000/employees', data);
  }
  // addEmployee(data: any): Observable<any> {
  //   return this.http.post('http://localhost:3000/employees', data);
  // }

  getEmployeeList() {
    return this.http.get('http://localhost:3000/employees');
  }
}
