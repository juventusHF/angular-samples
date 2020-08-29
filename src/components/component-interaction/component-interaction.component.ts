import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  value = 'Hello World';
  redBackground = true;

  ngOnInit(): void {
  }

  changeBackgroundColor(): void {
    this.redBackground = !this.redBackground;
  }

}
