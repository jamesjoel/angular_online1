import { FormGroup } from '@angular/forms';
export function Match(pass, repass){

    return function(myForm : FormGroup){
        let x = myForm.controls[pass];
        let y = myForm.controls[repass];
        if(y.errors && !y.errors.myError){
            return;
        }
        if(x.value != y.value)
        {
            y.setErrors({ myError : true});
        }else{
            y.setErrors(null);
        }

    }

}