import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  singUpForm!: FormGroup
  constructor(private fb: FormBuilder, private http: HttpService) {

  }
  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.singUpForm = this.fb.group({
      'FullName': [ ''],
      'email': [ ''],
      'password': [ ''],
      'mobile': [ '']
    })
  }
  signup() {
    console.log(this.singUpForm.value);
    this.http.postDataToServer('user', this.singUpForm.value).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {

      }
    )
  }

}
