import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpService,private activatedRoute:ActivatedRoute,private route:Router){
    
  }

  ngOnInit(){ 
    this.createForm();
  }
  createForm() {
     this.productForm = this.fb.group({
      'name':[''],
      'price':[''],
      'category':[''],
      'stock':['']
     })
  }

  save() {
    console.log(this.productForm.value);
    this.http.postDataToServer('products', this.productForm.value).subscribe(
      (response: any) => {
        console.log('response', response);
        this.route.navigate(['/product1'])
      },
      (error) => {
        console.log(error);
      })
  }
}


