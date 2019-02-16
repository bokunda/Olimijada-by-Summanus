import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TurnirZaPrikaz } from '../modeli/TurnirZaPrikaz';
import { Observable } from 'rxjs/Observable';
import { Mec } from '../modeli/Mec';
import { MecZaPrikaz } from '../modeli/MecZaPrikaz';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TurnirService {

	constructor(
		private http: HttpClient,
		private authService: AuthService ) { }


	DajSveTurnire(): Observable<TurnirZaPrikaz[]>
	{
		let url = environment.serverUrl + 'sviTurniri';

		return this.http.get<TurnirZaPrikaz[]>(url);
	}

	DajSveTurnireSaKorisnikom(): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let url = environment.serverUrl + 'dajSveTurnireSaKorisnikom';

		return this.http.post<any[]>(url,{},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	DajSveMeceveNaTurniru(idTurnira: number): Observable<Mec[]>
	{
		let url = environment.serverUrl + 'turniri/' + idTurnira +'/mecevi';

		return this.http.get<Mec[]>(url);
	}

	DajSveMeceveKorisnika():Observable<MecZaPrikaz[]>
	{
		const username = localStorage.getItem('username');
		let url = environment.serverUrl + username + '/mecevi';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		// vidi sto ovde nece da dozvoli catchError
		return this.http.get<MecZaPrikaz[]>(url, { headers: headers });
			//.pipe(catchError(this.authService.ObradiGresku));
	}

	/*
	DajKoordinate(sirinaIgre: number, visinaIgre: number, sirinaSlike: number, visinaSlike: number): Observable<any>
	{
		let url = 'http://localhost:8008/prenos';

		////console.log((("servis: sirina,visina "+sirinaIgre + " " + visinaIgre);
		let body = {
			sirinaIgre: sirinaIgre,
			visinaIgre: visinaIgre,
			sirinaSlike: sirinaSlike,
			visinaSlike: visinaSlike
		}
		return this.http.post(url,body);
	}
	*/

	DajKoordinate(brojIgraca: number): Observable<any>
	{
		let url = environment.serverUrl + '/dajKoordinate';


		return this.http.post(url,{brojIgraca: brojIgraca});
	}

	UzmiPodatkeZaPrenosMeca(idMeca: number): Observable<any>
	{
		let url = environment.serverUrl + 'prenos';


		if (localStorage.getItem('token') != undefined && localStorage.getItem('token') != null)
		{
			const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
			let headers = new HttpHeaders().set('authorization', bearerHeader);
			return this.http.post(url, {id: idMeca},{headers: headers});
		}
		else
		{
			return this.http.post(url, {id: idMeca});
		}


	}

	UzmiSveAktuelneTurnire(): Observable<any[]>
	{
		let url = environment.serverUrl + 'turniriZaTV';

		return this.http.get<any[]>(url);
	}

	UzmiPodatkeOMecu(idMeca: number): Observable<Mec>
	{
		let url = environment.serverUrl + 'mecevi/' + idMeca;


		return this.http.get<Mec>(url);

	}

	UzmiSveAktuelneIZakazaneMeceve(): Observable<any[]>
	{
		let url = environment.serverUrl+'aktuelniIZakazaniMecevi';

		return this.http.post<any[]>(url,{});
	}

	UzmiSveProsleMeceve(): Observable<any[]>
	{
		let url = environment.serverUrl + 'zavrseniMecevi';

		return this.http.get<any[]>(url);
	}


}
