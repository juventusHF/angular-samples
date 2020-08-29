import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() valueFromParent;
  @Output() changeParentColor = new EventEmitter();

  ngOnInit(): void {
  }

  changeParentBackground(): void {
    this.changeParentColor.emit();
  }

}
