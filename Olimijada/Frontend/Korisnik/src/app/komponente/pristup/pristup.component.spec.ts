import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PristupComponent } from './pristup.component';

describe('PristupComponent', () => {
  let component: PristupComponent;
  let fixture: ComponentFixture<PristupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PristupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PristupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
