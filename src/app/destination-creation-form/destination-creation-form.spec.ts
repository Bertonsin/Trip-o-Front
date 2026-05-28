import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationCreationForm } from './destination-creation-form';

describe('DestinationCreationForm', () => {
  let component: DestinationCreationForm;
  let fixture: ComponentFixture<DestinationCreationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationCreationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationCreationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
