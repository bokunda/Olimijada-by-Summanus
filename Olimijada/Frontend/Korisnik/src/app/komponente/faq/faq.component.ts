
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../../servisi/korisnik.service';
import { PitanjeOdgovor } from '../../modeli/PitanjeOdgovor';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit
{
	constructor(public korisnikServis: KorisnikService) { }

	pitanjaIOdgovori: PitanjeOdgovor[] = [];

	dataSource;
	displayedColumns = ['pitanje', 'odgovor'];

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
		this.korisnikServis.DajSvaPitanjaIOdgovore().subscribe(odgovor =>
		{
			this.pitanjaIOdgovori = odgovor;

			//console.log("Sva pitanja i odgovori:");
			//console.log(this.pitanjaIOdgovori);

			this.dataSource = new MatTableDataSource(this.pitanjaIOdgovori);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}
}
