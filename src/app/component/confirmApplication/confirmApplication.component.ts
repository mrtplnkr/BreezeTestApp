import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EmployeeModel } from 'src/app/shared/store/Employee/Employee.model';
import { getEmployeeInfo } from 'src/app/shared/store/Employee/Employee.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-confirm-application',
  templateUrl: './confirmApplication.component.html',
  styleUrls: ['./confirmApplication.component.css']
})
export class ConfirmApplicationComponent implements OnInit, OnDestroy {
  employeeDetails: EmployeeModel | undefined;
  employeeSubscriber !: Subscription;
  constructor(private store: Store<AppStateModel>, private router: Router) {
  }
  
  ngOnInit(): void {
    this.employeeSubscriber = this.store.select(getEmployeeInfo).subscribe((res?: EmployeeModel) => {
      if (res) {
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
  
  ngOnDestroy(): void {
    if(this.employeeSubscriber){
      this.employeeSubscriber.unsubscribe();
    }
  }
}
