import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-pocetna',
    templateUrl: './pocetna.component.html',
    styleUrls: ['./pocetna.component.css']
})

export class PocetnaComponent implements OnInit
{
    constructor(public translate: TranslateService, public cookieService: CookieService) { }

	ngOnInit()
	{
    }
}
