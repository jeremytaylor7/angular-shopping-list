import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdderFormComponent } from './adder-form.component';

describe('AdderFormComponent', () => {
  let component: AdderFormComponent;
  let fixture: ComponentFixture<AdderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
