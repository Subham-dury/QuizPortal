import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../modules/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard
 implements CanActivate {

  constructor(private loginservice: LoginService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      if(this.loginservice.getUserRole()=='admin' && this.loginservice.hasToken()){
        return true;
      }
      else{
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
