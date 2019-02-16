
import { Injectable, EventEmitter } from '@angular/core';
import { Igra } from '../modeli/Igra';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
//import { userInfo } from 'os';


@Injectable()
export class PravilaService
{
	constructor (private http: HttpClient,
	private authService: AuthService) { }

	public dodataIgra = new EventEmitter<Igra>();
	// primamo objekat tipa Igra sa nazivom igre i nazivom fajla
	// kao i fajl koji smo učitali
	DodajIgru(igra: Igra, slikaIgre: File, slikaPozadine: File, slikaPozadineTimova: File): Observable<any>
	{

		let url = environment.serverUrl + 'dodajIgru';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let formData = new FormData();
		formData.append('naziv', igra.naziv);
		formData.append('nazivSlike', igra.nazivSlike);
		formData.append('pravila', igra.pravila);
		formData.append('pozadina', igra.pozadina);
		formData.append('pozadinaTimovi', igra.pozadinaTimovi);
		formData.append('timska', "" + igra.timska);
		formData.append('timskaUloge', igra.timskaUloge);

		if (slikaIgre != null)
		{
			formData.append('slikaIgre', slikaIgre, slikaIgre.name);
		}

		if (slikaPozadine != null)
		{
			formData.append('slikaPozadine', slikaPozadine, slikaPozadine.name);
		}

		if (slikaPozadineTimova != null)
		{
			formData.append('slikaPozadineTimova', slikaPozadineTimova, slikaPozadineTimova.name);
		}




		return this.http.post(url,formData,{headers: headers});

		/* // url servera
		let url = environment.serverUrl + 'dodajIgru';

		// moramo biti ulogovani
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization',bearerHeader);

		// pravimo formu
		let formData = new FormData();

		formData.append('file', fajlZaUpload, fajlZaUpload.name); // učitan fajl
		formData.append('fileName', fajlZaUpload.name); // saljemo posebno ime fajla
		formData.append('username',localStorage.getItem('username')); // ko je ulogovan
		formData.append('naziv', igra.naziv); // naziv igre
		formData.append('tekstEditor', tekstEditor);

		formData.append('timska', "" + igra.timska);
		formData.append('timskaUloge', igra.timskaUloge);

		return this.http.post(url, formData, { headers: headers })
			.pipe(catchError(this.authService.ObradiGresku)); */
	}

	ProveriNazivIgre(naziv: string): Observable<any>
	{
		// //console.log("pravila serv->provera->"+naziv);
		let url = environment.serverUrl + 'proveriNazivIgre';

		// moramo biti ulogovani
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let formData = new FormData();
		formData.append('nazivIgre', naziv);
		formData.append('username', localStorage.getItem('username'));

		return this.http.post(url, formData, { headers: headers })
			.pipe(catchError(this.authService.ObradiGresku));
	}


	IzmeniIgru(igra: any, slikaIgre: File, pozadina: File,pozadinaTimovi: File): Observable<any>
	{

		let url = environment.serverUrl + 'izmeniIgru';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		//console.log(igra);

		let formData = new FormData();
		formData.append('id', igra.id);
		formData.append('naziv', igra.naziv);
		formData.append('pravila', igra.pravila);

		if (slikaIgre != null)
		{
			let ekstenzija = slikaIgre.name.substring(slikaIgre.name.lastIndexOf('.'),slikaIgre.name.length);
			formData.append('nazivSlike', igra.naziv+ekstenzija);
			formData.append('slikaIgre',slikaIgre,slikaIgre.name);
		}
		else
		{
			if (igra.nazivSlike != null)
			{
				let ekstenzija = igra.nazivSlike.substring(igra.nazivSlike.lastIndexOf('.'),igra.nazivSlike.length);
				//console.log("ekstenzija naziv slike - "+ekstenzija);
				//console.log(igra.naziv+ekstenzija);
				formData.append('nazivSlike', igra.naziv+ekstenzija);
			}
			else
			{
				formData.append('nazivSlike', null);
			}

		}

		// let stariNaziv = igra.nazivSlike.substring(0,igra.nazivSlike.lastIndexOf('.'));

		if (pozadina != null)
		{
			let ekstenzija =  pozadina.name.substring(pozadina.name.lastIndexOf('.'),pozadina.name.length);
			formData.append('pozadina',igra.naziv+ekstenzija);

			formData.append('slikaPozadine', pozadina,pozadina.name);
		}
		else
		{
			if (igra.pozadina != null)
			{
				let ekstenzija = igra.pozadina.substring(igra.pozadina.lastIndexOf('.'),igra.pozadina.length);
				//console.log("ekstenzija pozadina - "+ekstenzija);
				formData.append('pozadina',igra.naziv+ekstenzija);
			}
			else
			{
				formData.append('pozadina',null);
			}

		}

		if (pozadinaTimovi != null)
		{
			let ekstenzija =  pozadinaTimovi.name.substring(pozadinaTimovi.name.lastIndexOf('.'),pozadinaTimovi.name.length);
			formData.append('pozadinaTimovi',igra.naziv+ekstenzija);

			formData.append('slikaPozadineTimova', pozadinaTimovi,pozadinaTimovi.name);
			//console.log(formData);
		}
		else
		{
			if (igra.pozadinaTimovi != null)
			{
				let ekstenzija = igra.pozadinaTimovi.substring(igra.pozadinaTimovi.lastIndexOf('.'),igra.pozadinaTimovi.length);
				//console.log("ekstenzija timovi - "+ekstenzija);
				formData.append('pozadinaTimovi',igra.naziv+ekstenzija);
			}
			else
			{
				formData.append('pozadinaTimovi',null);
			}
		}

		return this.http.post(url,formData,{headers: headers});



		/*
		//console.log("u izmeniIgre() u pravila service!");

		let url = environment.serverUrl + 'izmeniIgru';

		// moramo biti ulogovani
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let formData = new FormData();
		formData.append('username', localStorage.getItem('username'));
		formData.append('id', igra.id.toString());
		formData.append('naziv', igra.naziv.toString());
		formData.append('nazivSlike', igra.fajlSlika.toString());
		formData.append('pravila', igra.pravila.toString());
		formData.append('pozadina', igra.pozadina.toString());
		if (fajl != null)
			formData.append('file', fajl, fajl.name);

		return this.http.post(url, formData, { headers: headers })
			.pipe(catchError(this.authService.ObradiGresku));



		let url = environment.serverUrl + 'izmeniIgru';

		// moramo biti ulogovani
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);


		*/

	}




	UzmiPodatkeOIgri(id:number):Observable<any>
	{
		let url = environment.serverUrl + 'igra';

		return this.http.post(url,{idIgre: id});
	}
}
