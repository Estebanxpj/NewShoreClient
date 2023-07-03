import { Component, Input } from '@angular/core';
import { IJourney } from '../../interfaces/journey.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() headerTitle = 'Informacion del Viaje';
  @Input() journey!: IJourney;
  @Input() currencySelected = 'USD';
}
