import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArhivaUtakmicaComponent } from './arhiva-utakmica.component';

describe('ArhivaUtakmicaComponent', () => {
  let component: ArhivaUtakmicaComponent;
  let fixture: ComponentFixture<ArhivaUtakmicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArhivaUtakmicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArhivaUtakmicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
