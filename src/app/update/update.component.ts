import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productForm!: FormGroup
  productId: string | null = null;

  isEdit: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpService, private activatedRoute: ActivatedRoute, private route: Router) {
   }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')
    this.createForm()
    this.getProducts();

  }
  createForm() {
    this.productForm = this.fb.group({

      'name': [''],
      'category': [''],
      'price': [''],
      'stock': [''],
      'id': [' ']
    })
  }
  save() {
    const endPoint = "products/" + this.productId
    this.http.putDataToServer(endPoint, this.productForm.value).subscribe((Response: any) => { })
    this.route.navigate(['/product1/product-list'])
  }
  getProducts() {
    const endPoint = "products/" + this.productId
    this.http.getDataToServer(endPoint).subscribe((response: any) => {
        this.productForm.setValue(response)
      
    })

  }

}