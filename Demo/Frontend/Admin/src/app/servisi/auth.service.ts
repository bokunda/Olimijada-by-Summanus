import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable()
export class AuthService {

	private prijavljen: boolean;

	constructor(private router: Router) { }

	Prijavi(odgovor: any):void
	{
		this.prijavljen = true;
		localStorage.setItem("token",odgovor.token);
		localStorage.setItem("username",odgovor.username);
		//console.log('Auth: prijavljen '+this.prijavljen);
	}

	Odjavi():void
	{
		this.prijavljen = false;
		localStorage.clear();
		this.router.navigate(['/prijava']);
	}

	DaLiJePrijavljen():boolean
	{
		/*
		//console.log('prijavljen: '+ this.prijavljen);
		return this.prijavljen;
		*/

		if (localStorage.getItem("token") != undefined)
		{
			this.prijavljen = true;
			return true;
		}
		else
		{
			this.prijavljen = false;
			return false;
		}
	}

	ObradiGresku(greska: HttpErrorResponse)
	{
		//console.log(this);
		// ako je klijentska greska
		if (greska.error instanceof ErrorEvent) {
			console.error('Desila se greska: ', greska.error.message);
		}
		// ako je serverska
		else
		{
			if (greska.status == 403)
			{
				////console.log(greska.status);
				//this.router.navigate(['/prijava']);
				// mora da se vrati nesto korisniku da naglasi da je  nastala greska, pa da se u komponnti pozove Odjavi
				//this.authService.Odjavi(403);
			}
		}
		  // return an observable with a user-facing error message
		return new EmptyObservable();
	}

}
