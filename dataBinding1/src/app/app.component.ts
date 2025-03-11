import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  name:string = 'dataBinding1';
  title='RTC';
  fun(){
    console.log('hello world')
    this.title = 'hello';
  }
}
