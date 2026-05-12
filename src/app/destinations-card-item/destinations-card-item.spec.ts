import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationsCardItem } from './destinations-card-item';

describe('DestinationsCardItem', () => {
  let component: DestinationsCardItem;
  let fixture: ComponentFixture<DestinationsCardItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsCardItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationsCardItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
