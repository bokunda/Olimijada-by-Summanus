import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
	private prijavljen: boolean;

	  constructor(
		private router: Router,
		private http: HttpClient) { }

	Prijavi(odgovor: any):void
	{
		this.prijavljen = true;
		localStorage.setItem("token",odgovor.token);
		//console.log((odgovor.username);
		localStorage.setItem("username",odgovor.username);
	}

	Odjavi(code: number = null):void
	{
		this.prijavljen = false;
		localStorage.clear();

		if (code == null)
		{
			this.router.navigate(['/pocetna']);
		}
		else
		{
			this.router.navigate(['/prijava']);
			//window.location.reload();
		}


	}

	DaLiJePrijavljen():boolean
	{
		if (localStorage.getItem("token") != undefined)
		{
			this.prijavljen = true;
			return true;
			/*
			let url = environment.serverUrl + 'autorizacija';
	
			const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
			let headers = new HttpHeaders().set('authorization', bearerHeader);

			this.http.post(url,{},{headers: headers}).subscribe(odg =>
			{
				if (odg == 1)
				{
					this.prijavljen = true;
					return true;
				}
				else
				{
					this.Odjavi();
				}
			});

			*/
		}
		else
		{
			this.prijavljen = false;
			return false;
		}
		//return this.prijavljen;
	}

	ObradiGresku(greska: HttpErrorResponse)
	{
		//console.log((this);
		// ako je klijentska greska
		if (greska.error instanceof ErrorEvent) {
			console.error('Desila se greska: ', greska.error.message);
		}
		// ako je serverska
		else
		{
			if (greska.status == 403)
			{
				////console.log((greska.status);
				//this.router.navigate(['/prijava']);
				// mora da se vrati nesto korisniku da naglasi da je  nastala greska, pa da se u komponnti pozove Odjavi
				//this.authService.Odjavi(403);
			}
		}
		  // return an observable with a user-facing error message
		return new EmptyObservable();
	}
}
