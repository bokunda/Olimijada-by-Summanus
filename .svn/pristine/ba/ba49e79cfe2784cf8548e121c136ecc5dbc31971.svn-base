import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTable } from '@angular/material';
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
		@Inject(MAT_DIALOG_DATA) public data: any,
	) { }

	dataSource;
	turnir: any;
	prijave: any[] = [];

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
			//console.log("jeli bre?!");
			if(prijave != -1)
			{
			//console.log("prijave eeeeeee");
			//console.log(prijave);
			this.prijave = prijave;
			this.dataSource = new MatTableDataSource(this.prijave);
			}
			else
			{
				this.NaAzur();
				swal({
					type: 'warning',
					title: 'Trenutno nema prijava!'
				  });
			}
		})
	}

}
