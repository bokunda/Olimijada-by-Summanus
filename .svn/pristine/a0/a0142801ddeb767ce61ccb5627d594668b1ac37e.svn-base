import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Pesma } from './pesma';
import { Plejlista } from './plejlista';

@Injectable()
export class ServerService {
	private pesmeUrl = "svePesme";
	private plejlisteUrl = "svePlejliste";

 	constructor(private http: HttpClient) { }

	UzmiSvePesme():Observable<Pesma[]> 
	{
		return this.http.get<Pesma[]>(this.pesmeUrl);
	}

	UzmiPesmu(id: number): Observable<Pesma>
	{
		var url:string = `${this.pesmeUrl}/${id}`;

		return this.http.get<Pesma>(url);

	}

	UzmiSvePlejliste():Observable<Plejlista[]> 
	{
		return this.http.get<Plejlista[]>(this.plejlisteUrl);
	}

	UzmiPlejlistu(id: number): Observable<Plejlista>
	{
		var url:string = `${this.plejlisteUrl}/${id}`;
		return this.http.get<Plejlista>(url);
	}

	ObrisiPlejlistu(id: number): void
	{
		var url:string ='obrisiPlejlistu';
		this.http.post(url,{idPlejliste:id}).subscribe();
	}

	ObrisiPesmu(id: number): void
	{
		var url:string ='obrisiPesmu';
		this.http.post(url,{idPesme:id}).subscribe();
	}

	IzmeniPesmu(id: number,naziv: string):void 
	{
		console.log("menjam pesmu");
		var url: string = 'izmeniPesmu';
		//var header: HttpHeaders = new HttpHeaders().set("Content-Type",'application/x-www-form-urlencoded');
		this.http.post(url,{idPesme:id,naziv: naziv}/*,{headers:header}*/).subscribe();
	}

	IzmeniPlejlistu(id: number,naziv: string):void 
	{
		var url: string = 'izmeniPlejlistu';
		this.http.post(url,{idPlejliste:id,naziv:naziv}).subscribe();
	}
}
