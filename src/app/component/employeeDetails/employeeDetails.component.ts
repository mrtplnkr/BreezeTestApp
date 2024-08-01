import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addemployee } from 'src/app/shared/store/Employee/Employee.actions';
import { LevelOptions } from 'src/app/shared/store/Employee/Employee.model';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { LevelValidator } from 'src/app/validators/LevelValidator';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employeeDetails.component.html',
  styleUrls: ['./employeeDetails.component.css']
})
export class EmployeeDetailsComponent {
  levels = LevelOptions;
  formSubmitted = false;
  constructor(private store: Store<AppStateModel>, 
    private builder: FormBuilder, private router: Router) {
  }

  personform = this.builder.group({
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    lookingforwork: this.builder.control(true),
    selectedLevel: this.builder.control(undefined, Validators.required),
    mathTest: this.builder.control(''),
    aLetterTest: this.builder.control('')
  }, {
    validators: LevelValidator('selectedLevel')
  })

  resetConditionalValues() {
    this.personform.controls.mathTest.setValue('');
    this.personform.controls.aLetterTest.setValue('');
  }

  SaveEmployees() {
    this.formSubmitted = true;

    if (!this.personform.valid) return;
    
    this.store.dispatch(addemployee({
      firstname: this.personform.value.firstname?this.personform.value.firstname : '',
      lastname: this.personform.value.lastname? this.personform.value.lastname : '',
      lookingforwork: this.personform.value.lookingforwork ? this.personform.value.lookingforwork : false,
      level: this.personform.value.selectedLevel ? this.personform.value.selectedLevel : 0
    }));
    
    this.router.navigate(['/confirm'])
  }

}
