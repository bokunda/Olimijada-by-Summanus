import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurirajTurnirComponent } from './azuriraj-turnir.component';

describe('AzurirajTurnirComponent', () => {
  let component: AzurirajTurnirComponent;
  let fixture: ComponentFixture<AzurirajTurnirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzurirajTurnirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzurirajTurnirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
