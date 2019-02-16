import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazAdminaComponent } from './prikaz-admina.component';

describe('PrikazAdminaComponent', () => {
  let component: PrikazAdminaComponent;
  let fixture: ComponentFixture<PrikazAdminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazAdminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazAdminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
