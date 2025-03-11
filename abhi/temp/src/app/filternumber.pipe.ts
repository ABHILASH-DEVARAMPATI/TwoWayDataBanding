import { Pipe, PipeTransform } from '@angular/core';
r
@Pipe({
  name: 'filternumbe'
})
export class FilternumberPipe implements PipeTransform {
 
  transform(value:  any[]) {
    let arr : any[]
    for(let i=0;i<value.length;i++){
      if(typeof(value[i])!='number'){
        value.splice(i,1)
        i--;
      }
    }
    
  }
  
    
  }

}
