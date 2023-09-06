import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpsListComponent } from './emps-list.component';

describe('EmpsListComponent', () => {
  let component: EmpsListComponent;
  let fixture: ComponentFixture<EmpsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
