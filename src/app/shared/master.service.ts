import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeModel } from './store/Employee/Employee.model';
import { Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor(private http: HttpClient) { }
  haveaccess() {
    return true;
  }

  GetAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>("http://localhost:3000/Employees")
  }

  CreateEmployee(employeeinput: EmployeeModel) {
    return this.http.post("http://localhost:3000/Employees", employeeinput).pipe(
      tap(()=>{
        this.http.get<EmployeeModel>("http://localhost:3000/Employees?_limit=1&_sort=id&_order=desc");
      })
    )
  }

  UpdateEmployee(employeeinput: EmployeeModel) {
    return this.http.put("http://localhost:3000/Employees/"+employeeinput.id, employeeinput);
  }

  DeleteEmployee(employeeid:number) {
    return this.http.delete("http://localhost:3000/Employees/"+employeeid);
  }

}