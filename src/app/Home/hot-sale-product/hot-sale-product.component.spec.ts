import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSaleProductComponent } from './hot-sale-product.component';

describe('HotSaleProductComponent', () => {
  let component: HotSaleProductComponent;
  let fixture: ComponentFixture<HotSaleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSaleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSaleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
