import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgreComponent } from './igre.component';

describe('IgreComponent', () => {
  let component: IgreComponent;
  let fixture: ComponentFixture<IgreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
