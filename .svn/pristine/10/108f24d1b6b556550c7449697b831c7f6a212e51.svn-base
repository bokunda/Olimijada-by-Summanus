import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../servisi/admin.service';
import { MatTable } from '@angular/material';
import { Igra } from '../../modeli/Igra';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PotvrdaComponent } from '../potvrda/potvrda.component';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import swal from "sweetalert2";
import { IzmenaIgaraComponent } from '../izmena-igara/izmena-igara.component';
import { PravilaService } from '../../servisi/pravila.service';

@Component({
  selector: 'app-prikaz-igara',
  templateUrl: './prikaz-igara.component.html',
  styleUrls: ['./prikaz-igara.component.css']
})
export class PrikazIgaraComponent implements OnInit {

	constructor
	(
		private adminService: AdminService,
		private dialog: MatDialog,
		private pravilaService: PravilaService
	) { }

	igre: any[];

	displayedColumns = ['nazivIgre','obrisiIgru', 'izmeniIgru'];

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
		this.pravilaService.dodataIgra.subscribe(igra =>
			{
				//console.log('GOT YA');
				//console.log(igra);
				this.igre.push(igra);
				this.dataSource.data = this.igre;
			}
		)

		this.adminService.DajSveIgre().subscribe(igre =>
		{
			this.igre = igre;
				////console.log("front");
				//console.log(this.igre);

				this.dataSource = new MatTableDataSource(this.igre);
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;
		});
	}

	ObrisiIgru(idIgre: number, nazivIgre: string): void
	{
		let dialogRef = this.dialog.open(PotvrdaComponent, {
			width: '400px',
			data: {
				poruka: "Da li ste sigurni da želite da obrišete igru " + nazivIgre + "?"
			}
		});


		dialogRef.afterClosed().subscribe(odgovor =>
			{
				//console.log(odgovor);

				if (odgovor == 1)
				{
					this.adminService.ObrisiIgru(idIgre).subscribe(odg =>
					{
						let poruka;

						if (odg == 1)
						{
							this.igre = this.igre.filter(igra => igra.id != idIgre);
							poruka = "Bot je obrisan!";
							swal({
								type: 'success',
								title: 'Igra je uspešno obrisana!',
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
								title: 'GREŠKA: Igra nije obrisana!'
							});
						}

						//window.location.reload();
					});
				}

			});
	}

	IzmeniIgru(izabranaIgra: Igra): void
	{
		let dialogRef = this.dialog.open(IzmenaIgaraComponent, {
			width: '1000px',
			data: izabranaIgra
		});
	}
}
