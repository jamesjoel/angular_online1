import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xyz'
})
export class GenderPipe implements PipeTransform {

  transform(a, b){
    if(b=="male"){
      return "Mr. "+a;
    }
    if(b=="female"){
      return "Ms. "+a;
    }
  }

}

/*
1. Pipe --------- transform()
2. Guard ------- canActivate()
3. Interceptor ----- intercept()




*/
