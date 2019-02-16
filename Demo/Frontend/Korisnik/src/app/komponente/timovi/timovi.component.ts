import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-timovi',
  templateUrl: './timovi.component.html',
  styleUrls: ['./timovi.component.css']
})
export class TimoviComponent implements OnInit
{
  constructor(
	public translate: TranslateService,
	private cookieService: CookieService) { }

  ngOnInit()
  {
  }
}
