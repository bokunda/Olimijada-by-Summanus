import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnirTempRankComponent } from './turnir-temp-rank.component';

describe('TurnirTempRankComponent', () => {
  let component: TurnirTempRankComponent;
  let fixture: ComponentFixture<TurnirTempRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnirTempRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnirTempRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
