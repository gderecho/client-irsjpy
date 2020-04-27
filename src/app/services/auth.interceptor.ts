import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  readonly url = environment.portalurl;
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.debug("Intercepting request");
    // only intercept for /portal
    if(request.url.indexOf(this.url) === -1) {
      return next.handle(request);
    }
    if(!this.auth.authenticated()) {
      throw new Error("Attempt to request /portal without authentication");
    }
    const token = this.auth.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token['accessToken']} ${token['idToken']}`
      }
    })
    return next.handle(request);
  }
}
