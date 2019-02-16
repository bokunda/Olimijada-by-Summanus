import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import { TurnirService } from '../../servisi/turnir.service';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-arhiva-utakmica',
  templateUrl: './arhiva-utakmica.component.html',
  styleUrls: ['./arhiva-utakmica.component.css']
})
export class ArhivaUtakmicaComponent implements OnInit {

	displayedColumnsProsli = ['redniBroj', 'domacin', 'gost', 'rezultat', 'datum', 'turnir', 'gledaj'];
	displayedColumnsAktuelni = ['redniBroj', 'domacin', 'gost', 'datum','vreme', 'turnir', 'gledaj'];
	prosliMecevi = [];
	aktuelniMecevi = [];
	dataSourceProsli: MatTableDataSource<any> = new MatTableDataSource();
	dataSourceAktuelni: MatTableDataSource<any> = new MatTableDataSource();

	drugiTab: boolean = false;

	@ViewChild(MatSort) sortProsli: MatSort;
	@ViewChild(MatSort) sortAktuelni: MatSort;
	@ViewChild(MatPaginator) paginatorProsli: MatPaginator;
	@ViewChild(MatPaginator) paginatorAktuelni: MatPaginator;

	constructor(private turnirService: TurnirService,
				private router: Router,
				public translate: TranslateService,
				private cookieService: CookieService) { }

	ngOnInit() {
 
		this.turnirService.UzmiSveAktuelneIZakazaneMeceve().subscribe(odg =>
		{
			this.aktuelniMecevi = odg;
            this.dataSourceAktuelni = new MatTableDataSource(this.aktuelniMecevi);

            this.dataSourceAktuelni.data = this.aktuelniMecevi;

			this.dataSourceAktuelni.sort = this.sortAktuelni;
			//this.dataSourceAktuelni.paginator = this.paginatorAktuelni;
		})

	}

    applyFilterProsli(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSourceProsli.filter = filterValue;
    }

	applyFilterAktuelni(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSourceAktuelni.filter = filterValue;
	}

	PromenaTaba(event): void
	{
		this.drugiTab = true;


		this.turnirService.UzmiSveProsleMeceve().subscribe(odg =>
			{
				this.prosliMecevi = odg;
                this.dataSourceProsli = new MatTableDataSource(this.prosliMecevi);

                this.dataSourceProsli.data = this.prosliMecevi;

				this.dataSourceProsli.sort = this.sortProsli;
                //this.dataSourceProsli.paginator = this.paginatorProsli;


				//console.log(this.prosliMecevi);
			});

	}


    /**
     * Set the sort after the view init since this component will
     * be able to query its view for the initialized sort.
     */
    ngAfterViewInit()
    {
        //this.dataSourceAktuelni.sort = this.sortAktuelni;
        //this.dataSourceAktuelni.paginator = this.paginatorAktuelni;

        //this.dataSourceProsli.sort = this.sortProsli;
        //this.dataSourceProsli.paginator = this.paginatorProsli;
    }

}

export interface Element {
    redniBroj: number;
    domacin: string;
    gost: string;
    rezultat: string;
    datum: string;
    turnir: string;
    gledaj: string;
}

const ELEMENT_DATA: Element[] = [
    {redniBroj: 1, domacin: 'Aleksandar', gost: 'Aleksandra', rezultat: '3:1', datum: '03/02/2010', turnir: 'Olimijada Open', gledaj: '1'},
    {redniBroj: 2, domacin: 'Bojan', gost: 'Jelena', rezultat: '2:3', datum: '03/02/1996', turnir: 'Kraljevo Open', gledaj: '2'},
    {redniBroj: 3, domacin: 'Nikola', gost: 'Jelena', rezultat: '7:6', datum: '03/02/2018', turnir: 'KrajinaDA', gledaj: '1'},
    {redniBroj: 4, domacin: 'David', gost: 'Nikola', rezultat: '6:7', datum: '13/02/1996', turnir: 'Summanus CUP', gledaj: '2'},
    {redniBroj: 5, domacin: 'Nikola', gost: 'David', rezultat: '3:4', datum: '02/05/2018', turnir: 'Summanus CUP', gledaj: '1'},
    {redniBroj: 6, domacin: 'Bojan', gost: 'Nikola', rezultat: '1:2', datum: '01/05/2018', turnir: 'Liga šampiona', gledaj: '2'},
    {redniBroj: 7, domacin: 'David', gost: 'Aleksandra', rezultat: '2:1', datum: '31/04/2018', turnir: 'Stolica LE', gledaj: '1'},
    {redniBroj: 8, domacin: 'Aleksandar', gost: 'Jelena', rezultat: '3:2', datum: '30/04/2018', turnir: 'Toster CUP', gledaj: '2'},
    {redniBroj: 9, domacin: 'Pera', gost: 'Mika', rezultat: '4:1', datum: '03/04/2018', turnir: 'Olimijada Open', gledaj: '1'},
    {redniBroj: 10, domacin: 'Laza', gost: 'Zika', rezultat: '3:4', datum: '02/03/2018', turnir: 'Olimijada Open', gledaj: '2'},
    {redniBroj: 11, domacin: 'Toster', gost: 'Sarma', rezultat: '5:2', datum: '29/05/1991', turnir: 'Olimijada Open', gledaj: '1'},
    {redniBroj: 12, domacin: 'Summanus', gost: 'Gokunda', rezultat: '1:2', datum: '18/05/1991', turnir: 'Olimijada Open', gledaj: '2'},
    {redniBroj: 13, domacin: 'Gokunda', gost: 'SuperMario', rezultat: '3:1', datum: '03/10/1998', turnir: 'Olimijada Open', gledaj: '1'}

];
