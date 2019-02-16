import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazIgaraComponent } from './prikaz-igara.component';

describe('PrikazIgaraComponent', () => {
  let component: PrikazIgaraComponent;
  let fixture: ComponentFixture<PrikazIgaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazIgaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazIgaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
