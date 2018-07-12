import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcarouslideComponent } from './carcarouslide.component';

describe('CarcarouslideComponent', () => {
  let component: CarcarouslideComponent;
  let fixture: ComponentFixture<CarcarouslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarcarouslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcarouslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
