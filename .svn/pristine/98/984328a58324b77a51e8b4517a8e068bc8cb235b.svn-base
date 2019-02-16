import { Component, OnInit, ViewChild } from '@angular/core';
import { Admin } from '../../modeli/Admin';
import { AdminService } from '../../servisi/admin.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PotvrdaComponent } from '../potvrda/potvrda.component';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import { MatTable } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import swal from "sweetalert2";


@Component({
  selector: 'app-prikaz-admina',
  templateUrl: './prikaz-admina.component.html',
  styleUrls: ['./prikaz-admina.component.css']
})
export class PrikazAdminaComponent implements OnInit {

	constructor
	(
		private adminService: AdminService,
		private dialog: MatDialog,
		private translate: TranslateService,
		private cookieService: CookieService
	) { }

	daLiJeGlavniAdmin;

	admini: any[];

	displayedColumns = ['adminUsername','obrisiAdmina'];

	dataSource;

	@ViewChild(MatSort) sort: MatSort;
	//@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('table') table: MatTable<any>;

	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	ngOnInit()
	{
		this.adminService.dodatAdmin.subscribe(admin => {
			this.admini.push(admin);
			this.dataSource.data = this.admini;
		});

		this.adminService.DaliJeGlavniAdmin().subscribe(daLiJeGlavniAdmin =>
		{
			if(daLiJeGlavniAdmin == 1)
			{
				this.daLiJeGlavniAdmin = true;

				this.adminService.DajSveAdmine().subscribe(admini =>
				{
					this.admini = admini;

					this.dataSource = new MatTableDataSource(this.admini);
					this.dataSource.sort = this.sort;
					//this.dataSource.paginator = this.paginator;
				});
			}
			else
			{
				this.daLiJeGlavniAdmin = false;
			}
		});
	}

	ObrisiAdmina(idAdmina: number, usernameAdmina: string): void
	{
		let indikatorZaPrevod = 1;
		if (this.cookieService.get("language") == "sr")
		{
			indikatorZaPrevod = 1;
		}
		else
		{
			indikatorZaPrevod = 0;
		}

		let dialogRef = this.dialog.open(PotvrdaComponent, {
			width: '400px',
			data: {
				poruka: indikatorZaPrevod == 1 ? "Da li ste sigurno da želite da obrišete admina " + usernameAdmina + "?" : "Are you sure you want to delete admin " + usernameAdmina + "?"
			}
		});

		dialogRef.afterClosed().subscribe(odgovor =>
			{
				if (odgovor == 1)
				{
					this.adminService.ObrisiAdmina(idAdmina).subscribe(odg =>
					{
						let poruka;

						if (odg == 1)
						{
							this.admini = this.admini.filter(admin => admin.id != idAdmina);
							this.dataSource.data = this.admini;
							
							if (indikatorZaPrevod == 1)
							{
								poruka = "Administrator je obrisan!";
							}
							else
							{
								poruka = "Admin has been deleted!";
							}

							if (indikatorZaPrevod == 1)
							{
								swal({
									type: 'success',
									title: 'Administrator je uspešno obrisan!',
									showConfirmButton: false,
									timer: 2600
								});
							}
							else
							{
								swal({
									type: 'success',
									title: 'Admin has been successfully deleted!',
									showConfirmButton: false,
									timer: 2600
								});
							}
						}
						else
						{
							if (indikatorZaPrevod == 1)
							{
								poruka = "Nastala je greška";
							}
							else
							{
								poruka = "An error occurred";
							}

							if (indikatorZaPrevod == 1)
							{
								swal({
									type: 'error',
									title: 'GREŠKA: Administrator nije obrisan!'
								});
							}
							else
							{
								swal({
									type: 'error',
									title: 'ERROR: Admin has not been deleted!'
								});
							}
						}
					});
				}
			});
	}
}
