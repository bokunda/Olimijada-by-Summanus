import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PobedePoraziComponent } from './pobede-porazi.component';

describe('PobedePoraziComponent', () => {
  let component: PobedePoraziComponent;
  let fixture: ComponentFixture<PobedePoraziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PobedePoraziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PobedePoraziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
