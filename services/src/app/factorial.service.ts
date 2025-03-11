import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactorialService {
  fact=1;
  res=1;
  constructor() { }

  calculateFact(num:any){
      for(let i=1; i<=num; i++){
        this.fact = this.fact*i;
      }
      this.res=this.fact;
      this.fact=1;
      return this.res;
  }
}