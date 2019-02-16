import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-botovi',
  templateUrl: './botovi.component.html',
  styleUrls: ['./botovi.component.css']
})
export class BotoviComponent implements OnInit {
    noviBot: any;

    constructor( public translate: TranslateService,
		private cookieService: CookieService ) { }

    ngOnInit() {
    }

    NakonDodavanja(bot: any): void
    {
        this.noviBot = bot;
    }


}
