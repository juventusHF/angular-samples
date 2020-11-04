import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {

  // Define variables for this spec file
  let fixture: ComponentFixture<BootstrapComponent>;
  let component: BootstrapComponent;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the BootstrapComponent for each test
    fixture = TestBed.createComponent(BootstrapComponent);
    // Get the instance of the BootstrapComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });
});
