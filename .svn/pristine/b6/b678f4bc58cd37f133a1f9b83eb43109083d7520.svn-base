import { Component, OnInit } from '@angular/core';
import {IgraService} from '../../servisi/igra.service';
import {Igra} from '../../modeli/Igra';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {PotvrdaComponent} from '../potvrda/potvrda.component';
import {DodavanjeBotaComponent} from '../dodavanje-bota/dodavanje-bota.component';
import {ONamaComponent} from '../o-nama/o-nama.component';
import {DodavanjeBotaZaDatuIgruComponent} from '../dodavanje-bota-za-datu-igru/dodavanje-bota-za-datu-igru.component';
import {environment} from "../../../environments/environment";
import {AuthService} from "../../servisi/auth.service";

@Component({
  selector: 'app-igre',
  templateUrl: './igre.component.html',
  styleUrls: ['./igre.component.css']
})
export class IgreComponent implements OnInit {

    panelOpenState: boolean = false;

  constructor
  (
      public igreService: IgraService,
      public dialog: MatDialog,
      public authService: AuthService
  ) { }

  nizIgri: Array<Igra>;
  igraId = 0;
  timskaIgra = false;

  igraNaziv = '';
  igraPravila = '';
  ruta;

  ngOnInit() {

      this.ruta = environment.serverUrl;
      this.igreService.DajSveIgre().subscribe(odg =>
      {
          this.nizIgri = odg;
          this.prikaziOpis(1);
      });
  }

  prikaziOpis(idIgre): void
  {
      this.igraId = idIgre;

      this.igraNaziv = '' + this.nizIgri[idIgre].naziv;
      this.igraPravila = '' + this.nizIgri[idIgre].pravila;
  }

  daLiJeIgraTimska(idIgre): boolean
  {
      this.igraId = idIgre;
      //idIgre--;

      if(this.nizIgri[idIgre].timska == 1)
      {
          return this.timskaIgra = true;
      }

      return this.timskaIgra = false;
  }

  dialogDodajBota(): void
  {
      let dialogRef = this.dialog.open(DodavanjeBotaZaDatuIgruComponent, {
          width: '600px',
          data: {
              idIgre: this.igraId
          }
      });
  }
}



