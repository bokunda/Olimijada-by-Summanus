import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultatiTurniraComponent } from './rezultati-turnira.component';

describe('RezultatiTurniraComponent', () => {
  let component: RezultatiTurniraComponent;
  let fixture: ComponentFixture<RezultatiTurniraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezultatiTurniraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezultatiTurniraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
