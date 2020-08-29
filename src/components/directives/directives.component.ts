import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  render = false;
  redText = false;
  timestamps: Array<number> = [];

  ngOnInit(): void {
    this.addTimestamp();
  }

  addTimestamp(): void {
    this.timestamps.push(new Date().getTime());
  }

  removeTimestamp(): void {
    this.timestamps = this.timestamps.splice(1);
  }

}
