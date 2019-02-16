import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
//import { throwError } from 'rxjs/';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Korisnik } from '../modeli/Korisnik';
import { PitanjeOdgovor } from '../modeli/PitanjeOdgovor';
import { StringifyOptions } from 'querystring';
import 'rxjs/add/operator/take';

@Injectable()
export class KorisnikService {

	constructor(
		private http: HttpClient,
		private authService: AuthService
	)
	{ }

	public promenaSlike = new EventEmitter<string>();

	temaPromenjena = new EventEmitter<boolean>();

	// request = admin(integer,0),korisnik(Korisnik)
	// response = status(integer),token?(string),korisnik?(Korisnik)
	RegistrujKorisnika(korisnik: Korisnik): Observable<any>
	{
		let url = environment.serverUrl + 'registracija';

		let zahtev =
		{
			korisnik: korisnik
		}

		return this.http.post(url, zahtev);
	}

	// request = admin(integer,0),korisnik(Korisnik)
	// response = status(integer),token?(string),korisnik?(Korisnik)
	PrijaviKorisnika(korisnik: Korisnik): Observable<any>
	{
		let url = environment.serverUrl + 'prijava';

		let zahtev =
		{
			korisnik: korisnik
		}

		return this.http.post(url, zahtev);
	}

	UzmiSveKorisnike(): Observable<any>
    {
        let  url = environment.serverUrl + 'dajSveKorisnike';

        //const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        //let headers = new HttpHeaders().set('authorization', bearerHeader);

        //return this.http.get(url, {headers: headers});
        return this.http.post(url, {token: localStorage.getItem('token')});
	}

	UzmiSveMatches2(username: string): Observable<any>
	{
		let  url = environment.serverUrl + 'dajSveMatches2';
		return this.http.post(url,{username: username});
	}

	/* Menja podatke na profilu korisnika */
    IzmeniKorisnika(korisnik): Observable<any>
    {
		let url = environment.serverUrl + 'uzmi-podatke';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        let headers = new HttpHeaders().set('authorization', bearerHeader);

		return this.http.post(url, korisnik,{headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));
	}

		//, username: string  - drugi param po potrebi
	AktivirajNalog(kod: string, username: string): Observable<any>
	{
		let url = environment.serverUrl + 'aktivirajNalog';

		return this.http.post(url, { hash: kod, username: username });
	}

	UzmiPodatkeOKorisniku(username: string): Observable<any>
	{
	    if(username == localStorage.getItem('username'))
        {
            let url = environment.serverUrl + 'korisnik';

            const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

            let headers = new HttpHeaders().set('authorization', bearerHeader);

            return this.http.post(url,{username: username}, {headers: headers})
                .pipe(catchError(this.authService.ObradiGresku));
        }

        let url = environment.serverUrl + 'korisnik/' + username;

	    return this.http.get(url);
	}

	AzurirajSlikuKorisnika(slika: File): Observable<any>
    {

        let url = environment.serverUrl + 'uploadAvatara';
        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        let headers = new HttpHeaders().set('authorization',bearerHeader);
        let formData = new FormData();
        formData.append('slika',slika, slika.name);
        formData.append('username',localStorage.getItem('username'));

		return this.http.post(url, formData, { headers: headers })
		.pipe(catchError(this.authService.ObradiGresku));
	}

    DajFormu(usernameKorisnika: string): Observable<any>
    {
        let url = environment.serverUrl + 'dajFormu';
        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        let headers = new HttpHeaders().set('authorization', bearerHeader);
        let formData = new FormData();
        formData.append('usernameKorisnika', "" + usernameKorisnika);

        return this.http.post(url, formData, {headers: headers})
            .pipe(catchError(this.authService.ObradiGresku))
            .take(1);
    }

	// daje sva pitanja i odgovore za FAQ
	DajSvaPitanjaIOdgovore(): Observable<PitanjeOdgovor[]>
	{
		let url = environment.serverUrl + 'svaPitanjaIOdgovoriKorisnik';

		return this.http.get<PitanjeOdgovor[]>(url);
	}

	ObrisiNalog(username: string): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'obrisiNalog';

		return this.http.post(url,{username: username},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	ZaboraviliSteLozinku(username: string): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'zaboraviliSteLozinku';

		return this.http.post(url,{username: username},{headers: headers});
	}

	PosaljiMailZaReset(korisnik: string, kod: string): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'posaljiMailZaReset';

		return this.http.post(url,{korisnik: korisnik, kod: kod},{headers: headers});
	}

	UzmiNazivSlikeKorisnika(): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'nazivSlikeKorisnika';

		return this.http.post(url,{},{headers: headers});
	}

	DajUsername(): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'dajUsername';

		return this.http.post(url,{},{headers: headers});
	}

}
