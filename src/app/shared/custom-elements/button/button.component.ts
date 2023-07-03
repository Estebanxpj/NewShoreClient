import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() textValue = 'Buscar';
  @Output() onSubmit = new EventEmitter<void>();

  constructor() { }

  submit(){
    this.onSubmit.emit();
  }
}
