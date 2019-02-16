import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { TurnirService } from '../../servisi/turnir.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-mecevi-turnira',
	templateUrl: './mecevi-turnira.component.html',
	styleUrls: ['./mecevi-turnira.component.css']
})
export class MeceviTurniraComponent implements OnInit
{
	turnir = null;
	igra = null;
	mecevi = [];
	nazivTurnira = "";

	displayedColumns = ['korisnici','rezultat','datumVremePocetka'];
	dataSource;
	//@ViewChild(MatPaginator) paginator;

	constructor(
		private turnirService: TurnirService,
		public dialogRef: MatDialogRef<MeceviTurniraComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public translate: TranslateService,
		private cookieService: CookieService
	) { }

	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespaces
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}


	ngOnInit()
	{
		this.turnir = this.data.idTurnira;
		this.nazivTurnira = '';
		//console.log(this.turnir);
		this.turnirService.DajSveMeceveNaTurniru(this.turnir).subscribe(odg =>
		{
			if (odg.mecevi != -1 && odg.mecevi != 0)
			{
				this.igra = odg.igra;
				this.mecevi = odg.mecevi;
				this.nazivTurnira = odg.turnir;

				this.dataSource = new MatTableDataSource(this.mecevi);
				//this.dataSource.paginator = this.paginator;
			}
			else
			{
				this.turnir = null;
			}
			
		});
	}

}
