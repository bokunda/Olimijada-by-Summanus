import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTable } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import { AdminService } from '../../servisi/admin.service';

import { DatePipe } from '@angular/common';
import swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-prikaz-prijava',
  templateUrl: './prikaz-prijava.component.html',
  styleUrls: ['./prikaz-prijava.component.css']
})
export class PrikazPrijavaComponent implements OnInit {

	constructor
	(
		public dialogRef: MatDialogRef<PrikazPrijavaComponent>,
		public adminService: AdminService,
		public translate: TranslateService,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public cookieService: CookieService
	) { }

	dataSource;
	turnir: any;
	prijave: any[] = [];
	public timska: boolean;

	NaAzur():void
	{
		this.dialogRef.close();
	}

	displayedColumns = ['korisnik','bot','datumVremePrijave'];

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('table') table: MatTable<any>;

	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	ngOnInit() {
		this.turnir = this.data.turnir;
		this.adminService.PrikaziPrijaveZaTurnir(this.turnir.id).subscribe(prijave =>
		{

			this.adminService.DaLiIgraTimska(this.turnir.id).subscribe(odg =>
				{
					console.log("timska: " + odg);
					if(odg == 1)
					{
						this.timska = true;
					}
					else
					{
						this.timska = false;
					}

					if(prijave != -1)
					{
						console.log(prijave);
						this.prijave = prijave;
						this.dataSource = new MatTableDataSource(this.prijave);
					}
					else
					{
						this.NaAzur();

						if (this.cookieService.get("language") == "sr")
						{
							swal({
								type: 'warning',
								title: 'Trenutno nema prijava!'
							});
						}
						else
						{
							swal({
								type: 'warning',
								title: 'Currently no registrations!'
							});
						}
					}
				});
		});
	}
}
