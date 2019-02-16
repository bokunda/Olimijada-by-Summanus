import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-fixture-tab',
  templateUrl: './fixture-tab.component.html',
  styleUrls: ['./fixture-tab.component.css']
})
export class FixtureTabComponent implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Input('player') PLAYER: string;

  constructor(
	public translate: TranslateService,
	private cookieService: CookieService) { }

  ngOnInit() {
  }

}
