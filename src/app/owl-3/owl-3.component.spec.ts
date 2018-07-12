import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Owl3Component } from './owl-3.component';

describe('Owl3Component', () => {
  let component: Owl3Component;
  let fixture: ComponentFixture<Owl3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Owl3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Owl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
