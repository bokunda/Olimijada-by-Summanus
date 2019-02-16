
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatSnackBar} from '@angular/material';
import swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTable } from '@angular/material';
import { AdminService } from '../../servisi/admin.service';
import { TurnirZaPrikaz } from '../../modeli/TurnirZaPrikaz';
import { MecZaprikaz } from '../../modeli/MecZaPrikaz';
import { TranslateService } from '@ngx-translate/core';
import { NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-prikaz-meceva-za-turnir',
	templateUrl: './prikaz-meceva-za-turnir.component.html',
	styleUrls: ['./prikaz-meceva-za-turnir.component.css']
})

export class PrikazMecevaZaTurnirComponent implements OnInit
{
	constructor
	(
		public dialogRef: MatDialogRef<PrikazMecevaZaTurnirComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private adminService: AdminService,
		private translate: TranslateService,
		private snackBar: MatSnackBar,
		private cookieService: CookieService
	) {	}

	NaAzur():void
	{
		this.dialogRef.close();
	}

	dataSource;
	displayedColumns = ['korisnik1', 'korisnik2', 'datumvremePocetka', 'rezultat'];

	mecevi: MecZaprikaz[] = [];
	selektovanTurnir: TurnirZaPrikaz;

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('table') table: MatTable<any>;

	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	ngOnInit()
	{
		this.selektovanTurnir = this.data.selektovanTurnir;

		// uzimamo sve meceve za selektovani turnir iz baze
		this.adminService.DajSveMeceveZaIDTurnira(this.selektovanTurnir.id).subscribe(odgovor =>
		{
			// mecevi - niz objekata tipa MeceZaPrikaz...

			// ukoliko je vraćen odgovarajući odgovor od servera
			if (odgovor != -1)
			{
				this.mecevi = odgovor;

				this.mecevi.forEach(mec =>
				{
					// ako meč tek treba da se igra
					if (mec.datumVremePocetka*1000 + mec.trajanje > Date.now())
					{
						// kako meč nije počeo setujemo odg. rezultat
						mec.rezultat1 = 0;
						mec.rezultat2 = 0;
					}
					// meč je završen prikaži rezultate
				});

				this.dataSource = new MatTableDataSource(this.mecevi);
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
			}
			else
			{
				this.NaAzur();

				if (this.cookieService.get("language") == "sr")
				{
					swal({
						type: 'warning',
						title: 'Trenutno nema mečeva!'
					});
				}
				else
				{
					swal({
						type: 'warning',
						title: 'No matches!'
					});
				}
			}
		});
	}
}
