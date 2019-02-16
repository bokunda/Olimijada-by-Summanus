import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgraTempRankComponent } from './igra-temp-rank.component';

describe('IgraTempRankComponent', () => {
  let component: IgraTempRankComponent;
  let fixture: ComponentFixture<IgraTempRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgraTempRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgraTempRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
