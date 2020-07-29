import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.scss'],
})
export class DirectiveDemoComponent implements OnInit {
  isVisible: boolean = true;
  items = [1, 2, 3, 4, 5];
  color = 'Green';
  constructor() {}

  ngOnInit(): void {}
}
