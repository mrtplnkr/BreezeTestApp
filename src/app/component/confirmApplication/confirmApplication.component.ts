import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { EmployeeModel } from 'src/app/shared/store/Employee/Employee.model';
import { getEmployeeState } from 'src/app/shared/store/Global/App.Selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-confirmApplication',
  templateUrl: './confirmApplication.component.html',
  styleUrls: ['./confirmApplication.component.css']
})
export class ConfirmApplicationComponent implements OnInit {
  employeeDetails: EmployeeModel | undefined;
  constructor(private store: Store<AppStateModel>) {
  }
  ngOnInit(): void {
    this.store.select(getEmployeeState).subscribe(res => {
      this.employeeDetails = res;
    });
  }
  onConfirm() {
    alert(`Thank you ${this.employeeDetails?.firstname} !`);
  }
}
