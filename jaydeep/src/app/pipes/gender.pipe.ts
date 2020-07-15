import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Mgender'
})
export class GenderPipe implements PipeTransform {

  transform( name, gender){
    
    if(gender =='male'){
      return "Mr. "+name;
    }
    if(gender =='female'){
      return "Mrs. "+name;
    }
  }

}
