import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenosUtakmiceComponent } from './prenos-utakmice.component';

describe('PrenosUtakmiceComponent', () => {
  let component: PrenosUtakmiceComponent;
  let fixture: ComponentFixture<PrenosUtakmiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenosUtakmiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenosUtakmiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
