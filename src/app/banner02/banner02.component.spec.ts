import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner02Component } from './banner02.component';

describe('Banner02Component', () => {
  let component: Banner02Component;
  let fixture: ComponentFixture<Banner02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
