import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazTurniraComponent } from './prikaz-turnira.component';

describe('PrikazTurniraComponent', () => {
  let component: PrikazTurniraComponent;
  let fixture: ComponentFixture<PrikazTurniraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazTurniraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazTurniraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
