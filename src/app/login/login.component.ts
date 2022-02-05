import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';
import {DataService} from '../services/data.service';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router, private dataService: DataService) {
    this.dataService.errmsg$.subscribe((err:any)=> this.errorMsg= err.customMessage);
   }
  modal:any = {};
  tabIndex:number = 0;
  interval : any;
  otpTimer: any;
  otpNumber: any = '';
  isDisabled: boolean = true;
  errorMsg:string = '';
  results:any;
  @ViewChild('ngOtpInput') ngOtpInputRef:any;
  
  ngOnInit(): void {
  }
 
  sendOtp(){
      this.auth.sendOtp(this.modal).subscribe((results:any)=> {
        this.errorMsg = '';
        this.tabIndex = 1;
        this.startCountdown(10);
      });
  }
  back(){
    this.tabIndex = 0;
    this.otpNumber='';
    this.errorMsg = '';
    clearInterval(this.interval);
  }
  startCountdown(seconds:any) {
    let counter = seconds;
      
    this.interval = setInterval(() => {
      this.otpTimer = "00:0"+counter
      counter--;
        
      if (counter < 0 ) {
        clearInterval(this.interval);
       this.otpTimer = 0
      }
    }, 1000);
  }
  onOtpChange(e:any) {
    this.otpNumber = e
    if(e.length == 4){
      this.isDisabled = false
    }else{
      this.isDisabled = true
    }
  }
  otplogin(){
    this.errorMsg = '';
    console.log(1223)
    console.log(this.otpNumber)
    let loginModel = {
      email: this.modal.email,
      browser: navigator.userAgent,
      ipaddress: '',
      OTP: this.otpNumber  
    }
    this.auth.getUserIp().toPromise().then(data=>{
      loginModel.ipaddress = data.ip;
      console.log(loginModel);
      this.auth.login(loginModel).subscribe((data:any)=>{
        this.results = data
        this.dataService.triggerLogin(true);
        window.localStorage.setItem('auth_token',this.results.data.authToken);
        this.router.navigate(['/establishment-info']);
      });
    }).catch((error:any)=>{});
  }

}
