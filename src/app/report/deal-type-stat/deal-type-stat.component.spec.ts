import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealTypeStatComponent } from './deal-type-stat.component';

describe('DealTypeStatComponent', () => {
  let component: DealTypeStatComponent;
  let fixture: ComponentFixture<DealTypeStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealTypeStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealTypeStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
