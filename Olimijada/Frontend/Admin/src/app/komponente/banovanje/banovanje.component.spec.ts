import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanovanjeComponent } from './banovanje.component';

describe('BanovanjeComponent', () => {
  let component: BanovanjeComponent;
  let fixture: ComponentFixture<BanovanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanovanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
