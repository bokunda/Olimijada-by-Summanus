import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import swal from "sweetalert2";
import { MAT_DIALOG_DATA } from '@angular/material';
import { Igra } from '../../modeli/Igra';
import { PravilaService } from '../../servisi/pravila.service';
import { shallowEqual } from '@angular/router/src/utils/collection';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-izmena-igara',
	templateUrl: './izmena-igara.component.html',
	styleUrls: ['./izmena-igara.component.css']
})
export class IzmenaIgaraComponent implements OnInit {

	constructor(
		public pravilaService: PravilaService,
		public matDialogRef: MatDialogRef<IzmenaIgaraComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	)
	{}

	odabranaIgra;
	naziv: FormControl;
	nazivIgre;
	htmlContent;
	slikaIgre;
	slikaZaUpload: File;
	pozadinaZaUpload: File;
	pozadinaTimovaZaUpload: File;

	editorConfig =
	{
		"editable": true,
		"spellcheck": true,
		"height": "200px",
		"minHeight": "200px",
		"width": "auto",
		"minWidth": "0",
		"translate": "yes",
		"enableToolbar": true,
		"showToolbar": true,
		"url": environment.serverUrl+"/upload/slike/",
		"placeholder": "Enter text here...",
		// environment.serverUrl+'/uploadSlikeIzEditora
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

	ngOnInit()
	{

		this.odabranaIgra = this.data;

		this.nazivIgre = this.odabranaIgra.naziv;
		this.naziv = new FormControl('',[Validators.required, Validators.pattern('[a-zA-z0-9\ \u0110\u0111\u0106\u0107\u010c\u010d\u017d\u017e\u0160\u0161]{1,}'), Validators.minLength(1)]);
		this.naziv.setValue(this.nazivIgre);
		this.naziv.disable();


		this.htmlContent = this.odabranaIgra.pravila;
		this.slikaIgre = environment.serverUrl + 'upload/slike/igre/' + this.odabranaIgra.nazivSlike;
		//console.log(this.slikaIgre);

		//console.log(this.odabranaIgra);

		/*
		this.pravilaService.UzmiPodatkeOIgri(this.data.id).subscribe(igra =>
		{
			if (igra == 0)
			{
				swal ({
					type: 'info',
					title: 'Odabrana igra ne postoji!',
					timer: 2600,
					showConfirmButton: false
				})
			}
			else if (igra == -1)
			{
				swal ({
					type: 'error',
					title: 'GREŠKA: Pokušajte ponovo!',

				})
			}
			else
			{
				/*
				this.odabranaIgra = igra;
				this.nazivIgre = igra.naziv;

				///this.naziv = new FormControl('',[Validators.required, Validators.pattern('[a-bA-b0-9" "]'), Validators.minLength(1)]);
				//this.htmlContent = this.odabranaIgra.pravila;
				//

				this.naziv.setValue(igra.naziv);
			}
		});
		*/
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

	greske()
	{
		//console.log(this.naziv.errors)
	}

	IzmeniIgru(): void
	{
		if (this.htmlContent != "")
		{
			this.odabranaIgra.naziv = this.naziv.value;


			this.odabranaIgra.pravila = this.htmlContent;



			// slika igre
			if (this.slikaZaUpload == undefined)
			{
				this.slikaZaUpload = null;
			}

			// pozadina
			if (this.pozadinaZaUpload == undefined)
			{
				this.pozadinaZaUpload = null;
			}

			if (this.pozadinaTimovaZaUpload == undefined)
			{
				this.pozadinaTimovaZaUpload = null;
			}

			this.pravilaService.IzmeniIgru(this.odabranaIgra,this.slikaZaUpload,this.pozadinaZaUpload,this.pozadinaTimovaZaUpload).subscribe(odg =>
			{
				if (odg == 1)
				{
					swal(
						{
							type:'success',
							title: 'Igra je uspešno promenjena!',
							timer: 2600,
							showConfirmButton: false
						}
					)

					this.matDialogRef.close(this.odabranaIgra);
				}
				else
				{
					swal ({
						type: 'error',
						title: 'GREŠKA: Pokušajte ponovo!'
					})
				}
			});



		}
		else
		{
			swal(
				{
					type:'error',
					title: 'Opis slike ne sme biti prazan!'
				}
			)
		}
	}
}

/*
export class IzmenaIgaraComponent implements OnInit
{
	  constructor(
		  public pravilaService: PravilaService,
			private dialog: MatDialogRef<IzmenaIgaraComponent>,
			@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit()
	{
		/*
		this.nijeOdabranFajl = false;
		this.slikaZaUpload = null;
		this.uspesno = false;
		this.neuspesno = false;
		this.postojiUnetaIgra = false;

		//console.log(this.data);

		this.izabranaIgraZaIzmenu = this.data;

		this.nazivIgre = this.data.naziv;
		this.htmlContent = this.data.pravila;

		this.nazivSlike = this.data.nazivSlike;
		this.nazivSlike = this.nazivSlike.slice(this.nazivSlike.lastIndexOf('/') + 1, this.nazivSlike.length);


		this.pravilaService.UzmiPodatkeOIgri(this.data).subscribe(igra =>
		{
			if (igra == 0)
			{
				swal ({
					type: 'info',
					title: 'Odabrana igra ne postoji!',
					timer: 2600,
					showConfirmButton: false
				})
			}
			else if (igra == -1)
			{
				swal ({
					type: 'error',
					title: 'GREŠKA: Pokušajte ponovo!',

				})
			}
			else
			{
				this.nijeOdabranFajl = false;
				this.slikaZaUpload = null;

				this.izabranaIgraZaIzmenu = igra;

				this.nazivIgre = igra.naziv;
				this.htmlContent = igra.pravila;

				this.nazivSlike = igra.nazivSlike;
			}
		});
	}

	htmlContent = "";

	editorConfig =
	{
		"editable": true,
		"spellcheck": true,
		"height": "200px",
		"minHeight": "200px",
		"width": "auto",
		"minWidth": "0",
		"translate": "yes",
		"enableToolbar": true,
		"showToolbar": true,
		"url": environment.serverUrl+"/upload/slike/",
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

	naziv = new FormControl(this.data.naziv, [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9]{1,}")]);

	@ViewChild('fajlUpload') fajl;

	nazivIgre: string;
	nazivSlike: string;

	izabranaIgraZaIzmenu;
	uspesno: boolean;
	neuspesno: boolean;
	postojiUnetaIgra: boolean;
	nijeOdabranFajl: boolean;
	slikaZaUpload: File; // uneti fajl

	IzmeniIgru(event): void
	{
		/*
		if (this.naziv.value.length > 0) // naziv igre je izmenjen
		{
			this.nazivIgre = this.naziv.value;
		}
		//
		/*
		// ulazimo u proceduru izmene igre, samo ukoliko je nesto stvarno promenjeno
		if (this.nazivIgre != this.izabranaIgraZaIzmenu.naziv ||
			this.htmlContent != this.data.pravila ||
			this.slikaZaUpload != null)
		{
		//

		if (this.htmlContent.length > 0) // polje za opis igre nije prazno
		{
			//console.log("usao u f-ju za izmenu igre!");

			let i : Igra = new Igra();

			i.id = this.izabranaIgraZaIzmenu.id;
			i.naziv = this.naziv.value;
			i.fajlSlika = this.izabranaIgraZaIzmenu.nazivSlike.slice(this.izabranaIgraZaIzmenu.nazivSlike.lastIndexOf('/') + 1, this.izabranaIgraZaIzmenu.nazivSlike.length);
			i.pravila = this.htmlContent;
			i.pozadina = ""; // za sada ne menjamo pozadinu
			//console.log(i.fajlSlika);

			this.pravilaService.IzmeniIgru(i, this.slikaZaUpload).subscribe(odgovor =>
			{
				if (odgovor == -1)
				{
					// obavestenje za gresku
					swal
					({
						type:'error',
						title: 'GREŠKA: Pokušajte ponovo!'
					});
				}
				else
				{
					// obavestenje za uspesno azuriranje
					swal
					({
						type: 'success',
						timer: 2600,
						title : 'Igra je uspešno izmenjena!'
					});

					this.dialog.close(); // zatvaramo prozor za izmenu igre
				}
			});
		}
		/*
		}
		else
		{
			// upozorenje da korisnik nije izmenio nijedan podatak
			swal
			({
				type: 'warning',
				timer: 2600,
				title: "Niste uneli izmenu ni za jedan podatak!"
			});

			this.dialog.closeAll();
		}
		//
	}

	PostaviFajl(event): void
	{
		// //console.log(event);
		let files = event.target.files;

		if (files.length > 0)
		{
			this.slikaZaUpload = files[0];
			this.nazivSlike = this.slikaZaUpload.name;
		}
	}

	/*
	// vraćamo poruku ako korisnik nije uneo ništa u polje za naziv igre
	// i ukoliko nije uneo samo slova i brojeve

	greskaNazivIgre(): string
	{
		return this.naziv.hasError("required") ?
		"Morate da unesete naziv igre!" :
		this.naziv.hasError("pattern") ? "Naziv igre može da sadrži samo slova i brojeve!" : "";
	}
	//
}
*/
