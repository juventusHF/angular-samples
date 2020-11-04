import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {

  // Define variables for this spec file
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the ChildComponent for each test
    fixture = TestBed.createComponent(ChildComponent);
    // Get the instance of the ChildComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });
});
