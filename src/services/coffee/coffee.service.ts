import { Injectable } from '@angular/core';
import {Coffee} from '../../models/Coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() {
    this.availableCoffees.push({name: 'Espresso', price: 3});
    this.availableCoffees.push({name: 'Macchiato', price: 3.5});
    this.availableCoffees.push({name: 'Cappuccino', price: 3.5});
    this.availableCoffees.push({name: 'Cafe Latte', price: 3});
    this.availableCoffees.push({name: 'Mocha', price: 3.5});
    this.availableCoffees.push({name: 'Iced Coffee', price: 3});
    this.availableCoffees.push({name: 'Americano', price: 2.5});
  }

  private availableCoffees: Array<Coffee> = [];
  private orderedCoffees: Array<Coffee> = [];

  getAvailableCoffees(): Array<Coffee> {
    return this.availableCoffees;
  }

  orderCoffee(coffee: Coffee): Array<Coffee> {
    this.orderedCoffees.push({
        name: coffee.name,
        price: coffee.price,
        orderId: this.orderedCoffees.length
    });
    return this.orderedCoffees;
  }

  cancelOrder(coffee: Coffee): Array<Coffee> {
    const index = this.orderedCoffees.indexOf(coffee);
    if (index > -1) {
      this.orderedCoffees.splice(index, 1);
    }
    return this.orderedCoffees;
  }

}
