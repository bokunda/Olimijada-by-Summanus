import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifikacijaMejlaComponent } from './verifikacija-mejla.component';

describe('VerifikacijaMejlaComponent', () => {
  let component: VerifikacijaMejlaComponent;
  let fixture: ComponentFixture<VerifikacijaMejlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifikacijaMejlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikacijaMejlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
