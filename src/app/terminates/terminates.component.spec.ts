import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminatesComponent } from './terminates.component';

describe('TerminatesComponent', () => {
  let component: TerminatesComponent;
  let fixture: ComponentFixture<TerminatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
