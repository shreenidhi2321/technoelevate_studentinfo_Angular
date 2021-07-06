import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSyudentComponent } from './update-syudent.component';

describe('UpdateSyudentComponent', () => {
  let component: UpdateSyudentComponent;
  let fixture: ComponentFixture<UpdateSyudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSyudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSyudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
