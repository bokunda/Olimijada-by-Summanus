import { Component, OnInit } from '@angular/core';
import {TimServisService} from "../../servisi/tim-servis.service";
import {KorisnikService} from "../../servisi/korisnik.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-prikaz-timova',
  templateUrl: './prikaz-timova.component.html',
  styleUrls: ['./prikaz-timova.component.css']
})
export class PrikazTimovaComponent implements OnInit {

	constructor(public timService: TimServisService, public korisnikService: KorisnikService){}

	timovi = [];
	nizBrojeva = new Array<number>();
	ruta;

  	ngOnInit() {

		this.timService.timDodat.subscribe(tim =>
		{
			tim.opisTima = JSON.parse(tim.opisTima);
			this.timovi.push(tim);
			//console.log(tim);
		})

      this.ruta = environment.serverUrl;

      let korisnik;

      for(let i = 0; i < 36; i++)
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

      if(m != -1 && n != -1)
      {
          return naziv.substring(m + 1, n);
      }

      if(m == -1 && n != -1)
      {
          return naziv.substring(0, n);
      }

      if(m != -1 && n == -1)
      {
          return naziv.substring(m + 1, 365);
      }

      if(m == -1 && n == -1)
      {
          return naziv.substring(0, 365);
      }

      return naziv;

  }

}
