import { TestBed } from '@angular/core/testing';

import { CoffeeService } from './coffee.service';

describe('CoffeeService', () => {

  // Define variables for this spec file
  let service: CoffeeService;

  // Configure ng module for each test with the needed imports and declarations
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeService);
  });

  it('should be created', () => {
    // Assert that the service instance was successfully created
    expect(service).toBeTruthy();
  });

  it('should init availableCoffees', () => {
    // Assert that the service initialized the availableCoffees
    expect(service.getAvailableCoffees().length).toBe(7);
  });

  it('should order Coffee', () => {
    // Call function orderCoffee
    const orderedCoffees = service.orderCoffee({name: 'Mocha', price: 3.5});
    // Assert that the coffee was ordered
    expect(orderedCoffees.length).toBe(1);
  });

  it('should cancel order', () => {
    // Call function orderCoffee
    let orderedCoffees = service.orderCoffee({name: 'Mocha', price: 3.5});
    // Assert that the coffee was ordered
    expect(orderedCoffees.length).toBe(1);
    // Call function cancelOrder
    orderedCoffees = service.cancelOrder(orderedCoffees[0]);
    // Assert that the order was canceled
    expect(orderedCoffees.length).toBe(0);
  });

});
