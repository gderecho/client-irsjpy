import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  canActivate(): boolean {
    if(!this.auth.authenticated()) {
      this.route.navigate(['/portal/login']);
      return false;
    }
    return true;
  }
}
