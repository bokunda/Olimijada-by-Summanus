import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeBotaComponent } from './dodavanje-bota.component';

describe('DodavanjeBotaComponent', () => {
  let component: DodavanjeBotaComponent;
  let fixture: ComponentFixture<DodavanjeBotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeBotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeBotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
