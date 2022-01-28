import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataobj = new Subject<boolean>();
  data$ = this.dataobj.asObservable();
  private checkLogin = new Subject<boolean>();
  checklogin$ = this.checkLogin.asObservable();
  private errMsg = new Subject<any>();
  errmsg$ = this.errMsg.asObservable();
  constructor() { }
  sendData(message: boolean){
    this.dataobj.next(message);
  }
  triggerLogin(trigger:boolean) {
    this.checkLogin.next(trigger);
  }
  getError(error:any){
    this.errMsg.next(error);
  }
}
