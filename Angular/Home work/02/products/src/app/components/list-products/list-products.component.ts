import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
})
export class ListProductsComponent implements OnInit {
  products: Array<Product> = [];
  selectProduct: Product = new Product(null, null, null, null, null);
  isPopupShow: Boolean = false;
  constructor() {}

  closePopup() {
    this.selectProduct = new Product(null, null, null, null, null);
    this.isPopupShow = false;
  }
  showPopup() {
    this.isPopupShow = true;
  }
  savePopup(product: Product) {
    const prod = this.products.find((p) => p.id == product.id);
    if (prod !== undefined) {
      Object.assign(prod, product);
    } else {
      product.id = [...this.products].pop().id + 1;
      this.products.push(product);
    }
    this.closePopup();
  }

  addItem() {
    this.selectProduct = new Product(null, null, null, null, null);
    this.showPopup();
  }
  deleteItem(id: number) {
    let idx = this.products.findIndex((p) => p.id == id);
    this.products.splice(idx, 1);
  }
  editItem(id: number) {
    this.selectProduct = { ...this.products.find((p) => p.id == id) };
    this.showPopup();
  }
  ngOnInit(): void {
    this.products = [
      new Product(1, 'Хлеб', 'Очень вкусный', 'Мучное', 20),
      new Product(2, 'Молоко', 'Очень вкусное', 'Молочка', 50),
      new Product(3, 'Творог', 'Очень вкусный', 'Молочка', 70),
      new Product(4, 'Картошка', 'Очень вкусная', 'Овощи', 120),
      new Product(5, 'Помидор', 'Очень вкусный', 'Овощи', 80),
      new Product(6, 'Огурец', 'Очень вкусный', 'Овощи', 75),
    ];
  }
}
