import {Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output, ViewChild } from '@angular/core';
import {Bot} from '../../modeli/Bot';
import {BotService} from '../../servisi/bot.service';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import { PotvrdaComponent } from '../potvrda/potvrda.component';
import swal from "sweetalert2";
import { Router } from '@angular/router';
import { MatTable } from '@angular/material';

import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
    selector: 'app-prikaz-botova',
    templateUrl: './prikaz-botova.component.html',
    styleUrls: ['./prikaz-botova.component.css']
})
export class PrikazBotovaComponent implements OnInit, OnChanges {
    botovi: any[];
	@Input() dodatiBot: any;
	//@Output() nakonOdjave = new EventEmitter<boolean>();
	fajlZaUpload: File;

	displayedColumns = ['naziv', 'igra', 'datumKreiranja','datumIzmene','brisanje','azuriranje', 'testiranje'];
	dataSource: MatTableDataSource<any>;

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('table') table: MatTable<any>;

    constructor(
        public botService: BotService,
        public dialog: MatDialog,
		public snackBar: MatSnackBar,
		private router: Router
    ) {
    }

    ngOnInit() {
        //console.log(("on init");
        this.botService.UzmiBotoveKorisnika().subscribe(
            botovi => {
				//console.log((botovi);
                this.botovi = botovi;
                for (let i = 0; i < this.botovi.length; i++) {
                    //console.log((JSON.stringify(this.botovi[i].nazivFajla));
				}

				this.dataSource = new MatTableDataSource(this.botovi);
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;

				////console.log((botovi);
            }, (err) => {}
        );

    }

    ngOnChanges(changes: SimpleChanges): void
    {

        if (this.botovi !== undefined)
        {
			//console.log(("nije undefined");
			this.botovi.unshift(changes['dodatiBot'].currentValue);
			this.dataSource.data = this.botovi;
        }

	}

	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}


	IzmeniBota(event,idBota: number): void
	{
		//console.log((idBota);

		let files = event.target.files;

        if (files.length > 0)
        {
			this.fajlZaUpload = files[0];

			this.botService.IzmeniBota(idBota,this.fajlZaUpload).subscribe(odg =>
			{
				let poruka;
				let tip = 'succes';

				if (odg != -1)
				{
					poruka = "Uspešno ste izmenili bota!";
					this.botovi = this.botovi.filter(bot => bot.id != idBota);
					this.botovi.unshift(odg);
					this.dataSource.data = this.botovi;

                    swal({
                        type: 'success',
                        title: 'Uspešno ste izmenili bota!',
                        showConfirmButton: false,
                        timer: 2600
                    });
				}
				else
				{
				    tip = 'error';
					poruka = "Došlo je do greške!";
                    swal({
                        type: 'error',
                        title: 'GREŠKA: Niste izmenili bota!'
                    });
				}

		        /*
				this.snackBar.open(poruka,'' , {
					duration: 2000
				});
		        */
            });
        }

	}

	TestirajBota(idBota: number): void
	{
		this.botService.TestirajBota(idBota).subscribe(odg =>
		{
			if (odg.status == 1)
			{

				this.router.navigate(['/prenos/'+odg.id]);
			}
			else
			{
				swal({
					type: 'error',
					title: 'GREŠKA: Bot nije poslat na testiranje!'
				});
			}
		});
	}


	ObrisiBota(idBota: number,nazivFajla: string): void
	{
		//console.log((nazivFajla);
		let dialogRef = this.dialog.open(PotvrdaComponent, {
			width: '400px',
			data: {
				poruka: "Da li ste sigurni da zelite da obrisete bota "+ nazivFajla.substring(nazivFajla.indexOf('_')+1,nazivFajla.lastIndexOf('.')) +"?"
			}
		});

		dialogRef.afterClosed().subscribe(odgovor =>
		{
			//console.log((odgovor);

			if (odgovor == 1)
			{
				this.botService.ObrisiBota(idBota,nazivFajla).subscribe(odg =>
				{
					let poruka;

					if (odg == 1)
					{
						this.botovi = this.botovi.filter(bot => bot.id != idBota);
						this.dataSource.data = this.botovi;
						poruka = "Bot je obrisan!";
                        swal({
                            type: 'success',
                            title: 'Bot je uspešno obrisan!',
                            showConfirmButton: false,
                            timer: 2600
                        });
					}
					else if (odg == -1)
					{
						//console.log(("Nastala je greska");
						poruka = "Nastala je greška";
                        swal({
                            type: 'error',
                            title: 'GREŠKA: Bot nije obrisan!'
                        });
					}
					else
					{
						swal({
                            type: 'error',
                            title: 'Ne možete da obrišete bota koji je prijavljen na turnir!'
                        });
					}

					/*
					this.snackBar.open(poruka,'' , {
						duration: 2000
					});
					*/

				});
			}

		});
	}

}
