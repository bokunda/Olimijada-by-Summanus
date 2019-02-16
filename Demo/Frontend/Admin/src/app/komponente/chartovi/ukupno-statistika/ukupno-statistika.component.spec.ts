import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UkupnoStatistikaComponent } from './ukupno-statistika.component';

describe('UkupnoStatistikaComponent', () => {
  let component: UkupnoStatistikaComponent;
  let fixture: ComponentFixture<UkupnoStatistikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UkupnoStatistikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UkupnoStatistikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
