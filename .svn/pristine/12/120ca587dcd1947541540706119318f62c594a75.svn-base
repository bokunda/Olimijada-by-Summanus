import { Component, OnInit } from '@angular/core';
import { MecZaPrikaz } from '../../modeli/MecZaPrikaz';
import { TurnirService } from '../../servisi/turnir.service';
import {KorisnikService} from "../../servisi/korisnik.service";
import {Korisnik} from "../../modeli/Korisnik";
import {environment} from "../../../environments/environment";

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

	constructor(public turnirService: TurnirService, public korisnikService: KorisnikService) { }

    ngOnInit()
    {
        this.ruta = environment.serverUrl;
		this.turnirService.DajSveMeceveKorisnika().subscribe(odg =>
		{
			if (odg != undefined && odg != null)
			{
			    //console.log(('ads' + JSON.stringify(odg));

				let danasnjiDatum = new Date().getTime()/1000;
				//console.log((danasnjiDatum);

				this.zakazaniMecevi = odg.filter(mec => mec.datumVremePocetka >= danasnjiDatum);
				//console.log(("zakazani mecevi" +JSON.stringify(this.zakazaniMecevi));
				// kaze da ne moze da se parsuje jer je number, ali mi typeof vraca da je string?
				this.prosliMecevi = odg.filter(mec => mec.trajanje != null && mec.trajanje != undefined && mec.datumVremePocetka+mec.trajanje < danasnjiDatum);
				//console.log(("prosli mecevi" +this.prosliMecevi);


				odg.forEach(mec => {
                /*
				    this.korisnikService.UzmiPodatkeOKorisniku(mec.korisnik1).subscribe(odgx =>
                    {
                        let k: Korisnik = odgx;
                        //console.log((k.username + ' ' + k.urlSlike);
                        this.nizAvatara['' + mec.korisnik1] = 'http://147.91.204.116:11000/upload/slike/' + k.urlSlike;
                    });

                    this.korisnikService.UzmiPodatkeOKorisniku(mec.korisnik2).subscribe(odgx =>
                    {
                        let k: Korisnik = odgx;
                        //console.log((k.username + ' ' + k.urlSlike);
                        this.nizAvatara['' + mec.korisnik2] = 'http://147.91.204.116:11000/upload/slike/' + k.urlSlike;
                    });
                */
					//console.log((parseInt(mec.datumVremePocetka.toString()));

				});

			}

		})
	}
}
