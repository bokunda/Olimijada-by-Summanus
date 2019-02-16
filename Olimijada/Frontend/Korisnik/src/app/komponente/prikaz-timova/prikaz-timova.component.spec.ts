import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazTimovaComponent } from './prikaz-timova.component';

describe('PrikazTimovaComponent', () => {
  let component: PrikazTimovaComponent;
  let fixture: ComponentFixture<PrikazTimovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazTimovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazTimovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
