import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRoute } from '../../interfaces/route.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
})
export class SearchInputComponent {

  @Input() placeholder = 'Buscando...';
  @Input() listOrigin: Array<string> = [];
  @Input() listDestination: Array<string> = [];
  @Output() goToSearch = new EventEmitter<IRoute>();

  public coincidenceFrom = '';
  public coincidenceTo = '';
  public messageError = '';
  public hasError = false;
  public isEnabledSearch = false;

  constructor() {}

  selectedCoincidenceFrom(coincidenceFrom: string) {
    this.coincidenceFrom = coincidenceFrom;
    this.validateData();
  }

  selectedCoincidenceTo(coincidenceTo: string) {
    this.coincidenceTo = coincidenceTo;
    this.validateData();
  }

  validateData() {
    this.messageError = '';
    this.hasError = false;
    if (this.coincidenceFrom.length >= 3 || this.coincidenceTo.length >= 3) {
      if (this.coincidenceFrom === this.coincidenceTo) {
        this.messageError = 'El origen y el destino no pueden ser el mismo.';
        this.hasError = true;
        return;
      }
    }

    this.canSearch();
  }

  canSearch() {
    this.isEnabledSearch = false;
    if (this.coincidenceFrom.length >= 3 && this.coincidenceTo.length >= 3) {
      this.isEnabledSearch = true;
    }
  }

  search() {
    if (this.isEnabledSearch) {
      let params: IRoute = {
        origin: this.coincidenceFrom,
        destination: this.coincidenceTo,
      };
      this.goToSearch.emit(params);
    }
  }
}
