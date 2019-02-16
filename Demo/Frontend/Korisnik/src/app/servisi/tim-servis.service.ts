import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import {Bot} from '../modeli/Bot';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class TimServisService {

	constructor
	(
		private http: HttpClient,
		private authService: AuthService
	) { }

	timDodat = new EventEmitter<any>();
	timObrisan = new EventEmitter<any>();

    DodajTim(idKorisnika: number, nazivTima: string, nazivSlikeTima: string, idIgre: number, opisTima: string, brojIgraca: number): Observable<any>
    {
        let url = environment.serverUrl + 'dodajTim';

        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        let headers = new HttpHeaders().set('authorization', bearerHeader);

        headers.set('Content-Type','multipart/form-data');

        let formData = new FormData();

        formData.append('nazivTima', '' + localStorage.getItem('username') + '_' + nazivTima);
        formData.append('idKorisnika', "" + idKorisnika);
        formData.append('nazivSlikeTima', nazivSlikeTima);
        formData.append('idIgre', "" + idIgre);
        formData.append('opisTima', opisTima);
        formData.append('brojIgraca', "" + brojIgraca);

        return this.http.post(url, formData, {headers: headers})
            .pipe(catchError(this.authService.ObradiGresku));
    }

    DajSveTimoveZaKorisnika(idKorisnika: number): Observable<any>
    {
        let url = environment.serverUrl + 'dajSveTimoveKorisnika';

        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        let headers = new HttpHeaders().set('authorization', bearerHeader);

        headers.set('Content-Type', 'multipart/form-data');

        let formData = new FormData();

        formData.append('idKorisnika', "" + idKorisnika);

        return this.http.post(url, formData, {headers: headers})
            .pipe(catchError(this.authService.ObradiGresku));
	}
	
	TestirajTim(idTima: number): Observable<any>
	{
		let url = environment.serverUrl + 'testirajTim';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		return this.http.post(url, {idTima: idTima},{headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));
	}

	ObrisiTim(idTima: number):Observable<any>
	{
		let url = environment.serverUrl + 'obrisiTim';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		return this.http.post(url, {idTima: idTima},{headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));
	}
}
