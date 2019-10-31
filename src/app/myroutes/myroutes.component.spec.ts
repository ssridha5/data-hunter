import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyroutesComponent } from './myroutes.component';

describe('MyroutesComponent', () => {
  let component: MyroutesComponent;
  let fixture: ComponentFixture<MyroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
