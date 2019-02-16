import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { PitanjeOdgovor } from '../../modeli/PitanjeOdgovor';
import { AdminService } from '../../servisi/admin.service';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatTable } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import swal from "sweetalert2";
import { AzurirajFaqComponent } from '../azuriraj-faq/azuriraj-faq.component';
import { MatSnackBar, MatDialog} from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

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
		public dialog: MatDialog,
		private translate: TranslateService,
		private cookieService: CookieService
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
				if (odgovor.status != -1)
				{
					po.id = odgovor.id;
					this.pitanjaIOdgovori.push(po);
					this.dataSource.data = this.pitanjaIOdgovori;

					if (this.cookieService.get("language") == "sr")
						swal
						({
							type: 'success',
							title: 'Uspešno dodato pitanje!',
							showConfirmButton: true,
							timer: 2600
						});
					else
						swal
						({
							type: 'success',
							title: 'Question added successfully!',
							showConfirmButton: true,
							timer: 2600
						});
				}
				else
				{
					if (this.cookieService.get("language") == "sr")
						swal
						({
							type: 'error',
							title: 'Nije uspelo dodavanje!',
							timer: 2600
						});
					else
						swal
						({
							type: 'error',
							title: 'There was an error adding the question!',
							timer: 2600
						});
				}
			});
		}
	}

	ObrisiPitanje(po : PitanjeOdgovor): void
	{
		this.adminService.ObrisiPitanje(po).subscribe(odgovor =>
		{
			if (odgovor != -1)
			{

				this.pitanjaIOdgovori = this.pitanjaIOdgovori.filter(pitanje => pitanje.id != po.id);
				this.dataSource.data = this.pitanjaIOdgovori;
			
				if (this.cookieService.get("language") == "sr")
					swal
					({
						type: 'success',
						title: 'Pitanje je obrisano!',
						showConfirmButton: true,
						timer: 2600
					});
				else
					swal
					({
						type: 'success',
						title: 'Question has been deleted successfully!',
						showConfirmButton: true,
						timer: 2600
					});
			}
			else
			{
				if (this.cookieService.get("language") == "sr")
					swal
					({
						type: 'error',
						title: 'Pitanje nije uspešno obrisano!',
						showConfirmButton: true,
						timer: 2600
					});
				else
					swal
					({
						type: 'error',
						title: 'Some error while deleting FAQ question!',
						showConfirmButton: true,
						timer: 2600
					});
			}
		});
	}

	greskaPitanje(): string
	{
		return this.pitanje.hasError("required") ?
		this.cookieService.get("language") == "sr" ? "Morate da unesete pitanje!" : "You need to add question!" :
		this.pitanje.hasError("pattern") ? this.cookieService.get("language") == "sr" ? "Pitanje može da sadrži samo slova i brojeve!" : "The question can contain only letters and numbers!" : "";
	}
}
