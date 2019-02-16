import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Strana404Component } from './strana-404.component';

describe('Strana404Component', () => {
  let component: Strana404Component;
  let fixture: ComponentFixture<Strana404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Strana404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Strana404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
