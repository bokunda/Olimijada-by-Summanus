import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms'; 

export function PasswordValidator(password: RegExp | string): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		var jednako = false;
		console.log(password);
		console.log(control.value);
		if (password instanceof RegExp)
		{
			jednako = password.test(control.value);
		}
		else
		{
			jednako = (password == control.value);
		}
		
		return jednako ? null : { 'Password' : 'ne poklapaju se' } ;
	}
}
   
@Directive({
	selector: '[passwordValidator]',
	providers: []
})
export class PasswordValidatorDirective {

}