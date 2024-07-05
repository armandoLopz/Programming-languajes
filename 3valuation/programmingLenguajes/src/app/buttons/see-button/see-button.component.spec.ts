import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeButtonComponent } from './see-button.component';

describe('SeeButtonComponent', () => {
  let component: SeeButtonComponent;
  let fixture: ComponentFixture<SeeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
