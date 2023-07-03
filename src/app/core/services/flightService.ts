import { IJourney } from 'src/app/shared/interfaces/journey.interface';
import { IRoute } from 'src/app/shared/interfaces/route.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  public base_url: string = environment.base_url;

  constructor(private http: HttpClient) {}

  public getFlightsRoutes(): Observable<IRoute[]> {
    return this.http.get<IRoute[]>(
      `${this.base_url}/v1/flights`
    );
  }

  public getJourney(body: IRoute): Observable<IJourney> {
    return this.http.post<IJourney>(
      `${this.base_url}/v1/flights/journey`,
      body
    );
  }
}
