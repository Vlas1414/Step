import { Component, ViewChild } from '@angular/core';
import { Person } from '../models/person';
import { ItemInfoComponent } from './item-info/item-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _title = 'web-app';
  people: Person[] = [];

  @ViewChild(ItemInfoComponent) itemInfoComp: ItemInfoComponent;

  constructor() {
    this.people.push(new Person(1, 'Vasya', 'Pupkin', 20));
    this.people.push(new Person(2, 'Masha', 'Ivanova', 23));
    this.people.push(new Person(3, 'Kolya', 'Stepanov', 19));
  }
  get title(): string {
    return `<---${this._title}--->`;
  }
  set title(value: string) {
    this._title = value;
  }
  removePerson(id: number) {
    const idx = this.people.findIndex((p) => p.id === id);
    this.people.splice(idx, 1);
    console.log('Remove ', id);
  }

  editPerson(id: number) {
    console.log('Edit ', id);
  }

  itemSelect(val: string) {
    this.itemInfoComp.value = val;
    console.log(val);
    console.log(this.itemInfoComp);
  }
}
