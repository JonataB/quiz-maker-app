import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'selectable-button',
  templateUrl: './selectable-button.component.html',
  styleUrls: ['./selectable-button.component.scss'],
})
export class SelectableButtonComponent {
  @Input()
  label!: string;

  @Input()
  isSelected = false;

  @Output()
  selected = new EventEmitter<string>();

  onAnswered(): void {
    this.selected.emit(this.label);
  }
}
