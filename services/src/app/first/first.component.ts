import { Component } from '@angular/core';
import { FactorialService } from '../factorial.service';
@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  result:any;
  number=0;
  fact=1;

  constructor(private f : FactorialService){}

  changeValue(event:any){
      this.number=event.target.value;
  }

  Calculate(){
      this.result = this.f.calculateFact(this.number)
      this.number=0;
      this.fact=1
 
  }

}
