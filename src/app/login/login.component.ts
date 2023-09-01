import { Component } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
loginForm!:FormGroup
isNewUser:boolean=false;
constructor( private fb:FormBuilder ,private http:HttpService ,private router:Router){

}
ngOnInit() {
  this.creatForm()

}
creatForm(){
  this.loginForm=this.fb.group({
  'email':[[],''],
  'password':[[],'']
  })
  }
login(){
  console.log("login start")
  const endPoint='user?email='+this.loginForm.value.email+'&&password='+this.loginForm.value.password;

  console.log("endpont",endPoint)
  this.http.getDataToServer(endPoint).subscribe((el:any)=>{
    console.log('login suceccesfully')
    console.log("el",el)

    if (el && el.length > 0) {
      console.log("el1",el)
    this.isNewUser=false
    this.router.navigate(['/home']);
  } else {
    this.isNewUser = true;
  }
})
}

}
