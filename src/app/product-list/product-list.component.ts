import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList:any=[];

  constructor(private http:HttpService){

  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    console.log('get product')
     this.http.getDataToServer('products').subscribe((response:any)=>{
      if(response && response.length > 0){
        console.log('product submit succesfully')
        this.productList = response ;
      }
     })
  }
  deleteProduct(index:number,i:number){
    const endPoint="products/"+ index;
    console.log(endPoint)
    this.http.deleteDataToServer(endPoint).subscribe((el:any)=>{
      this.productList.splice(i,1);
      alert("data deleted sucessfully");
    },
    (error)=>{
      alert(error)
    })

  }

}
