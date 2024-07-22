import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addemployee } from 'src/app/shared/store/Employee/Employee.actions';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { LevelValidator } from 'src/app/validators/LevelValidator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formSubmitted: boolean = false;
  constructor(private store: Store<AppStateModel>, 
    private builder: FormBuilder, private router: Router) {
  }

  levels = [{id: 1,name: 'junior'}, {id: 2, name: 'mid'}, {id: 3, name: 'senior'}]
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
      firstname: this.personform.value.firstname!,
      lastname: this.personform.value.lastname!,
      lookingforwork: this.personform.value.lookingforwork!,
      level: this.personform.value.selectedLevel!
    }));
    
    this.router.navigate(['/confirm'])
  }

  ngOnInit(): void {
    console.log('levels', this.levels);
  }

}
