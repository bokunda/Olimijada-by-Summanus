import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Knjiga } from './knjiga';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Autor } from './Autor';
import {FormControl, Validators} from '@angular/forms';

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit
{
	title = 'ONLINE BIBLIOTEKA';

	private urlKnjige = "/uzmi-podatke";
	odgovor: Knjiga[];
	autori: Autor[];

	// promenljive za formu
	ime: string;
	prezime : string;
	drzava: string;

	constructor(private http: HttpClient) { }

	ngOnInit() 
	{
		this.UzmiPodatkeOKnjigama().subscribe(odg =>
		{
			this.odgovor = odg;
		});

		this.UzmiPodatkeOAutorima().subscribe(odg =>
		{
			this.autori = odg;
		});
	}

	UzmiPodatkeOKnjigama(): Observable<any>
	{
		let url = environment.serverUrl + '/uzmi-podatke';

		return this.http.get(url);
	}

	UzmiPodatkeOAutorima(): Observable<any>
	{
		let url = environment.serverUrl + '/uzmi-podatke-o-autorima';

		return this.http.get(url);
	}

	DodavanjeAutora(): void
	{
		console.log(this.ime);
		console.log(this.prezime);
		console.log(this.drzava);

		var korisnik = 
		{
			ime: this.ime,
			prezime: this.prezime,
			drzava: this.drzava
		};

		var odgovor;
		this.PodaciZaDodavanjeAutora(korisnik).subscribe(odg =>
		{
				console.log(odg);
                if (odg.status == 1)
                {

                }
                else if (odg.status == 0)
                {
                }
                else
                {
                }
		});
	}

	PodaciZaDodavanjeAutora(korisnik): Observable<any>
	{
		let url = environment.serverUrl + '/posalji-pod-za-novog-autora';

		return this.http.get(url, korisnik);
	}
}
