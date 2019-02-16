
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../../servisi/korisnik.service';
import { PitanjeOdgovor } from '../../modeli/PitanjeOdgovor';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTable } from '@angular/material';

import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit
{
	constructor(public korisnikServis: KorisnikService, public translate: TranslateService,
		private cookieService: CookieService) { }

	pitanjaIOdgovori: PitanjeOdgovor[] = [];



	ngOnInit()
	{
		this.korisnikServis.DajSvaPitanjaIOdgovore().subscribe(odgovor =>
		{
			this.pitanjaIOdgovori = odgovor;

		});
	}
}
