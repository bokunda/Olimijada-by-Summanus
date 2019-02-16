import {Component, OnInit, ViewChild} from '@angular/core';
import {PravilaService} from '../../servisi/pravila.service';
import {AdminService} from '../../servisi/admin.service';
import {MatSnackBar} from '@angular/material';
import swal from 'sweetalert2';
import {Igra} from '../../modeli/Igra';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-kreiranje-timske-igre',
  templateUrl: './kreiranje-timske-igre.component.html',
  styleUrls: ['./kreiranje-timske-igre.component.css']
})
export class KreiranjeTimskeIgreComponent implements OnInit
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
  naziv = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9]{1,}")]);
  brojIgraca = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);
  brojUloga = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);

  nazivUloge = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9]{1,}")]);
  brojIgracaUloge = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' '0-9]{1,}")]);

  nizUloga: number[] = [];
  nizKontrolaUlogaNaziv: FormControl[] = [];
  nizKontrolaUlogaBroj: FormControl[] = [];

  @ViewChild('fajlUpload') fajl;

  uspesno: boolean;
  neuspesno: boolean;
  postojiUnetaIgra: boolean;
  nijeOdabranFajl: boolean;
  fajlZaUpload: File; // uneti fajl

  ngOnInit()
  {
    this.nijeOdabranFajl = false;
    this.fajlZaUpload = null;
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
      this.nizKontrolaUlogaNaziv[i] = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern("[' 'a-zA-z0-9]{1,}")]);
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
    if (this.naziv.valid == true && this.fajlZaUpload != null)
    {
      let igra: Igra = new Igra(); // nova igra
      var igre: Igra[] = []; // niz igara - za proveru postojnja nove igre

      // uzimamo iz baze sve igre sa unetim imenom
      this.pravilaService.ProveriNazivIgre(this.naziv.value).subscribe(odgovor =>
      {
        igre = odgovor;

        if (igre.length == 0) // ne postoji igra sa unetim nazivom
        {
       //   igra.fajlSlika = this.fajlZaUpload.name;
          igra.naziv = this.naziv.value;
          igra.pravila = this.htmlContent;
          igra.timska = 1;
          igra.timskaUloge = this.napraviJSON();

          this.postojiUnetaIgra = false;

          // prosledjujemo servisu objekat Igra - kao novu igru i fajl koji smo ucitali
          /* this.pravilaService.DodajIgru(igra, this.htmlContent, this.fajlZaUpload).subscribe(odgovor =>
          {
            if (odgovor == 1)
            {
              this.uspesno = true;
              // this.neuspesno = false;

              swal
              ({
                type: 'success',
                title: 'Igra je uspešno kreirana!',
                showConfirmButton: false,
                timer: 2600
              });

              //this.openSnackBar('Igra je uspešno kreirana!', '');
            }
            else
            {
              this.neuspesno = true;
              // this.uspesno = false;

              swal
              ({
                type: 'error',
                title: 'Igra nije uspešno kreirana!'
              });

              //this.openSnackBar('Greška: Igra nije kreirana!', '');
            }
		  });
		  */
        }
        else // postoji igra sa unetim nazivom
        {
          this.neuspesno = true;
          // this.uspesno = false;
          this.postojiUnetaIgra = true; // postoji igra sa unetim nazivom

          swal
          ({
            type: 'error',
            title: 'Igra ' + this.naziv.value + ' već postoji!'
          });

          //this.openSnackBar("Igra sa nazivom " + this.naziv.value + " već postoji!", '');
        }
	  });

    }
    else // nije dodat fajl
    {
      if (this.fajlZaUpload == null)
      {
        this.nijeOdabranFajl = true;

        if (this.fajlZaUpload) // da ne otvara boks dijalog swal,
        // kada se klikne dugme za dodavanje fajla sa pravilima
        // jer vec pise greska "Niste odabrali fajl"
        {
          swal
          ({
            type: 'error',
            title: 'GREŠKA: Nije odabran fajl!',
          });
        }

        // this.openSnackBar('GREŠKA: Nije odabran fajl!', '');
      }
    }
  }

  PostaviFajl(event): void
  {
    // //console.log(event);
    let files = event.target.files;

    if (files.length > 0)
    {
      this.fajlZaUpload = files[0];
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
