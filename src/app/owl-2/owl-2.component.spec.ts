import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Owl2Component } from './owl-2.component';

describe('Owl2Component', () => {
  let component: Owl2Component;
  let fixture: ComponentFixture<Owl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Owl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Owl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
