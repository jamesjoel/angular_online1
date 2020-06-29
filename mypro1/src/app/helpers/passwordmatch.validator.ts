import { FormGroup } from '@angular/forms';
export function Match(x, y){

    return function(myform : FormGroup){
        let a = myform.controls[x];
        let b = myform.controls[y];
        if(b.errors && !b.errors.myError)
        {
            return;
        }

        if(a.value != b.value){
            b.setErrors({ myError : true});
        }else{
            b.setErrors(null);
        }
    }
}

export function contactCheck(x){
    return function(myForm: FormGroup){
        let a = myForm.controls[x];
        if(a.errors && !a.errors.conError){
            return;
        }

        if(a.value.length >=5 ){
            a.setErrors({ conError : true });
        }
        else{
            a.setErrors(null);
        }
    }
}
