import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpiComponent } from './loading-spi.component';

describe('LoadingSpiComponent', () => {
  let component: LoadingSpiComponent;
  let fixture: ComponentFixture<LoadingSpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
