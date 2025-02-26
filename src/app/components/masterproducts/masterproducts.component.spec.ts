import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterproductsComponent } from './masterproducts.component';

describe('MasterproductsComponent', () => {
  let component: MasterproductsComponent;
  let fixture: ComponentFixture<MasterproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
