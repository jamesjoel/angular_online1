import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newage'
})
export class AgePipe implements PipeTransform {

  transform(a) {
    if(a<25){
      return "minnor";
    }
    else{
      return "meture";
    }
  }

}
