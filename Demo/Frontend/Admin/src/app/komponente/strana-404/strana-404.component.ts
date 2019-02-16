import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-strana-404',
  templateUrl: './strana-404.component.html',
  styleUrls: ['./strana-404.component.css']
})

export class Strana404Component implements OnInit
{
	constructor(translate: TranslateService) { }

	ngOnInit()
	{
	}
}
