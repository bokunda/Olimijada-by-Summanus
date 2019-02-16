import { Component, OnInit } from '@angular/core';
import { TimServisService } from "../../servisi/tim-servis.service";
import { KorisnikService } from "../../servisi/korisnik.service";
import { environment } from "../../../environments/environment";
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-prikaz-timova',
	templateUrl: './prikaz-timova.component.html',
	styleUrls: ['./prikaz-timova.component.css']
})
export class PrikazTimovaComponent implements OnInit
{

	constructor(
		public timService: TimServisService, 
		public korisnikService: KorisnikService,
		public router: Router,
		public translate: TranslateService,
		private cookieService: CookieService) { }

	timovi = [];
	nizBrojeva = new Array<number>();
	ruta;

	ngOnInit()
	{

		this.timService.timDodat.subscribe(tim =>
		{
			tim.opisTima = JSON.parse(tim.opisTima);
			this.timovi.push(tim);
			//console.log(tim);
		})

		this.timService.timObrisan.subscribe(idTima =>
		{
			this.timovi = this.timovi.filter(tim => tim.id != idTima);
		})

		this.ruta = environment.serverUrl;

		let korisnik;

		for (let i = 0; i < 36; i++)
		{
			this.nizBrojeva.push(i);
		}

		this.korisnikService.UzmiPodatkeOKorisniku(localStorage.getItem('username')).subscribe(odgK =>
		{
			korisnik = odgK;

			this.timService.DajSveTimoveZaKorisnika(korisnik.id).subscribe(odg =>
			{
				this.timovi = odg;

				//console.log(this.timovi);
			});
		});
	}

	srediNaziv(naziv: string): string
	{
		let m, n;

		m = naziv.lastIndexOf('_');
		n = naziv.lastIndexOf('.');

		if (m != -1 && n != -1)
		{
			return naziv.substring(m + 1, n);
		}

		if (m == -1 && n != -1)
		{
			return naziv.substring(0, n);
		}

		if (m != -1 && n == -1)
		{
			return naziv.substring(m + 1, 365);
		}

		if (m == -1 && n == -1)
		{
			return naziv.substring(0, 365);
		}

		return naziv;

	}

	TestirajTim(idTima: number): void
	{
		this.timService.TestirajTim(idTima).subscribe(odg =>
			{
				if (odg.status == 1)
				{
					//console.log('odg = ',odg.id);
	
					this.router.navigate(['/prenos/'+odg.id]);
				}
				else
				{
					if(this.cookieService.get("language") == 'sr')
					{
						swal({
							type: 'error',
							title: 'GREŠKA!',
							text: 'Tim nije poslat na testiranje! Molimo Vas, prijavite problem administratoru sistema.'
						});
					}
					else
					{
						swal({
							type: 'error',
							title: 'ERROR!',
							text: 'The team was not sent for testing! Please, report the problem to the system administrator.'
						});
					}
					
				}
			});
	}

	ObrisiTim(idTima: number): void
	{

		this.timService.ObrisiTim(idTima).subscribe(odgovor =>
		{
			if (odgovor == 1)
			{
				if(this.cookieService.get("language") == 'sr')
				{
					swal(
						{
							type: 'success',
							title: 'Tim je uspešno obrisan!',
							showConfirmButton: false,
							timer: 2600
						}
					)
				}
				else
				{
					swal(
						{
							type: 'success',
							title: 'Team successfully deleted!',
							showConfirmButton: false,
							timer: 2600
						}
					)
				}
				

				this.timService.timObrisan.emit(idTima);
			}
			else
			{
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'error',
						title: "GREŠKA: Pokušajte ponovo!"
					})
				}
				else
				{
					swal({
						type: 'error',
						title: "ERROR: Try again later!"
					})
				}
				
			}
		})
	}

}
