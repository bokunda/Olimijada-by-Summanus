import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisniciPoMesecimaComponent } from './korisnici-po-mesecima.component';

describe('KorisniciPoMesecimaComponent', () => {
  let component: KorisniciPoMesecimaComponent;
  let fixture: ComponentFixture<KorisniciPoMesecimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisniciPoMesecimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisniciPoMesecimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
