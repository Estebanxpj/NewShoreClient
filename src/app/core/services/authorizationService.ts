import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  authenticateUser(){
    localStorage.setItem('Token','exampleToken');
  }

  validateToken() : Observable<boolean> {
    const token = localStorage.getItem('Token') || '';

    if(!token)
    {
      return of(false);
    }

    return of(true);
  }
}
