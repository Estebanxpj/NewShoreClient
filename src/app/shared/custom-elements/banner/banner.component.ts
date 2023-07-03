import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  @Input() listCoincidences: Array<string> = [];
  @Input() maxCharactersToValidate: number = 3;
  @Input() set valueToSearch(value: string) {
    this.changeCoincidences(value);
  }
  @Output() selectedCoincidence = new EventEmitter<string>();
  
  public showCoincidences = false;
  public listDestinationShow: Array<string> = [];

  constructor() { }

  changeCoincidences(value: string){
    if (value.length >= this.maxCharactersToValidate) {
      this.showCoincidences = false;
      return;
    }

    if (value) {
      this.listDestinationShow = this.listCoincidences.filter(x=> x.includes(value));
      if (this.listDestinationShow.length > 0) {
        this.showCoincidences = true;
        return;
      }
    }
    this.showCoincidences = false;
  }

  selectCoincidence(coincidence: string){
    this.showCoincidences = false;
    this.selectedCoincidence.emit(coincidence);
  }
}
