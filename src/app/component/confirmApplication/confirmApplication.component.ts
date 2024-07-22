import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EmployeeModel } from 'src/app/shared/store/Employee/Employee.model';
import { getEmployeeInfo } from 'src/app/shared/store/Employee/Employee.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-confirmApplication',
  templateUrl: './confirmApplication.component.html',
  styleUrls: ['./confirmApplication.component.css']
})
export class ConfirmApplicationComponent implements OnInit {
  employeeDetails: EmployeeModel | undefined;
  constructor(private store: Store<AppStateModel>, private router: Router) {
  }
  ngOnInit(): void {
    this.store.select(getEmployeeInfo).subscribe(res => {
      if (res.firstname) {
        this.employeeDetails = res;
      }
      else {
        this.router.navigate(['']);
      }
    });
  }
  onConfirm() {
    alert(`Thank you ${this.employeeDetails?.firstname} !`);
  }
}
