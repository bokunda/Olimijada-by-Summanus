import { Component, OnInit, ViewChild } from '@angular/core';
import { Admin } from '../../modeli/Admin';
import { AdminService } from '../../servisi/admin.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PotvrdaComponent } from '../potvrda/potvrda.component';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import { MatTable } from '@angular/material';
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
		private dialog: MatDialog
	) { }

	daLiJeGlavniAdmin;

	admini: any[];

	displayedColumns = ['adminUsername','obrisiAdmina'];

	dataSource;

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
		this.adminService.DaliJeGlavniAdmin().subscribe(daLiJeGlavniAdmin =>
		{
			//console.log(daLiJeGlavniAdmin);
			if(daLiJeGlavniAdmin == 1)
			{
				this.daLiJeGlavniAdmin = true;

				this.adminService.DajSveAdmine().subscribe(admini =>
				{
					this.admini = admini;
					//console.log(admini);

					this.dataSource = new MatTableDataSource(this.admini);
					this.dataSource.sort = this.sort;
					this.dataSource.paginator = this.paginator;
				})
			}
			else
			{
				this.daLiJeGlavniAdmin = false;
			}

		});
	}

	ObrisiAdmina(idAdmina: number, usernameAdmina: string): void
	{
		let dialogRef = this.dialog.open(PotvrdaComponent, {
			width: '400px',
			data: {
				poruka: "Da li ste sigurno da želite da obrišete admina " + usernameAdmina + "?"
			}
		});


		dialogRef.afterClosed().subscribe(odgovor =>
			{
				//console.log(odgovor);

				if (odgovor == 1)
				{
					this.adminService.ObrisiAdmina(idAdmina).subscribe(odg =>
					{
						let poruka;

						if (odg == 1)
						{
							//this.admini = this.admini.filter(admini => igra.id != idIgre);
							poruka = "Administrator je obrisan!";
							swal({
								type: 'success',
								title: 'Administrator je uspešno obrisan!',
								showConfirmButton: false,
								timer: 2600
							});
						}
						else
						{
							//console.log("Nastala je greska");
							poruka = "Nastala je greška";
							swal({
								type: 'error',
								title: 'GREŠKA: Administrator nije obrisana!'
							});
						}

						//window.location.reload();
					});
				}

			});
	}
}
