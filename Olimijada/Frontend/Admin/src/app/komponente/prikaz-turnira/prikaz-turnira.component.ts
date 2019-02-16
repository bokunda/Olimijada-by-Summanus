import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../servisi/admin.service';
import { Turnir } from '../../modeli/Turnir';
import { TurnirZaPrikaz } from '../../modeli/TurnirZaPrikaz';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DatePipe } from '@angular/common';
import { MatTable } from '@angular/material';
import { MatSnackBar, MatDialog} from '@angular/material';
import { AzurirajTurnirComponent } from '../azuriraj-turnir/azuriraj-turnir.component';
import swal from "sweetalert2";
import { MecZaprikaz } from '../../modeli/MecZaPrikaz';
import { PrikazMecevaZaTurnirComponent } from '../prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component';
import { PrikazPrijavaComponent } from '../prikaz-prijava/prikaz-prijava.component';
import { PotvrdaComponent } from '../potvrda/potvrda.component';


@Component({
  selector: 'app-prikaz-turnira',
  templateUrl: './prikaz-turnira.component.html',
  styleUrls: ['./prikaz-turnira.component.css']
})

export class PrikazTurniraComponent implements OnInit {

  prikazi;

	constructor(
			private adminService: AdminService,
			private snackBar: MatSnackBar,
			private dialog: MatDialog
				) { }

	turniri: TurnirZaPrikaz[] = [];
	mecevi: MecZaprikaz[] = [];

	displayedColumns = ['Turnir', 'Igra', 'pocetakPrijava','krajPrijava','pocetakTurnira','krajTurnira','otkazivanje','azuriranje', 'prikaziMeceve','prikaziPrijave'/*, 'kreirajMeceve'*/];

	dataSource;



	openSnackBar(message: string, action: string)
	{
		this.snackBar.open(message, action, {
		duration: 2000,
		});
	}


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

		this.adminService.dodatTurnir.subscribe(turnirNazivIgre =>
		{
			//console.log(turnirNazivIgre);
			let turnirZaPrikaz = new TurnirZaPrikaz();
			let turnir = turnirNazivIgre.turnir;
			turnir.id = turnirNazivIgre.idTurnira;
			turnirZaPrikaz.datumVremePocetka = turnir.datumVremePocetka;
			turnirZaPrikaz.datumVremeZavrsetka = turnir.datumVremeZavrsetka;
			turnirZaPrikaz.pocetakPrijava = turnir.pocetakPrijava;
			turnirZaPrikaz.krajPrijava = turnir.krajPrijava;;
			turnirZaPrikaz.id = turnir.id;
			turnirZaPrikaz.nazivIgre = turnirNazivIgre.nazivIgre;
			turnirZaPrikaz.nazivTurnira = turnir.naziv;

			
			this.turniri.push(turnirZaPrikaz);
			this.dataSource.data = this.turniri;
		});

		this.prikazi = false;

		this.adminService.DajSveTurnire().subscribe(turniri =>
			{
				this.turniri = turniri;
				////console.log("front");
				//console.log(this.turniri);

				this.dataSource = new MatTableDataSource(this.turniri);
				this.dataSource.sort = this.sort;
				this.dataSource.paginator = this.paginator;

			});
	}

	ObrisiTurnir(turnir: TurnirZaPrikaz): void
	{
		//console.log(turnir.id);



		if((turnir.datumVremePocetka * 1000) > Date.now())
		{
			//this.adminService.OtkaziTurnir(turnir.id).subscribe();
			//this.table.renderRows();
			//this.openSnackBar('Turnir uspešno otkazan!', '');

			let dialogRef = this.dialog.open(PotvrdaComponent, {
				width: '400px',
				data: {
					poruka: "Da li ste sigurno da želite da otkažete turnir " + turnir.nazivTurnira + "?"
				}
			});

			dialogRef.afterClosed().subscribe(odgovor =>
				{
					//console.log(odgovor);

					if (odgovor == 1)
					{
						this.adminService.OtkaziTurnir(turnir.id).subscribe(odg =>
						{
							let poruka;

							if (odg == 1)
							{
								//this.turniri = this.turniri.filter(turnir=> turnir.id != idTurnira);
								poruka = "Bot je obrisan!";
								swal({
									type: 'success',
									title: 'Turnir je uspešno otkazan!',
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
									title: 'GREŠKA: Turnir nije obrisan!'
								});
							}


						});
					}

				});



		}
		else if((turnir.datumVremeZavrsetka * 1000) < Date.now())
		{
			//this.openSnackBar('GREŠKA: Turnir je završen!', '');
      swal({
        type: 'error',
        title: 'Turnir je završen!'
      });
		}
		else
		{
			//this.openSnackBar('GREŠKA: Turnir je u toku!', '');
      swal({
        type: 'error',
        title: 'GREŠKA: Turnir je u toku!'
      });
		}
	}

	AzurirajTurnir(turnir: TurnirZaPrikaz): void
	{
		if(turnir.datumVremeZavrsetka * 1000 < Date.now())
		{
			swal({
				type: 'error',
				title: 'GREŠKA: Turnir je završen!'
			  });
		}
		else
		{
			let dialogRef = this.dialog.open(AzurirajTurnirComponent, {
				width: '1000px',
				data:{
					turnir: turnir
				}
			});
		}

	}

	// funkcija koja treba da prikaže sve mečeve za izabrani turnir
	PrikaziMeceve(turnir: TurnirZaPrikaz): void
	{
		// otvaramo prozor, gde nam se prikazuju svi mečevi
		let dialogRef = this.dialog.open(PrikazMecevaZaTurnirComponent,
		{
			width: '800px', // definišemo širinu
			data: // šaljemo izabrani turnir za prikaz mečeva
			{
				selektovanTurnir: turnir
			}
		});
	}

	KreirajMeceve(turnir: Turnir): void
	{
		this.adminService.KreirajMeceve(turnir.id).subscribe(odg =>
		{
			if (odg == -1)
			{
				swal({
					type: 'error',
					title: 'Došlo je do greške!'
				  });
			}
			else
			{
				swal({
					type: 'success',
					title: 'Mečevi su kreirani!',
					showConfirmButton: false,
					timer: 2600
				  });
			}
		});
	}

	PrikaziPrijave(turnir: TurnirZaPrikaz): void
	{
		let dialogRef = this.dialog.open(PrikazPrijavaComponent, {
			width: '600px',
			data:{
				turnir: turnir
			}
		});
	}

	setovanjeKalendara(event): void
	{
		this.prikazi = true;
	}

	ngAfterViewInit()
	{
	}
}
