import { AuthorizationService } from "../services/authorizationService";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthorizeTokenGuard implements CanActivate, CanLoad 
  {
    constructor(private authService: AuthorizationService,
                private router: Router){}
  
    canActivate(): Observable<boolean> | boolean 
    {
      return this.authService.validateToken()
              .pipe(
                tap((valid: any) =>
                  {
                    if(!valid)
                    {
                      this.router.navigateByUrl('/home');
                    }
                  })
              );
    }
  
    canLoad(): Observable<boolean> | boolean 
    {
      return this.authService.validateToken()
              .pipe(
                tap((valid: any) =>
                  {
                    if(!valid)
                    {
                      this.router.navigateByUrl('/home');
                    }
                  })
              );
    }
  }
  