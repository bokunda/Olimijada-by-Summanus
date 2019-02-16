import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoviPoMesecimaComponent } from './botovi-po-mesecima.component';

describe('BotoviPoMesecimaComponent', () => {
  let component: BotoviPoMesecimaComponent;
  let fixture: ComponentFixture<BotoviPoMesecimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotoviPoMesecimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoviPoMesecimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
