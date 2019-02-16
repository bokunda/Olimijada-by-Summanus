import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';
import { Admin } from '../modeli/Admin';
import { Igra } from '../modeli/Igra';
import { TipTurnira } from '../modeli/TipTurnira';
import { Turnir } from '../modeli/Turnir';
import { PitanjeOdgovor } from '../modeli/PitanjeOdgovor';
import { Korisnik } from '../modeli/Korisnik';
import { Mail } from '../modeli/Mail';
import { TurnirZaPrikaz } from '../modeli/TurnirZaPrikaz';
import { MecZaprikaz } from '../modeli/MecZaPrikaz';
import { PrijavaZaPrikaz } from '../modeli/PrijavaZaPrikaz';
import { catchError  } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AdminService {

	constructor(private http: HttpClient,
	private authService: AuthService) { }

	public dodatTurnir = new EventEmitter<any>();
	public dodatAdmin = new EventEmitter<any>();

	RegistrujAdmina(admin: Admin): Observable<any>
	{
		let url = environment.serverUrl + "admin/registracija";

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let zahtev =
		{
			korisnik: admin
		}

		return this.http.post(url,zahtev, {headers: headers});

	}

	PrijaviAdmina(admin: Admin): Observable<any>
	{
		let url = environment.serverUrl + 'admin/prijava';
    //console.log(url);
    //let url = '/prijava';
		let zahtev =
		{
			korisnik: admin
		}

		return this.http.post(url, zahtev);
	}

	ObrisiMe(): Observable<any>
	{
		
		let url = environment.serverUrl + "admin/obrisiNalog";

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		return this.http.post<any>(url, {}, {headers: headers});
	}

	DajSveIgre(): Observable<Igra[]>
	{
		let url = environment.serverUrl + 'sveIgre';

		return this.http.get<Igra[]>(url);
	}

	DajTipoveTurnira(): Observable<TipTurnira[]>
	{
		let url = environment.serverUrl + 'sviTipoviTurnira';

		return this.http.get<TipTurnira[]>(url);
	}

	DajSveTurnire(): Observable<TurnirZaPrikaz[]>
	{
		let url = environment.serverUrl + 'sviTurniri';

		return this.http.get<TurnirZaPrikaz[]>(url);
	}

	DodajTurnir(turnir: Turnir): Observable<any>
	{

        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);


		let url = environment.serverUrl + 'dodajTurnir';
		//console.log(turnir);
		return this.http.post(url,turnir,{headers: headers})
			.pipe(catchError(this.authService.ObradiGresku));
	}

	PosaljiMail(mail: Mail): Observable<any>
	{
		let url = environment.serverUrl + 'posaljiMail';

		//console.log(mail);

		return this.http.post(url,mail);
	}

	OtkaziTurnir(id: number): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let url = environment.serverUrl + 'otkaziTurnir';

		window.location.reload();

		return this.http.post(url,{id:id},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));


	}

	DajTurnirZaId(id: number): Observable<Turnir>
	{

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let url = environment.serverUrl + 'dajTurnirZaId';

		return this.http.post<Turnir>(url,{id:id},{headers: headers});
		//.pipe(catchError(this.authService.ObradiGresku));
	}

	AzurirajTurnir(turnir: Turnir): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let url = environment.serverUrl + 'azurirajTurnir';

		window.location.reload();

		return this.http.post(url,turnir,{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	DajSveKorisnike(): Observable<Korisnik[]>
	{
		//const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		//let headers = new HttpHeaders().set('authorization',bearerHeader);

		let url = environment.serverUrl + 'admin/dajSveKorisnike';

		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization',bearerHeader);

		return this.http.post<Korisnik[]>(url,{token: localStorage.getItem('token')},{headers:headers});
		//.pipe(catchError(this.authService.ObradiGresku));
	}

	BanujKorisnika(korisnik: Korisnik): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let url = environment.serverUrl + 'banujKorisnika';

		//console.log(korisnik);

		return this.http.post(url,korisnik,{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));

	}

	UkloniBan(korisnik: Korisnik): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization',bearerHeader);

		let url = environment.serverUrl + 'ukloniBan';

		return this.http.post(url,korisnik,{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));

	}

	IzmeniFaq(faq: PitanjeOdgovor): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'izmeniFaq';

		let formData = new FormData();
		formData.append('username', localStorage.getItem('username'));
		formData.append('pitanje', faq.pitanje);
		formData.append('odgovor', faq.odgovor);
		formData.append('id', faq.id.toString());

		return this.http.post<any>(url, formData, { headers: headers })
		.pipe(catchError(this.authService.ObradiGresku));
	}

	DodajFaq(faq: PitanjeOdgovor): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'dodajFaq';

		let formData = new FormData();
		formData.append('username', localStorage.getItem('username'));
		formData.append('pitanje', faq.pitanje);
		formData.append('odgovor', faq.odgovor);

		return this.http.post<any>(url, formData, { headers: headers })
		.pipe(catchError(this.authService.ObradiGresku));
	}

	ObrisiPitanje(faq: PitanjeOdgovor): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'obrisiFaq';

		let formData = new FormData();
		formData.append('username', localStorage.getItem('username'));
		formData.append('id', faq.id.toString());

		return this.http.post<any>(url, formData, { headers: headers })
		.pipe(catchError(this.authService.ObradiGresku));
	}

	// vraca odgovarajuci upit za prikazivanje svih meceva izabranog turnira i svih potrebnih informacija za mec
	DajSveMeceveZaIDTurnira(idTurnira: number): Observable<any>
	{
		// pravimo odg. zaglavlje
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		// pravimo url na koji zelimo da uzmemo sve meceve
		let url = environment.serverUrl + 'meceviZaSelektovaniTurnir';

		let formData = new FormData();
		formData.append('username',localStorage.getItem('username'));
		formData.append('idTurnira', idTurnira.toString());

		// saljemo GET zahtev serveru za niz objekata tipa MecZaPrikaz
		return this.http.post<any>(url, formData, { headers: headers })
		.pipe(catchError(this.authService.ObradiGresku));
	}

	// Jelenina metoda
	KreirajMeceve(idTurnira: number): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'kreirajMeceve';

		return this.http.post(url, {idTurnira: idTurnira},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	DajSvaPitanjaIOdgovore(): Observable<PitanjeOdgovor[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'svaPitanjaIOdgovori';

		return this.http.get<PitanjeOdgovor[]>(url, { headers : headers });
		//.pipe(catchError(this.authService.ObradiGresku));
	}

	ObrisiIgru(idIgre: number): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'obrisiIgru';

		return this.http.post(url, {idIgre: idIgre},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	PrikaziPrijaveZaTurnir(idTurnira: number): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'dajPrijaveZaTurnir';

		return this.http.post<any>(url,{idTurnira: idTurnira},{headers: headers});
		//.pipe(catchError(this.authService.ObradiGresku));
	}

	DaliJeGlavniAdmin(): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        let headers = new HttpHeaders().set('authorization', bearerHeader);

		let  url = environment.serverUrl + 'daLiJeGlavniAdmin';

		return this.http.post(url,{},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	DaLiIgraTimska(id: number): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);
		
		let  url = environment.serverUrl + 'daLiIgraTimska';

		return this.http.post(url,{id:id},{headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}

	DajSveAdmine(): Observable<any[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        let headers = new HttpHeaders().set('authorization', bearerHeader);

		let  url = environment.serverUrl + 'dajSveAdmine';

		return this.http.post<any[]>(url,{},{headers: headers});
		//.pipe(catchError(this.authService.ObradiGresku));
	}

	ObrisiAdmina(idAdmina: number): Observable<any>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        let headers = new HttpHeaders().set('authorization', bearerHeader);

		let  url = environment.serverUrl + 'obrisiAdmina';

		return this.http.post(url,{ idAdmina: idAdmina }, {headers: headers})
		.pipe(catchError(this.authService.ObradiGresku));
	}
}
