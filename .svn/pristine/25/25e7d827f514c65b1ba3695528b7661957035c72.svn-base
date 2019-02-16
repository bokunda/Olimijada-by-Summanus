import {Injectable, EventEmitter} from '@angular/core';
import {Bot} from '../modeli/Bot';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { ModelZaPrijavuNaTurnir } from '../modeli/ModelZaPrijavuNaTurnir';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';


@Injectable()
export class BotService {

    constructor(
		private http: HttpClient,
		//private router: Router,
		private authService: AuthService
	) { }


	premasenaVelicina = new EventEmitter<any>();

    // bot: Bot,
    DodajBota(bot: Bot, fajlZaUpload: File): Observable<any>
    {
        let url = environment.serverUrl + 'dodajBota';

        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        let headers = new HttpHeaders().set('authorization', bearerHeader);

		headers.set('Content-Type','multipart/form-data');
		let formData = new FormData();
		//console.log((fajlZaUpload);
        formData.append('file', fajlZaUpload, fajlZaUpload.name);
        formData.append('username', localStorage.getItem('username'));
        formData.append('idIgre', bot.idIgre.toString());
        formData.append('naziv', bot.nazivFajla);

        //headers.append('authorization', bearerHeader);
        //headers.append('authorization', bearerHeader);
        /*
        let zahtev =
        {
            username: localStorage.getItem('username'),
            bot: bot,
            fajl: fajl
        };
        */

		////console.log((zahtev.fajl);
		//console.log((formData.getAll('file'));

		//console.log(url);
		//console.log(formData);

		return this.http.post(url, formData, {headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}



    // vraca objekat:
    // id,naziv (igre),nazivFajla,idKorisnika
    UzmiBotoveKorisnika(): Observable<any>
    {
        let url = environment.serverUrl + localStorage.getItem('username') + '/botovi';

        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        let headers = new HttpHeaders().set('authorization', bearerHeader);

		return this.http.get(url, {headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));
	}

	IzmeniBota(idBota: number, fajl: File): Observable<any>
	{
		let url = environment.serverUrl + 'izmeniBota';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let formData = new FormData();
		formData.append('file',fajl,fajl.name);
		formData.append('idBota',idBota.toString());

		return this.http.post(url,formData,{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	ObrisiBota(idBota: number, nazivFajla: string): Observable<any>
	{
		let url = environment.serverUrl + 'obrisiBota';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		return this.http.post(url, { idBota: idBota, nazivBota: nazivFajla, username:localStorage.getItem('username') },{ headers: headers })
		.pipe(catchError(this.authService.ObradiGresku));
	}

	TestirajBota(idBota: number):Observable<any>
	{
		let url = environment.serverUrl + 'testirajBota';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		return this.http.post(url, {idBota: idBota},{headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));
	}

	//OVO JE PAJOVIC PISAO METODE JER GA MRZELO DA PRAVI NOVI SERVIS
	// -.- Imao si TurnirService. - Jelena

	DajSvePrijaveZaTurnir(id: number): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'dajSvePrijaveZaTurnir';

		return this.http.post<any>(url,{id: id},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	//ProveriDaLiJeKorisnikPrijavljeNaTurnir()

	PrijavuKorisnikaZaTurnir(prijava: ModelZaPrijavuNaTurnir): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'prijaviKorisnikaNaTurnir';

		return this.http.post(url,prijava,{headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));

	}

	UzmiBotoveKorisnikaZaIgru(idIgre: number): Observable<any>
    {
        let url = environment.serverUrl + localStorage.getItem('username') + '/botovi';

        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        let headers = new HttpHeaders().set('authorization', bearerHeader);

		//console.log((idIgre);

		return this.http.post(url, {idIgre: idIgre}, {headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	UzmiTimoveKorisnikaZaIgru(idIgre: number): Observable<any>
    {
        let url = environment.serverUrl + localStorage.getItem('username') + '/timovi';

        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        let headers = new HttpHeaders().set('authorization', bearerHeader);

		//console.log((idIgre);

		return this.http.post(url, {idIgre: idIgre}, {headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	OtkaziPrijavu(model: ModelZaPrijavuNaTurnir): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		//console.log((model);

		let url = environment.serverUrl + 'otkaziPrijavuZaTurnir';

		return this.http.post(url, model, {headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));
	}


}
