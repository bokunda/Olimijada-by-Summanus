import { Component, OnInit } from '@angular/core';
import { Pesma } from '../pesma';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-pesme',
  templateUrl: './pesme.component.html',
  styleUrls: ['./pesme.component.css']
})
export class PesmeComponent implements OnInit {

	pesme: Pesma[];
	odabranaPesma: Pesma;

	constructor(private serverService: ServerService) { }

	ngOnInit() 
	{
		this.UzmiSvePesme();
	}

	UzmiSvePesme(): void
	{
		this.serverService.UzmiSvePesme().subscribe(pesme => this.pesme = pesme);
		console.log(this.pesme);
	}

	NaKlik(pesma: Pesma): void 
	{
		this.odabranaPesma = pesma;
	}

	Izmeni():void
	{
		console.log("menjam pesmu 1");
		this.serverService.IzmeniPesmu(this.odabranaPesma.rowid,this.odabranaPesma.naziv);
	} 

	Obrisi():void 
	{
		this.pesme = this.pesme.filter(p => p!==this.odabranaPesma);
		this.serverService.ObrisiPesmu(this.odabranaPesma.rowid);
		this.odabranaPesma = null;
	}

}
