import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() product: Product;
  @Input() isShow: boolean;
  @Output() closePopup = new EventEmitter();
  @Output() savePopup = new EventEmitter<Product>();
  constructor() {}

  close() {
    this.closePopup.emit();
  }
  save() {
    this.savePopup.emit(this.product);
  }

  ngOnInit(): void {}
}
