import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from 'src/app/common/user';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  
  isActive:boolean;
  constructor() { }

  AuthenticateUser(user:UserModel): Observable<boolean> {
    if(user.userName === "RANJITH" && user.password === "Ran@123"){
      this.isActive = true;
      localStorage.setItem('isActive', 'true');
      return of(true);
    } else {
      this.isActive=false;
      localStorage.setItem('isActive', 'true');
      return of(false);
    }
  }
}
