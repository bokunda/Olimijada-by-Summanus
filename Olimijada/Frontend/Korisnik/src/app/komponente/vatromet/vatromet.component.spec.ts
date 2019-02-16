import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VatrometComponent } from './vatromet.component';

describe('VatrometComponent', () => {
  let component: VatrometComponent;
  let fixture: ComponentFixture<VatrometComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VatrometComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VatrometComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
