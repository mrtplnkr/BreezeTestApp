import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmApplicationComponent } from './confirmApplication.component';

describe('ConfirmApplicationComponent', () => {
  let component: ConfirmApplicationComponent;
  let fixture: ComponentFixture<ConfirmApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmApplicationComponent]
    });
    fixture = TestBed.createComponent(ConfirmApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
