import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarouslideComponent } from './owl-carouslide.component';

describe('OwlCarouslideComponent', () => {
  let component: OwlCarouslideComponent;
  let fixture: ComponentFixture<OwlCarouslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlCarouslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlCarouslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
