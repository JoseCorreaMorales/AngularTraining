import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormComponent } from './reactive-form.component';

describe('ReativeFormComponent', () => {
  let component: ReativeFormComponent;
  let fixture: ComponentFixture<ReativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
