import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazPrijavaComponent } from './prikaz-prijava.component';

describe('PrikazPrijavaComponent', () => {
  let component: PrikazPrijavaComponent;
  let fixture: ComponentFixture<PrikazPrijavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazPrijavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazPrijavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
