import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface SelectOption {
  id?: number;
  name?: string;
}
@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent<T extends SelectOption> implements OnInit {
  @Input()
  id!: string;

  @Input()
  options: T[] = [];

  @Input()
  optionValue!: string | number;

  @Input()
  title!: string;

  @Input()
  titleValue!: string | number;

  selected?: string | number = 0;

  @Input() selectedOption?: T;

  @Output() optionSelected = new EventEmitter<T>();

  ngOnInit(): void {}

  selectedItem(item: T) {
    this.optionSelected.emit(item);
  }
}
