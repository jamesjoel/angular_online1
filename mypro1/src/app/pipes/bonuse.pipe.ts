import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bonuse'
})
export class BonusePipe implements PipeTransform {

  transform(salary, age, gender){
    let bonuse;
    if(age<=25){
      let x = salary*10/100;
      bonuse= x+salary;
    }
    else{
      let x = salary * 20 / 100;
      bonuse = x + salary;
    }
    if(gender=="female"){
      bonuse += bonuse*5/100;
      
    }
    return bonuse;
  
  }

}
