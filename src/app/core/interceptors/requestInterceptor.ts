import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle( req )
              .pipe(
                catchError((error) => this.errorHandler(error))
              );
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    let msgError = 'La ruta no se puede calcular';
    if (response instanceof HttpErrorResponse) {
      if (response.status === 0) {
        msgError = 'El servicio no esta disponible en el momento';
      }
      if (response.status === 500) {
        msgError = 'Ocurrio un error, vuelve mas tararde';
      }
    }
    this.showErrorMessage(msgError);
    throw response;
  }

  private showErrorMessage(message: string) {
    swal.fire('Error', message, 'error');
  }
}
