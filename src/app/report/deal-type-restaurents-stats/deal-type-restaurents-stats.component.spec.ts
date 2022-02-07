import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealTypeRestaurentsStatsComponent } from './deal-type-restaurents-stats.component';

describe('DealTypeRestaurentsStatsComponent', () => {
  let component: DealTypeRestaurentsStatsComponent;
  let fixture: ComponentFixture<DealTypeRestaurentsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealTypeRestaurentsStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealTypeRestaurentsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
