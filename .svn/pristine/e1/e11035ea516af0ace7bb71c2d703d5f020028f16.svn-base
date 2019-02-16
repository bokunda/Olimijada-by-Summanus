import { Component, OnInit } from '@angular/core';
import { MecZaPrikaz } from '../../modeli/MecZaPrikaz';
import { TurnirService } from '../../servisi/turnir.service';
import {KorisnikService} from "../../servisi/korisnik.service";
import {Korisnik} from "../../modeli/Korisnik";
import { TranslateService } from '@ngx-translate/core';
import {environment} from "../../../environments/environment";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-prikaz-meceva',
  templateUrl: './prikaz-meceva.component.html',
  styleUrls: ['./prikaz-meceva.component.css']
})
export class PrikazMecevaComponent implements OnInit {

	zakazaniMecevi: MecZaPrikaz[];
	prosliMecevi: MecZaPrikaz[];

	displayColumnsZakazani = ['turniri','korisnici','datumVremePocetka'];
	displayColumnsProsli = ['turniri','korisnici','datumVremePocetka','rezultat','gledaj'];

	nizAvatara = [];

	ruta;

	ime: string = "";

	constructor(public turnirService: TurnirService, public korisnikService: KorisnikService,
		public translate: TranslateService,
		private cookieService: CookieService) { }

    ngOnInit()
    {
		this.ruta = environment.serverUrl;

		this.korisnikService.DajUsername().subscribe(vra =>
		{
			this.ime = vra;
			//console.log("ime:" + this.ime);
		});

		this.turnirService.DajSveMeceveKorisnika().subscribe(odg =>
		{
			if (odg != undefined && odg != null)
			{
			    //console.log(('ads' + JSON.stringify(odg));
				//console.log(odg);
				let danasnjiDatum = new Date().getTime()/1000;
				//console.log((danasnjiDatum);

				this.zakazaniMecevi = odg.filter(mec => mec.datumVremePocetka >= danasnjiDatum);
				//console.log(("zakazani mecevi" +JSON.stringify(this.zakazaniMecevi));
				// kaze da ne moze da se parsuje jer je number, ali mi typeof vraca da je string?
				this.prosliMecevi = odg.filter(mec => mec.datumVremePocetka + mec.trajanje < danasnjiDatum);
				//console.log(("prosli mecevi" +this.prosliMecevi);

			}
		})
	}

	daLiJePobedio(korisnik1: string, korisnik2: string, rezultat1: number, rezultat2: number):Boolean
    {
        if(korisnik1 == localStorage.getItem('username') && rezultat1 > rezultat2)
        {
            return true;
        }
        else if(korisnik2 == localStorage.getItem('username') && rezultat2 > rezultat1)
        {
            return true;
        }

        return false;
    }
}
