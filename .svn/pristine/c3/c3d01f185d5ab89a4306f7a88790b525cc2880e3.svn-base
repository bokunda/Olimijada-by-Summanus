import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Igra } from '../modeli/Igra';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class IgraService {
	
	constructor(
		private http: HttpClient
	) { }

	DajSveIgre(): Observable<Igra[]>
	{
		let url = environment.serverUrl + 'sveIgre';

		return this.http.get<Igra[]>(url);
	}

	UzmiPodatkeOIgri(idIgre): Observable<Igra>
	{
		let url = environment.serverUrl + 'igra';

		return this.http.post<Igra>(url, {idIgre: idIgre});
	}
}
