import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss'],
})
export class FormDemoComponent implements OnInit {
  value = '';
  constructor() {}

  ngOnInit(): void {}
}
