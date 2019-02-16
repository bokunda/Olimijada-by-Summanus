import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { TurnirService } from '../../servisi/turnir.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatSort, MatTableDataSource, MatPaginator, MatTable } from '@angular/material';
import swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-rezultati-turnira',
	templateUrl: './rezultati-turnira.component.html',
	styleUrls: ['./rezultati-turnira.component.css']
})
export class RezultatiTurniraComponent implements OnInit
{

	constructor(private turnirService: TurnirService,
		public dialogRef: MatDialogRef<RezultatiTurniraComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public translate: TranslateService,
		private cookieService: CookieService
	) { }

	turnir = null;
	igra = null;
	rezultati = null;
	ruta;
	displayedColumns = ['korisnik', 'pobedePorazi'];
	dataSource = new MatTableDataSource();

	/*
	private paginator: MatPaginator;
	private sort: MatSort;


	@ViewChild(MatSort) set matSort(ms: MatSort) {
	  this.sort = ms;
	  this.setDataSourceAttributes();
	}

	@ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
	  this.paginator = mp;
	  this.setDataSourceAttributes();
	}

	setDataSourceAttributes() {
	  this.dataSource.paginator = this.paginator;
	  this.dataSource.sort = this.sort;

	  if (this.paginator && this.sort) {
		//this.applyFilter('');
	  }
	}
	*/
	@ViewChild(MatSort) sort: MatSort;
	//@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('table') table: MatTable<any>;


	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespaces
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	ngOnInit()
	{
		this.ruta = environment.serverUrl;
		this.turnirService.UzmiRezultateTurnira(this.data.idTurnira).subscribe(odg =>
		{
			if (odg != -1)
			{
				this.turnir = odg.turnir;
				this.igra = odg.igra;
				this.rezultati = odg.rezultati;


				this.dataSource.data = this.rezultati;
				this.dataSource.sort = this.sort;
				//this.dataSource.paginator = this.paginator;
			}
			else
			{
				if(this.cookieService.get("language") == 'sr')
				{
					swal({
						type: 'error',
						title: 'GREŠKA: Pokušajte ponovo!'
					})
				}
				else
				{
					swal({
						type: 'error',
						title: 'ERROR: Try again later!'
					})
				}
				

				this.dialogRef.close();
			}

		})


	}



}
