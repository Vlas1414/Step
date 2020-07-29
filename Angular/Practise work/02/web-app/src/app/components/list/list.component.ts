import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ContentChild,
  ViewChildren,
  ContentChildren,
  Output,
  EventEmitter,
} from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemInfoComponent } from '../item-info/item-info.component';

/*
  OnInit - срабатывает за первым вызовом OnChanges
  OnChanges - когда изменяються входные св-ва
  DoCheck - когда срабатывает какое либо событие
  AfterContentInit - в шаблон включается контент, который задан между тегами
  AfterContentChecked - аналог DoCheck, только используется для содержимого между тегами
  AfterViewInit - инициализация компонентов внутри шаблона
  AfterViewChecked - аналог DoCheck, используется для дочерних компонентов
  OnDestroy - когда компонента разрушается
*/

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  items: string[] = [];

  @Output() viewItemEvent = new EventEmitter<string>();

  @ViewChild(ItemComponent) viewChild: ItemComponent;
  @ContentChild(ItemComponent) contentChild: ItemComponent;
  @ViewChildren(ItemComponent) viewChildren;
  @ContentChildren(ItemComponent) contentChildren;

  clear() {
    console.log(this.contentChildren);
    console.log(this.viewChildren);
  }

  itemSelect(val: string) {
    this.viewItemEvent.emit(val);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.items = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  }
}
