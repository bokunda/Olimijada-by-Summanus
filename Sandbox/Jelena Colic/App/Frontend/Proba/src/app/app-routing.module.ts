import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PesmeComponent } from './pesme/pesme.component';
import { PlejlisteComponent } from './plejliste/plejliste.component';

const routes:Routes = [
	{ path: 'pesme', component: PesmeComponent },
	{ path: 'plejliste', component: PlejlisteComponent },
	{ path: '', redirectTo: 'pesme', pathMatch: 'full' }
];



@NgModule({
	exports: [
		RouterModule
	],
  imports: [
	CommonModule,
	RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
