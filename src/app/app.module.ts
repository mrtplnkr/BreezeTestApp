import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.Module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EmployeeDetailsComponent } from './component/employeeDetails/employeeDetails.component';
import { MenuheaderComponent } from './component/menuheader/menuheader.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmApplicationComponent } from './component/confirmApplication/confirmApplication.component';
import { AppState } from './shared/store/Global/App.state';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    MenuheaderComponent,
    ConfirmApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(AppState),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
