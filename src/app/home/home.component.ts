import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counter:number=0
constructor(private shared:SharedService){}

addToCart(){
  console.log("counter value",this.counter)
  this.counter++
  this.shared.sendData(this.counter)
}

}
