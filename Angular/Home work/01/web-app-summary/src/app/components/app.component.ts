import { Component } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-app-summary';
  person: Person = new Person(
    'Влас',
    'Сторожев',
    'Web Developer & Front-end Expert',
    18,
    'Украина, Днепр',
    '+380676761414',
    'vlas.storozhev@gmail.com',
    ['Спорт', 'IT', 'Бизнес', 'Инвестиции']
  );
}
