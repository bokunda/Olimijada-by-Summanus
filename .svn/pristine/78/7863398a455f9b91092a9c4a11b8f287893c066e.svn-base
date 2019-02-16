import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../komponente/header/header.component';

import { ONamaComponent } from '../komponente/o-nama/o-nama.component';
import { PocetnaComponent } from '../komponente/pocetna/pocetna.component';
import { ProfilComponent } from '../komponente/profil/profil.component';
import {IzmenaProfilaComponent} from '../komponente/izmena-profila/izmena-profila.component';
import { AuthGuardService } from '../servisi/auth-guard.service';
//import { DodavanjeBotaComponent } from '../komponente/dodavanje-bota/dodavanje-bota.component';
//import { PrikazBotovaComponent } from '../komponente/prikaz-botova/prikaz-botova.component';
import { BotoviComponent } from '../komponente/botovi/botovi.component';
import {PristupComponent} from '../komponente/pristup/pristup.component';
import {IgreComponent} from '../komponente/igre/igre.component';
import { PrikazTurniraComponent } from '../komponente/prikaz-turnira/prikaz-turnira.component';
import { PrikazMecevaComponent } from '../komponente/prikaz-meceva/prikaz-meceva.component';
import { PrenosUtakmiceComponent } from '../komponente/prenos-utakmice/prenos-utakmice.component';
import {PrikazKorisnikaComponent} from '../komponente/prikaz-korisnika/prikaz-korisnika.component';
import { FaqComponent } from '../komponente/faq/faq.component';
import { Strana404Component } from '../komponente/strana-404/strana-404.component';
import {VatrometComponent} from '../komponente/vatromet/vatromet.component';
import { VerifikacijaMejlaComponent } from '../komponente/verifikacija-mejla/verifikacija-mejla.component';
import {KreiranjeTimovaComponent} from '../komponente/kreiranje-timova/kreiranje-timova.component';
import {NapraviTimComponent} from '../komponente/napravi-tim/napravi-tim.component';
import {TimoviComponent} from "../komponente/timovi/timovi.component";
import {PobedePoraziComponent} from "../komponente/chartovi/pobede-porazi/pobede-porazi.component";
import {TurnirTempRankComponent} from "../komponente/turnir-temp-rank/turnir-temp-rank.component";
import {CrtanjeKupaComponent} from "../komponente/crtanje-kupa/crtanje-kupa.component";

// mozda ovo ovde treba izmeniti
const routes: Routes =
[
    { path: '', redirectTo: '/pocetna', pathMatch: 'full' },
    { path: 'pocetna', component: PocetnaComponent },
	{ path: 'o-nama', component: ONamaComponent },
    { path: 'profil',
        children:
            [
                { path: '', component: ProfilComponent, canActivate: [ AuthGuardService ] },
                { path: ':username', component: ProfilComponent }
            ]
    },
	{ path: 'izmena-profila', component: IzmenaProfilaComponent, canActivate: [ AuthGuardService ] },
	{ path: 'botovi', component: BotoviComponent, canActivate: [ AuthGuardService ] },
    { path: 'prijava', component: PristupComponent, canActivate: [ AuthGuardService ] },
    { path: 'igre', component: IgreComponent },
	{ path: 'prikaz-turnira', component: PrikazTurniraComponent },
	{ path: 'mecevi', component: PrikazMecevaComponent, canActivate: [AuthGuardService] },
	{ path: 'prenos', children:
						[
							{ path: '', component: PrenosUtakmiceComponent },
							{ path: ':id', component: PrenosUtakmiceComponent }
						] },
	{ path: 'korisnici', component: PrikazKorisnikaComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'vatromet', component: VatrometComponent},
	{ path: 'verifikacija', children:
								[
									{ path: ':hash', component: VerifikacijaMejlaComponent}
								]
	},
	{ path: 'timovi', component: TimoviComponent, canActivate: [AuthGuardService] },
    { path: 'test', component: PobedePoraziComponent},
    { path: 'crtanje-kupa', component: CrtanjeKupaComponent },
    { path: 'turniri-temp', component: TurnirTempRankComponent },
	{ path: '**', component: Strana404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
