import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

    @Input('list') list: any[];

  constructor(
	public translate: TranslateService,
	private cookieService: CookieService) { }

  ngOnInit() {
  }

}
