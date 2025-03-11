import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  text:string="subscribe"
changeSubscription(){
 if(this.text=="subscribe"){
 this.text="subscribe"
}
else{
  this.text="subscribe"
}
}
}