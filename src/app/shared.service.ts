import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
subject$=new Subject()
  constructor() { }

  counter: number = 0
  addToCart() {
    console.log("Counter Value" + this.counter)

     this.counter++
    //  console.log("Counter Value"+this.counter)
  }
  sendData(count:number){
   this.subject$.next(count)
  }
}
