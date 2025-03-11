import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
 imgUrl: string='';
 imgUrl1='';
 name: string ='';
 name1 ='';
 name2: string='';
 name3 ='';
 handlesubmit(){
  this.imgUrl=this.imgUrl1;
  this.name1= this.name;
 }
}
