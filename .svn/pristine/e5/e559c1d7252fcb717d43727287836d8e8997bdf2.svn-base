import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DatePipe } from '@angular/common';
import { MatTable } from '@angular/material';
import { AdminService } from '../../servisi/admin.service';
import { StatistikaService } from '../../servisi/statistika.service';
import { Korisnik } from '../../modeli/Korisnik';
import { MatSnackBar, MatDialog} from '@angular/material';
import { BanovanjeComponent } from '../banovanje/banovanje.component';

@Component({
  selector: 'app-prikaz-korisnika',
  templateUrl: './prikaz-korisnika.component.html',
  styleUrls: ['./prikaz-korisnika.component.css']
})
export class PrikazKorisnikaComponent implements OnInit {

	constructor
	(
		private adminService: AdminService,
		private statistikaService: StatistikaService,
		private dialog: MatDialog
		//public dialogRef: MatDialogRef<PrikazKorisnikaComponent>,
	) { }

	displayedColumns = ['korisnickoIme','email','ime','prezime','datumRegistracije','ban'];

	korisnici: Korisnik[] = [];
	dataSource;

	trenutno = Date.now();


	koriscniciPoMesecima: any[];
	botoviPoMesecima: any[];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	ngOnInit()
	{
		this.adminService.DajSveKorisnike().subscribe(korisnici =>
		{
			this.korisnici = korisnici;
			//console.log(korisnici);

			this.dataSource = new MatTableDataSource(this.korisnici);
			this.dataSource.paginator = this.paginator;
		});

		this.statistikaService.UkupanBrojKorisnika().subscribe(odg =>
		{
			//console.log("Ukupan broj korisniak: " + odg);
		});

		this.statistikaService.UkupanBrojKorisnikaPoMesecima().subscribe(koriscniciPoMesecima =>
		{
			this.koriscniciPoMesecima = koriscniciPoMesecima;
			//console.log(koriscniciPoMesecima);
		});

		this.statistikaService.UkupanBrojBotovaPoMesecima().subscribe(botoviPoMesecima =>
			{
				this.botoviPoMesecima = botoviPoMesecima;
				//console.log(botoviPoMesecima);
			});
	}



	OtvoriBanDialog(korisnik: Korisnik)
	{
		let dialogRef = this.dialog.open(BanovanjeComponent, {
			width: '300px',
			data:{
				korisnik: korisnik
			}
		});
	}

}
