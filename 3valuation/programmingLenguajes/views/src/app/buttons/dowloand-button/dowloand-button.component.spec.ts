import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloandButtonComponent } from './dowloand-button.component';

describe('DowloandButtonComponent', () => {
  let component: DowloandButtonComponent;
  let fixture: ComponentFixture<DowloandButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowloandButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowloandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
