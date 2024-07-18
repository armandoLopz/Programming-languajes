import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInterfaceComponent } from './filter-interface.component';

describe('FilterInterfaceComponent', () => {
  let component: FilterInterfaceComponent;
  let fixture: ComponentFixture<FilterInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
