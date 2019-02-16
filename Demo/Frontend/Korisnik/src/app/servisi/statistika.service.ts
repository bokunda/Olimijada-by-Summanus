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

	UkupanBrojPobedaZaKorisnkaPoMesecima(username): Observable<any[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'ukupanBrojPobedaZaKorisnkaPoMesecima';

        let formData = new FormData();
        formData.append('username', "" + username);

        return this.http.post<any[]>(url, formData, { headers: headers });
	}

	UkupanBrojPorazaZaKorisnkaPoMesecima(username): Observable<any[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'ukupanBrojPorazaZaKorisnkaPoMesecima';

        let formData = new FormData();
        formData.append('username', "" + username);

        return this.http.post<any[]>(url, formData, { headers: headers });
	}

	UkupanBrojPobedaKorisnika(username): Observable<any>
    {
        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        let headers = new HttpHeaders().set('authorization', bearerHeader);

        let url = environment.serverUrl + 'ukupanBrojPobedaZaKorisnika';

        let formData = new FormData();
        formData.append('username', "" + username);

        return this.http.post<any>(url, formData, { headers: headers });
    }

    UkupanBrojPorazaKorisnika(username): Observable<any>
    {
        const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

        let headers = new HttpHeaders().set('authorization', bearerHeader);

        let url = environment.serverUrl + 'ukupanBrojPorazaZaKorisnika';

        let formData = new FormData();
        formData.append('username', "" + username);

        return this.http.post<any>(url, formData, { headers: headers });
    }

	BrojOsvojenihTurniraZaKorisnika(): Observable<any[]>
	{
		const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');

		let headers = new HttpHeaders().set('authorization', bearerHeader);

		let url = environment.serverUrl + 'brojOsvojenihTurniraZaKorisnika';

		return this.http.post<any[]>(url,{},{headers: headers});
	}



}
