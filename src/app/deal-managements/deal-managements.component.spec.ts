import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealManagementsComponent } from './deal-managements.component';

describe('DealManagementsComponent', () => {
  let component: DealManagementsComponent;
  let fixture: ComponentFixture<DealManagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealManagementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealManagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
