import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzurirajFaqComponent } from './azuriraj-faq.component';

describe('AzurirajFaqComponent', () => {
  let component: AzurirajFaqComponent;
  let fixture: ComponentFixture<AzurirajFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzurirajFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzurirajFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
