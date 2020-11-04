import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginApiService } from '../login/login-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private loginService: LoginApiService, private router: Router) {}
  canActivate(): boolean {            
    if(localStorage.getItem('isActive')==="true") {
      return true;
    }

    this.router.navigate(['/login']);
  }
}
