import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreiranjeTimovaComponent } from './kreiranje-timova.component';

describe('KreiranjeTimovaComponent', () => {
  let component: KreiranjeTimovaComponent;
  let fixture: ComponentFixture<KreiranjeTimovaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreiranjeTimovaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreiranjeTimovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
