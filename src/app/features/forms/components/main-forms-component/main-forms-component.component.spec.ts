import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainFormsComponet } from './main-forms-component.component';



describe('MainComponentComponent', () => {
  let component: MainFormsComponet;
  let fixture: ComponentFixture<MainFormsComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFormsComponet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFormsComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
