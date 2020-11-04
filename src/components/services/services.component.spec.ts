import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {

  // Define variables for this spec file
  let component: ServicesComponent;
  let fixture: ComponentFixture<ServicesComponent>;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Create a fixture of the ServicesComponent for each test
    fixture = TestBed.createComponent(ServicesComponent);
    // Get the instance of the ServicesComponent for each test
    component = fixture.componentInstance;
    // Trigger a change detection cycle for the component
    fixture.detectChanges();
  });

  it('should create', () => {
    // Assert that the component instance was successfully created
    expect(component).toBeTruthy();
  });

  it('should init availableCoffees', () => {
    // Call ngOnInit function
    component.ngOnInit();
    // Assert that the availableCoffees array got initialized
    expect(component.availableCoffees.length).toBe(7);
  });

  it('should order coffee', () => {
    // Call placeOrder function
    component.placeOrder({name: 'Iced Coffee', price: 3});
    // Assert that the ordered coffee has been pushed to the orderedCoffees array
    expect(component.orderedCoffees.length).toBe(1);
  });

  it('should cancel order', () => {
    // Call placeOrder function
    component.placeOrder({name: 'Iced Coffee', price: 3});
    // Assert that the ordered coffee has been pushed to the orderedCoffees array
    expect(component.orderedCoffees.length).toBe(1);
    // Call cancelOrder function
    component.cancelOrder(component.orderedCoffees[0]);
    // Assert that the coffee has been removed from the orderedCoffees array
    expect(component.orderedCoffees.length).toBe(0);
  });

  it('should calculate total order price', () => {
    // Call placeOrder function
    component.placeOrder({name: 'Iced Coffee', price: 3});
    component.placeOrder({name: 'Mocha', price: 3.5});
    component.placeOrder({name: 'Espresso', price: 3});
    // Assert that the ordered coffees have been pushed to the orderedCoffees array
    expect(component.orderedCoffees.length).toBe(3);
    // Call calculateTotalOrderPrice function
    component.calculateTotalOrderPrice();
    // Assert that the total is calculated correctly
    expect(component.totalPrice).toBe(9.5);
  });

});
