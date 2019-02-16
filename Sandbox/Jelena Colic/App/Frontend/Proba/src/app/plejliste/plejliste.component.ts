import { Component, OnInit } from '@angular/core';
import { Plejlista } from '../plejlista';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-plejliste',
  templateUrl: './plejliste.component.html',
  styleUrls: ['./plejliste.component.css']
})
export class PlejlisteComponent implements OnInit {
	
	plejliste: Plejlista[];
	odabranaPlejlista: Plejlista;

	constructor(private serverService: ServerService) { }

	ngOnInit() 
	{
		this.UzmiSvePlejliste();
	}

	UzmiSvePlejliste(): void 
	{
		this.serverService.UzmiSvePlejliste().subscribe(plejliste => this.plejliste = plejliste);
	}

	NaKlik(plejlista: Plejlista): void 
	{
		this.odabranaPlejlista = plejlista;
	}

	Izmeni():void
	{
		this.serverService.IzmeniPlejlistu(this.odabranaPlejlista.rowid,this.odabranaPlejlista.naziv);
	} 

	Obrisi():void 
	{
		this.plejliste = this.plejliste.filter(p => p!==this.odabranaPlejlista);
		this.serverService.ObrisiPlejlistu(this.odabranaPlejlista.rowid);
		this.odabranaPlejlista = null;
	}

}
