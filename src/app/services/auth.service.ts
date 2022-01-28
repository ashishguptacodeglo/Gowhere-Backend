import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams,HttpErrorResponse} from '@angular/common/http'
import { Router, CanActivate, CanActivateChild, CanLoad ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url = 'http://54.160.93.94:5001/api/v1/';

  constructor(public http: HttpClient,public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.is_authendicated(state.url);
  }

  sendOtp(mail:any){
    return this.http.post(`${this.base_url}sendEstablishMentOTP`,mail)
  }
  login(details:any){
    return this.http.post(`${this.base_url}sendEstablishMentLogin`,details)
  }
  
  getUserIp(){
    return  this.http.get<{ip:string}>('https://jsonip.com');
  }
  is_authendicated(url:any):boolean {
    let is_loggedin = window.localStorage.getItem('auth_token') ? true : false;   
    if(is_loggedin) {
      if((url=='/login'|| url=='/')) {
        this.router.navigate(['establishment-info']);
      }
    } else {
       if(!(url=='/login'|| url=='/')) {
        this.router.navigate(['/']);
      }
    }
    return true;
  }
}
