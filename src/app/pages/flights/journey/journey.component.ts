import { Component } from '@angular/core';
import { IJourney } from 'src/app/shared/interfaces/journey.interface';
import { FlightService } from 'src/app/core/services/flightService';
import { IRoute } from 'src/app/shared/interfaces/route.interface';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css'],
})
export class JourneyComponent {
  public listOrigin: Array<string> = [];
  public listDestination: Array<string> = [];
  public currencySelected = "USD";
  public journey!: IJourney;

  constructor(private readonly flightService: FlightService) {}

  ngOnInit(): void {
    this.searchFlightsRoutes();
  }

  searchFlightsRoutes() {
    this.flightService.getFlightsRoutes().subscribe((flights) => {
      this.addFlightsRoutes(flights);
    });
  }

  private addFlightsRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      const isExistOrigin = this.listOrigin.some(
        (item) => item === route.origin.toUpperCase()
      );
      const isExistDestination = this.listDestination.some(
        (item) => item === route.destination.toUpperCase()
      );

      if (!isExistOrigin) {
        this.listOrigin.push(route.origin.toUpperCase());
      }
      if (!isExistDestination) {
        this.listDestination.push(route.destination.toUpperCase());
      }
    });
  }

  search(dataToSearch: IRoute) {
    if (dataToSearch) {
      this.flightService.getJourney(dataToSearch).subscribe((resp) => {
        this.journey = resp;
      });
    }
  }
}
