import { Component, OnInit } from '@angular/core';
import { IgraService } from '../../servisi/igra.service';
import { Igra } from '../../modeli/Igra';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { PotvrdaComponent } from '../potvrda/potvrda.component';
import { DodavanjeBotaComponent } from '../dodavanje-bota/dodavanje-bota.component';
import { ONamaComponent } from '../o-nama/o-nama.component';
import { DodavanjeBotaZaDatuIgruComponent } from '../dodavanje-bota-za-datu-igru/dodavanje-bota-za-datu-igru.component';
import { environment } from "../../../environments/environment";
import { AuthService } from "../../servisi/auth.service";
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-igre',
	templateUrl: './igre.component.html',
	styleUrls: ['./igre.component.css']
})
export class IgreComponent implements OnInit
{

	panelOpenState: boolean = false;

	constructor
		(
		public igreService: IgraService,
		public dialog: MatDialog,
		public authService: AuthService,
		public translate: TranslateService,
		private cookieService: CookieService
		) { }

	nizIgri: Array<Igra>;
	igraIndeks = 0;
	timskaIgra = false;

	igraNaziv = '';
	igraPravila = '';
	ruta;

	ngOnInit()
	{

		this.ruta = environment.serverUrl;
		this.igreService.DajSveIgre().subscribe(odg =>
		{
			this.nizIgri = odg;
			this.prikaziOpis(0);
		});
	}

	prikaziOpis(indeksIgre): void
	{
		this.igraIndeks = indeksIgre;
		if (this.nizIgri[indeksIgre].timska == 1)
		{
			this.timskaIgra = true;
		}
		else
		{
			this.timskaIgra = false;
		}

		this.igraNaziv = '' + this.nizIgri[indeksIgre].naziv;
		this.igraPravila = '' + this.nizIgri[indeksIgre].pravila;
	}

	daLiJeIgraTimska(indeksIgre): boolean
	{
		this.igraIndeks = indeksIgre;
		//idIgre--;

		if (this.nizIgri[indeksIgre].timska == 1)
		{
			return this.timskaIgra = true;
		}

		return this.timskaIgra = false;
	}

	dialogDodajBota(): void
	{
		let dialogRef = this.dialog.open(DodavanjeBotaZaDatuIgruComponent, {
			width: '600px',
			data: {
				idIgre: this.nizIgri[this.igraIndeks].id
			},
			closeOnNavigation: true
			
		});
	}
}



