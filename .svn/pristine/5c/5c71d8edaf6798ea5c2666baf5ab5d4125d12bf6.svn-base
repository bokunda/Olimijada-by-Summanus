import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class StatistikaService {

	constructor
	(
		private http: HttpClient,
		private authService: AuthService
	) { }

	UkupanBrojKorisnika(): Observable<any>
	{
		let url = environment.serverUrl + 'ukupanBrojKorisnika';
		////console.log((("poziiva se na servisu");

		return this.http.post(url,{});
	}

	UkupanBrojBotova(): Observable<any>
	{
		let url = environment.serverUrl + 'ukupanBrojBotova';

		////console.log((("poziiva se na servisu");

		return this.http.post(url,{});
	}

	UkupanBrojIgara(): Observable<any>
	{
		let url = environment.serverUrl + 'ukupanBrojIgara';
		return this.http.post(url,{});
	}

	UkupanBrojBotovaZaKorisnika(): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'ukupanBrojBotovaZaKorisnika';

		return this.http.post(url,{},{headers: headers});

	}

	UkupanBrojPobedaZaKorisnkaPoMesecima(): Observable<any[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'ukupanBrojPobedaZaKorisnkaPoMesecima';

		return this.http.post<any[]>(url,{},{headers: headers});
	}

	UkupanBrojPorazaZaKorisnkaPoMesecima(): Observable<any[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'ukupanBrojPorazaZaKorisnkaPoMesecima';

		return this.http.post<any[]>(url,{},{headers: headers});
	}

	BrojOsvojenihTurniraZaKorisnika(): Observable<any[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'brojOsvojenihTurniraZaKorisnika';

		return this.http.post<any[]>(url,{},{headers: headers});
	}



}
