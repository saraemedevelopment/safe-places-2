import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlaceFormComponent } from './new.place.form.component';

describe('NewPlaceFormComponent', () => {
  let component: NewPlaceFormComponent;
  let fixture: ComponentFixture<NewPlaceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlaceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
