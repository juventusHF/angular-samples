import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee/coffee.service';
import { Coffee } from '../../models/Coffee';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private coffeeService: CoffeeService) { }

  availableCoffees: Array<Coffee> = [];
  orderedCoffees: Array<Coffee> = [];
  totalPrice = 0;

  ngOnInit(): void {
    this.availableCoffees = this.coffeeService.getAvailableCoffees();
  }

  placeOrder(coffee: Coffee): void {
    this.orderedCoffees = this.coffeeService.orderCoffee(coffee);
    this.calculateTotalOrderPrice();
  }

  cancelOrder(coffee: Coffee): void {
    this.orderedCoffees = this.coffeeService.cancelOrder(coffee);
    this.calculateTotalOrderPrice();
  }

  calculateTotalOrderPrice(): void {
    this.totalPrice = 0;
    this.orderedCoffees.forEach(coffee => {
      this.totalPrice = this.totalPrice + coffee.price;
    });
  }

}
