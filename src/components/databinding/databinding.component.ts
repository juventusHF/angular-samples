import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  valueBinding = 'This text is bound via {{value}} syntax.';
  isDisabled = true;
  inputText = 'This is bound via ngModel';

  ngOnInit(): void {
  }

  onClick(): void {
    alert('button clicked');
  }

  changeText(): void {
    this.inputText = 'timestamp ' + new Date().getTime();
  }

}
