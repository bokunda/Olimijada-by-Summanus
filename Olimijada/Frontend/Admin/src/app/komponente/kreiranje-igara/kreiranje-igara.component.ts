import {Component, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {PravilaService} from '../../servisi/pravila.service';
import {AdminService} from '../../servisi/admin.service';
import {MatSnackBar} from '@angular/material';
import swal from 'sweetalert2';
import {Igra} from '../../modeli/Igra';
import { FormControl, Validators } from '@angular/forms';

@Component
({
  selector: 'app-kreiranje-igara',
  templateUrl: './kreiranje-igara.component.html',
  styleUrls: ['./kreiranje-igara.component.css']
})

export class KreiranjeIgaraComponent implements OnInit
{
	constructor( public adminService: AdminService,
				public pravilaService: PravilaService, public snackBar: MatSnackBar) { }

	openSnackBar(message: string, action: string)
	{
		this.snackBar.open(message, action, { duration: 2000 });
	}

	htmlContent = "";

	editorConfig =
		{
		"editable": true,
		"spellcheck": true,
		"height": "300px",
		"minHeight": "0",
		"width": "auto",
		"minWidth": "0",
		"translate": "yes",
		"enableToolbar": true,
		"showToolbar": true,
		"url": "http://localhost:8080/upload/slike/",
		"placeholder": "Enter text here...",
		"imageEndPoint": "",
		"toolbar":
			[
			["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
			["fontName", "fontSize", "color"],
			["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
			["cut", "copy", "delete", "removeFormat", "undo", "redo"],
			["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
			["link", "unlink", "image", "video"],
			["code"]
			]
		}


	tipIgre: string;

	// kontrole za unos potrebnih podataka
	naziv = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);
	brojIgraca = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);
	brojUloga = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);

	nazivUloge = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9]{1,}")]);
	brojIgracaUloge = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);

	nizUloga: number[] = [];
	nizKontrolaUlogaNaziv: FormControl[] = [];
	nizKontrolaUlogaBroj: FormControl[] = [];

	//@ViewChild('fajlUpload') fajl;

	uspesno: boolean;
	neuspesno: boolean;
	postojiUnetaIgra: boolean;
	nijeOdabranFajl: boolean;
	slikaZaUpload: File; // uneti fajl
	pozadinaZaUpload: File;
	pozadinaTimovaZaUpload: File;

	ngOnInit()
	{
		this.nijeOdabranFajl = false;
		this.slikaZaUpload = null;
		this.pozadinaTimovaZaUpload = null
		this.pozadinaZaUpload = null;
		this.uspesno = false;
		this.neuspesno = false;
		this.postojiUnetaIgra = false;
	}

	stampajtip(): void
	{
		//console.log(this.tipIgre);
	}

	napraviNizZaFormu(): void
	{
		// ne znam zasto mora i null i [], drugacije ne radi...

		this.nizUloga = null;
		this.nizUloga = [];

		this.nizKontrolaUlogaNaziv = null;
		this.nizKontrolaUlogaNaziv = [];

		this.nizKontrolaUlogaBroj = null;
		this.nizKontrolaUlogaBroj = [];

		let i;
		for (i = 0; i < this.brojUloga.value; i++) {
			this.nizUloga[i] = i;
			this.nizKontrolaUlogaNaziv[i] = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);
			this.nizKontrolaUlogaBroj[i] = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);
		}
	}

	napraviJSON(): string
	{
		let json = '';
		let i;

		json += '{';
		json += ' "nazivIgre" : "' + this.naziv.value + '",';
		json += ' "brojIgraca" : "' + this.brojIgraca.value + '",';
		json += ' "brojUloga" : "' + this.brojUloga.value + '",';
		json += ' "uloge" : [';
		for(i = 0; i < this.brojUloga.value; i++)
		{
		json += '{';

		json += ' "nazivUloge" : "' + this.nizKontrolaUlogaNaziv[i].value + '",';
		json += ' "brojIgracaUloge" : "' + this.nizKontrolaUlogaBroj[i].value + '"';

		if(i == this.brojUloga.value - 1)
		{
			json += '}';
		}
		else
		{
			json += '},';
		}
		}

		json += ']';
		json += '}';

		return json;
	}

	// dodavanje NOVE timske igre
	DodajIgru(): void
	{

    	// ako je izabran fajl sa pravilima
		// i unet je pravilan naziv za igru
		if (this.naziv.valid == true && this.htmlContent != '' && this.tipIgre != null)
		{
			let igra: Igra = new Igra(); // nova igra

			igra.pravila = this.htmlContent;

			if(this.tipIgre == '1')
			{
				igra.timska = 1;
				igra.timskaUloge = this.napraviJSON();
			}
			else
			{
				igra.timska = 0;
				igra.timskaUloge = null;
			}

			igra.naziv = this.naziv.value;

			if (this.slikaZaUpload != null)
			{
				let ekstenzija = this.slikaZaUpload.name.slice(this.slikaZaUpload.name.lastIndexOf('.'),this.slikaZaUpload.name.length);
				igra.nazivSlike = igra.naziv + ekstenzija;
				//console.log(igra.nazivSlike);
			}
			else
			{
				igra.nazivSlike = null;
			}

			if (this.pozadinaZaUpload != null)
			{
				let ekstenzija = this.pozadinaZaUpload.name.slice(this.pozadinaZaUpload.name.lastIndexOf('.'),this.pozadinaZaUpload.name.length);
				igra.pozadina = igra.naziv+ekstenzija;
			}
			else
			{
				igra.pozadina = null;
			}

			if (this.pozadinaTimovaZaUpload != null)
			{
				let ekstenzija = this.pozadinaTimovaZaUpload.name.slice(this.pozadinaTimovaZaUpload.name.lastIndexOf('.'),this.pozadinaTimovaZaUpload.name.length);
				igra.pozadinaTimovi = igra.naziv+ekstenzija;
			}
			else
			{
				igra.pozadinaTimovi = null;
			}

			this.pravilaService.DodajIgru(igra, this.slikaZaUpload,this.pozadinaZaUpload,this.pozadinaTimovaZaUpload).subscribe(odg =>
			{
				if (odg.status == 1)
				{
					swal({
						type: 'success',
						title: 'Igra je uspešno kreirana!',
						timer: 2600,
						showConfirmButton: false
					})

					igra.id = odg.id;
					this.pravilaService.dodataIgra.emit(igra);

					this.ResetujFormu();

				}
				else if (odg.status == -1)
				{
					swal({
						type: 'error',
						title: 'GREŠKA: Pokušajte ponovo!'
					})
				}
				else if (odg.status == 0)
				{
					swal ({
						type: 'info',
						title: 'Igra sa tim nazivom već postoji!',
						showConfirmButton:false,
						timer: 2600
					})
				}
			});


		}
		else // nije dodat fajl
		{
			swal({
				type: 'error',
				title: 'Morate uneti naziv, opis i tip igre!'
			})

		}
	}

	ResetujFormu(): void
	{
		//this.naziv.reset('');
		this.naziv = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}")]);
		//this.brojIgraca = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);
		//this.brojUloga = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);

		this.nijeOdabranFajl = false;
		this.slikaZaUpload = null;
		this.pozadinaTimovaZaUpload = null
		this.pozadinaZaUpload = null;
		this.uspesno = false;
		this.neuspesno = false;
		this.postojiUnetaIgra = false;

		this.htmlContent = '';
		this.tipIgre = null;
	}

	PostaviFajl(event,flag): void
	{
		// //console.log(event);
		let files = event.target.files;

		if (files.length > 0)
		{
			if (flag == 1)
			{
				this.slikaZaUpload = files[0];
			}
			else if (flag == 2)
			{
				this.pozadinaZaUpload = files[0];
			}
			else
			{
				this.pozadinaTimovaZaUpload = files[0];
			}

		}
	}

  // vraćamo poruku ako korisnik nije uneo ništa u polje za naziv igre
  // i ukoliko nije uneo samo slova i brojeve
	greskaNazivIgre(): string
	{
		return this.naziv.hasError("required") ?
		"Morate da unesete naziv igre!" :
		this.naziv.hasError("pattern") ? "Naziv igre može da sadrži samo slova i brojeve!" : "";
	}

	greskaBrojIgraca(): string
	{
		return this.brojIgraca.hasError("required") ?
		"Morate uneti broj igrača!" :
		this.brojIgraca.hasError("pattern") ? "Uneta vrednost mora biti pozitivan broj!" : "";
	}

	greskaBrojUloga(): string
	{
		return this.brojUloga.hasError("required") ?
		"Morate uneti broj uloga!" :
		this.brojUloga.hasError("pattern") ? "Uneta vrednost mora biti pozitivan broj!" : "";
	}

	greskaNazivUloge(): string
	{

		return this.nazivUloge.hasError("required") ?
		"Morate da unesete naziv igre!" :
		this.nazivUloge.hasError("pattern") ? "Naziv igre može da sadrži samo slova i brojeve!" : "";
	}

	greskaBrojIgracaUloge(): string
	{
		return this.brojIgracaUloge.hasError("required") ?
		"Morate uneti broj igrača za izabranu ulogu!" :
		this.brojIgracaUloge.hasError("pattern") ? "Uneta vrednost mora biti pozitivan broj!" : "";
	}

}
