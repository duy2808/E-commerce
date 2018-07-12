import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouslideTwoComponent } from './carouslide-two.component';

describe('CarouslideTwoComponent', () => {
  let component: CarouslideTwoComponent;
  let fixture: ComponentFixture<CarouslideTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouslideTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouslideTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
