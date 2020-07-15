
import{ FormGroup} from '@angular/forms';

export function Match(pass, repass){

return function( myForm: FormGroup){

    let a = myForm.controls[pass];
    let b = myForm.controls[repass];
    console.log(a.value);
    console.log(b.value);

    if(b.errors && !b.errors.myError){
        return;
    }

    if(a.value != b.value){

        b.setErrors({myError: true})
    } 
    else{
        b.setErrors(null);
    }

}

}


export function ContactNumber(x){

    return function(myForm: FormGroup){
        let a = myForm.controls[x];
        // console.log(a.value);
        if(a.errors && !a.errors.conError){
            return;
        }
        if(a.value.length >= 5){
            a.setErrors({ conError:true});
        }
        else{
            a.setErrors(null);
        }
    }
}










