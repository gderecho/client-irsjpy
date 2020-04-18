import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KankeishaComponent } from './kankeisha.component';

describe('KankeishaComponent', () => {
  let component: KankeishaComponent;
  let fixture: ComponentFixture<KankeishaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KankeishaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KankeishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
