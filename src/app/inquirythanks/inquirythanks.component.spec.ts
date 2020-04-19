import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirythanksComponent } from './inquirythanks.component';

describe('InquirythanksComponent', () => {
  let component: InquirythanksComponent;
  let fixture: ComponentFixture<InquirythanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquirythanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquirythanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
