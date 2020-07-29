import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() value: Product;
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();
  constructor() {}

  deleteItem() {
    this.deleteEvent.emit(this.value.id);
  }
  editItem() {
    this.editEvent.emit(this.value.id);
  }

  ngOnInit(): void {}
}
