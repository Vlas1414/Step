import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() person: Person;
  @Output() removeEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>();
  onClickRemove() {
    this.removeEvent.emit(this.person.id);
  }
  onClickEdit() {
    this.editEvent.emit(this.person.id);
  }
  constructor() {}
}
