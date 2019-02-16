import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocetnaComponent } from '../komponente/pocetna/pocetna.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistracijaComponent } from '../komponente/registracija/registracija.component';
import { TurniriComponent } from '../komponente/turniri/turniri.component';
import { AuthGuardService } from '../servisi/auth-guard.service';
import { KreiranjeIgaraComponent } from '../komponente/kreiranje-igara/kreiranje-igara.component';
import { EmailComponent } from '../komponente/email/email.component';
import { PrijavaComponent } from '../komponente/prijava/prijava.component';
import  {PrikazTurniraComponent } from '../komponente/prikaz-turnira/prikaz-turnira.component';
import { PrikazKorisnikaComponent } from '../komponente/prikaz-korisnika/prikaz-korisnika.component';
import { PrikazMecevaZaTurnirComponent } from "../komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component";
import { FaqComponent } from '../komponente/faq/faq.component';
import { PrikazAdminaComponent } from '../komponente/prikaz-admina/prikaz-admina.component';
import {IgreComponent} from '../komponente/igre/igre.component';
import { Strana404Component } from '../komponente/strana-404/strana-404.component';
import {ZaTurnireComponent} from '../komponente/za-turnire/za-turnire.component';
import {KreiranjeTimskeIgreComponent} from '../komponente/kreiranje-timske-igre/kreiranje-timske-igre.component';

const routes: Routes =
    [
      { path: '', redirectTo: '/prijava', pathMatch: 'full' },
      { path: 'prijava', component: PrijavaComponent, canActivate: [ AuthGuardService ] },
      { path: 'pocetna', component: PocetnaComponent, canActivate: [ AuthGuardService ] },
      // { path: 'turniri', component: TurniriComponent, canActivate: [ AuthGuardService ] },
      // { path: 'kreiranje-igara', component:  KreiranjeIgaraComponent, canActivate: [AuthGuardService]},
      { path: 'dodajAdmina', component: PrikazAdminaComponent, canActivate: [ AuthGuardService ] },
      { path: 'slanjeMejla', component: EmailComponent },
      // { path: 'prikaz-turnira', component: PrikazTurniraComponent },
      { path: 'prikazKorisnika', component: PrikazKorisnikaComponent },
      { path: 'prikaz-meceva-za-turnir', component: PrikazMecevaZaTurnirComponent },
      { path: 'faq', component: FaqComponent, canActivate: [ AuthGuardService ] },
      { path: 'igre', component: IgreComponent, canActivate: [AuthGuardService]},
      { path: 'turniri', component: ZaTurnireComponent, canActivate: [AuthGuardService]},
      { path: 'kreiraj-timsku-igru', component: KreiranjeTimskeIgreComponent, canActivate: [AuthGuardService]},
      { path: '**', component: Strana404Component }
	];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
