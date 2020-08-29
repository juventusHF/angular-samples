import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  today = new Date();
  amount = 29.9;
  percent = 0.2;
  pi = 3.14159265359;

  ngOnInit(): void {
  }

}
