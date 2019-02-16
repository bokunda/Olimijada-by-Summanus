import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaIgaraComponent } from './izmena-igara.component';

describe('IzmenaIgaraComponent', () => {
  let component: IzmenaIgaraComponent;
  let fixture: ComponentFixture<IzmenaIgaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaIgaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaIgaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
