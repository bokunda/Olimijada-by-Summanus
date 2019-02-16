
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { PitanjeOdgovor } from '../../modeli/PitanjeOdgovor';
import { AdminService } from '../../servisi/admin.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTable } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import swal from "sweetalert2";
import { AzurirajFaqComponent } from '../azuriraj-faq/azuriraj-faq.component';
import { MatSnackBar, MatDialog} from '@angular/material';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})

export class FaqComponent implements OnInit
{
	constructor
	(
		public adminService: AdminService,
		public dialog: MatDialog
	) {  }

	pitanjaIOdgovori: PitanjeOdgovor[] = [];
	dataSource;
	displayedColumns = ['pitanje', 'odgovor', 'obrisi', 'izmeni'];

	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild('table') table: MatTable<any>;

	applyFilter(filterValue: string)
	{
		filterValue = filterValue.trim(); // Remove whitespace
		filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
		this.dataSource.filter = filterValue;
	}

	public pitanje = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9\?]{1,}")]);
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

	ngOnInit()
	{
		this.adminService.DajSvaPitanjaIOdgovore().subscribe(odgovor =>
		{
			this.pitanjaIOdgovori = odgovor;

			//console.log("Sva pitanja i odgovori:");
			//console.log(this.pitanjaIOdgovori);

			this.dataSource = new MatTableDataSource(this.pitanjaIOdgovori);
			this.dataSource.sort = this.sort;
			this.dataSource.paginator = this.paginator;
		});
	}

	IzmeniFAQ(po: PitanjeOdgovor): void
	{
		let dialogRef = this.dialog.open(AzurirajFaqComponent, {
			width: '1000px',
			data:
			{
				po: po
			}
		});
	}

	DodajFAQ(): void
	{
		if (this.pitanje.valid && this.htmlContent.length > 0)
		{
			let po = new PitanjeOdgovor();
			po.pitanje = this.pitanje.value;
			po.odgovor = this.htmlContent;

			this.adminService.DodajFaq(po).subscribe(odgovor =>
			{
				//console.log(odgovor);

				if (odgovor != -1)
				{
					swal
					({
						type: 'success',
						title: 'Uspešno dodato pitanje FAQ!',
						showConfirmButton: true,
						timer: 2600
					});
				}
				else
				{
					swal
					({
						type: 'error',
						title: 'Nije uspelo dodavanje!',
						timer: 2600
					});
				}
			});
		}
	}

	ObrisiPitanje(po : PitanjeOdgovor): void
	{
		//console.log("Obrisi");
		//console.log(po);

		this.adminService.ObrisiPitanje(po).subscribe(odgovor =>
		{
			//console.log("Odgovor od servera za brisanje pitanja FAQ:");
			//console.log(odgovor);

			if (odgovor != -1)
			{
				swal
				({
					type: 'success',
					title: 'Pitanje je obrisano!',
					showConfirmButton: true,
					timer: 2600
				});
			}
			else
			{
				swal
				({
					type: 'error',
					title: 'Pitanje nije uspešno obrisano!',
					showConfirmButton: true,
					timer: 2600
				});
			}
		});
	}

	greskaPitanje(): string
	{
		return this.pitanje.hasError("required") ?
		"Morate da unesete pitanje!" :
		this.pitanje.hasError("pattern") ? "Pitanje može da sadrži samo slova i brojeve!" : "";
	}

	/*
	greskaOdgovor(): string
	{
		return this.odgovor.hasError("required") ?
		"Morate da unesete odgovor!" :
		this.odgovor.hasError("pattern") ? "Odgovor može da sadrži samo slova i brojeve!" : "";
	}
	*/
}
