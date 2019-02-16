import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlejlisteComponent } from './plejliste.component';

describe('PlejlisteComponent', () => {
  let component: PlejlisteComponent;
  let fixture: ComponentFixture<PlejlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlejlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlejlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
