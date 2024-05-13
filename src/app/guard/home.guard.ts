import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
  //Para guard creo el constructor
  constructor(public navCtrl:NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //Reemplazo el return true; por la condición
    if(localStorage.getItem('ingresado') == 'true'){
      return true;
    }
    else{
      this.navCtrl.navigateRoot('login');
      return false;
    }
  }  
}