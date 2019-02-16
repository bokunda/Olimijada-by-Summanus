
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PitanjeOdgovor } from '../../modeli/PitanjeOdgovor';
import { FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../servisi/admin.service';
import swal from "sweetalert2";

@Component({
  selector: 'app-azuriraj-faq',
  templateUrl: './azuriraj-faq.component.html',
  styleUrls: ['./azuriraj-faq.component.css']
})

export class AzurirajFaqComponent implements OnInit
{
	constructor
	(
		public adminServis : AdminService,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<AzurirajFaqComponent>
	) { }

	selektovanoFaqPitanje: PitanjeOdgovor;

	public pitanje1 = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9\?\ \.]{5,}'), Validators.minLength(5)]);

	htmlContent = "";
	editorConfig =
	{
		"editable": true,
		"spellcheck": true,
		"height": "200px",
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

	pitanjeSadr;
	odgovorSadr;
	id;

	ngOnInit()
	{
		// pocetna inicijalizacija
		this.selektovanoFaqPitanje = this.data.po;

		//console.log("Izabrao FAQ pitanje za ažuriranje mečeva:");
		//console.log(this.selektovanoFaqPitanje);

		 this.pitanjeSadr = this.selektovanoFaqPitanje.pitanje;
		 this.htmlContent = this.selektovanoFaqPitanje.odgovor;
		 this.id = this.selektovanoFaqPitanje.id;
	}

	IzmeniFAQ(): void
	{
		this.odgovorSadr = this.htmlContent;
		if (this.pitanje1.value.length > 0) // ukoliko je pitanje izmenjeno
		{
			this.pitanjeSadr = this.pitanje1.value;
		}

		if (this.htmlContent.length > 0) // polje za odgovor nije prazno
		{
			// pravimo novo pitanje
			let po : PitanjeOdgovor = new PitanjeOdgovor();

			po.id = this.id;
			po.pitanje = this.pitanjeSadr;
			po.odgovor = this.htmlContent;

			// menjamo pitanje
			this.adminServis.IzmeniFaq(po).subscribe(odgovor =>
			{
				//console.log("Odg od servera za izmenu FAQ pitanja:");
				//console.log(odgovor);

				if (odgovor == -1)
				{
					// obavestenje za gresku
					swal
					({
						type:'error',
						timer: 2600,
						title: 'Pitanje FAQ nije uspešno izmenjeno!'
					});
				}
				else
				{
					// obavestenje za uspesno azuriranje
					swal
					({
						type: 'success',
						timer: 2600,
						title : 'Pitanje FAQ uspešno izmenjeno!'
					});

					this.dialogRef.close();
				}
			});
		}
	}

	greskaPitanje(): string
	{
		return this.pitanje1.hasError("required") ?
		"Morate da unesete pitanje!" :
		this.pitanje1.hasError("pattern") ? "Pitanje može da sadrži samo slova i brojeve!" : "";
	}
}
