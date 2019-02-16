import {Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatTableDataSource} from '@angular/material';
import {AuthService} from '../../servisi/auth.service';
import {KorisnikService} from '../../servisi/korisnik.service';
import {StatistikaService} from '../../servisi/statistika.service';
import {Korisnik} from '../../modeli/Korisnik';
import {forEach, last} from '@angular/router/src/utils/collection';
import {environment} from "../../../environments/environment";

import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LastFive } from '../../modeli/LastFive';

@Component({
  selector: 'app-prikaz-korisnika',
  templateUrl: './prikaz-korisnika.component.html',
  styleUrls: ['./prikaz-korisnika.component.css']
})
export class PrikazKorisnikaComponent implements OnInit {

    displayedColumns = ['pozicija', 'username', 'pobedaPorazi', 'kontrole'];
    korisnici: Korisnik[];
    dataSource: MatTableDataSource<Korisnik>;
    Math: any;

    darkMode = false;

    prvi: Korisnik;
    drugi: Korisnik;
	treci: Korisnik;

	ukupanBrojPobedaPoMesecima: any[];
	ukupaBrojPorazaPoMesecima: any[];
	brojOsvojenihTurniraPoMesecima: any[];

    username;
	lastFive: LastFive[] = [];
    ruta;

    constructor(
        public authService: AuthService,
		public korisnikService: KorisnikService,
		public statistikaService: StatistikaService,
		public translate: TranslateService,
		private cookieService: CookieService
    ) { }

    ngOnInit()
    {
        this.korisnikService.temaPromenjena.subscribe(odg =>
        {
            if(odg == true)
            {
                this.darkMode = true;
            }
            else
            {
                this.darkMode = false;
            }
            /*
            if(this.darkMode == false)
            {
                this.darkMode = true;
            }
            else
            {
                this.darkMode = false;
            }
            */
        });

        this.ruta = environment.serverUrl;

       this.dataSource = new MatTableDataSource<Korisnik>(this.korisnici);
       this.Math = Math;
       this.username = localStorage.getItem('username');

        this.korisnikService.UzmiSveKorisnike().subscribe(odg =>
        {
            this.korisnici = odg;
            //console.log(JSON.stringify(this.korisnici), this.korisnici, 1991);
            this.prvi = this.korisnici.shift();
            this.drugi = this.korisnici.shift();
            this.treci = this.korisnici.shift();

			for(var i = 0; i < this.korisnici.length; i++)
			{
				let pom = new LastFive();
				pom.mecevi = [];

				pom.username = this.korisnici[i].username;

				//console.log("aaa:" + this.korisnici[i]);
				this.korisnici[i].nizPet = [];

				this.korisnikService.UzmiSveMatches2(pom.username).subscribe(niz =>
				{
					//console.log(niz);
					var duzina;
					if(niz.length > 5)
					{
						duzina = 5;
					}
					else
					{
						duzina = niz.length;
					}



					for(var j = 0; j < duzina; j++)
					{
						//console.log(niz[j]);
						pom.mecevi.push(niz[j]);
						//this.korisnici[i].nizPet.push(niz[j]);

						if(j == duzina - 1)
						{
							this.lastFive.push(pom);
						}
					}


				});

				//this.korisnici[i].nizPet = this.lastFive[i].mecevi;

				if(i == this.korisnici.length - 1)
				{
				}
			}

			this.dataSource = new MatTableDataSource(this.korisnici);
			//this.dataSource.paginator = this.paginator;
		});

        this.dajFormuZaKorisnika('bokunda');
    }

    dajFormuZaKorisnika(usernameKorisnika)
    {
        //this.korisnikService.DajFormu(usernameKorisnika).subscribe(odg =>
        //{
        //    //console.log(odg);
        //    return odg;
        //});
    }


    //@ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ngAfterViewInit() {

    }

}

/*
export interface Element {
    slika: string;
    pozicija: number;
    username: string;
    imePrezime: string;
    pobedaPorazi: string;
    nivo: number;
}

const ELEMENT_DATA: Element[] = [

    {slika: 'https://scontent-lga3-1.cdninstagram.com/vp/afb5661790346ceeb230a2d65d4b44f5/5B6F925F/t51.2885-15/e35/20347506_110241939636444_3709774441392111616_n.jpg?ig_cache_key=MTU2NTM1NDcwMzA5NTkzNTgyNw%3D%3D.2', pozicija: 4, username: 'Pajo36Soma', imePrezime: 'Nikola Pajovic', pobedaPorazi: '93/15', nivo: 27},
    {slika: 'https://assets.vg247.com/current//2017/07/crash_bandicoot_n_sane_trilogy.jpg', pozicija: 5, username: 'Jeca', imePrezime: 'Jelena Čolić', pobedaPorazi: '92/23', nivo: 11},
    {slika: 'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/35/358943c5e3a61442b37927d9b76cdd3c07f4d6c2_full.jpg', pozicija: 6, username: 'Davicko', imePrezime: 'David Aničić', pobedaPorazi: '91/14', nivo: 7},
    {slika: 'http://www.emoticonswallpapers.com/avatar/gamesicons/SAW%20-%20TheGame_3.png', pozicija: 4, username: 'Pajo36Soma', imePrezime: 'Nikola Pajovic', pobedaPorazi: '93/15', nivo: 27},
    {slika: 'http://static.wixstatic.com/media/ae4641_50c330bde056d070913ca82b824564bf.png/v1/fill/w_346,h_346,al_c,usm_0.66_1.00_0.01/ae4641_50c330bde056d070913ca82b824564bf.png', pozicija: 6, username: 'Davicko', imePrezime: 'David Aničić', pobedaPorazi: '91/14', nivo: 7},
    {slika: 'https://i.pinimg.com/236x/ed/97/a8/ed97a86421ac763469ed070e33f72c1e--fun-games-avatar.jpg', pozicija: 7, username: 'Bokunda', imePrezime: 'Bojan Piskulić', pobedaPorazi: '17/13', nivo: 6},
    {slika: 'http://s01.riotpixels.net/data/80/89/808902f0-e088-425f-bdd7-8cb341c9e83d.jpg/avatar.witcher-3-wild-hunt.600x600.2014-06-08.285.jpg', pozicija: 4, username: 'Pajo36Soma', imePrezime: 'Nikola Pajovic', pobedaPorazi: '93/15', nivo: 27},
    {slika: 'https://avatarfiles.alphacoders.com/757/75705.jpg', pozicija: 5, username: 'Jeca', imePrezime: 'Jelena Čolić', pobedaPorazi: '92/23', nivo: 11},
    {slika: 'https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/15073535_10207572959738598_7246020639017321484_n.jpg?_nc_cat=0&oh=514f942048ef10876ed3ee6a2469ee9f&oe=5B98DA0D', pozicija: 6, username: 'Davicko', imePrezime: 'David Aničić', pobedaPorazi: '91/14', nivo: 7},
    {slika: 'https://i1.wp.com/dumbosdiary.com/wp-content/uploads/2017/04/The-minecraft_digital_gaming_avatar.jpg?fit=600%2C600&ssl=1', pozicija: 7, username: 'Bokunda', imePrezime: 'Bojan Piskulić', pobedaPorazi: '17/13', nivo: 6},
    {slika: 'https://www.own3d.tv/wp-content/uploads/2017/12/avatarmaker-product-thumbs-magdalena-2.gif', pozicija: 4, username: 'Pajo36Soma', imePrezime: 'Nikola Pajovic', pobedaPorazi: '93/15', nivo: 27},
    {slika: 'https://powerlevelingturtle.files.wordpress.com/2011/08/mass-effect-3-wallpaper-female-shepard-blonde-646x3251.jpg', pozicija: 5, username: 'Jeca', imePrezime: 'Jelena Čolić', pobedaPorazi: '92/23', nivo: 11},
    {slika: 'https://vignette.wikia.nocookie.net/dragonballfanon/images/1/15/82718-cooler.jpg/revision/latest?cb=20160924231405&path-prefix=es', pozicija: 6, username: 'Davicko', imePrezime: 'David Aničić', pobedaPorazi: '91/14', nivo: 7},
    {slika: 'https://yt3.ggpht.com/a-/AJLlDp3pDQMFfJwDmdDpTWMfrFhDUmrpY-Xy6sagUw=s900-mo-c-c0xffffffff-rj-k-no', pozicija: 7, username: 'Bokunda', imePrezime: 'Bojan Piskulić', pobedaPorazi: '17/13', nivo: 6},
    {slika: 'http://www.toask.ru/upload/main/9a8/avatarka.jpg', pozicija: 4, username: 'Pajo36Soma', imePrezime: 'Nikola Pajovic', pobedaPorazi: '93/15', nivo: 27},
    {slika: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTen9vwjQg1lwQlTrTJcm7_qAYLwuxDJrTSLyC-umSQ8WB8OLkf', pozicija: 5, username: 'Jeca', imePrezime: 'Jelena Čolić', pobedaPorazi: '92/23', nivo: 11},
    {slika: 'http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-2.png', pozicija: 6, username: 'Davicko', imePrezime: 'David Aničić', pobedaPorazi: '91/14', nivo: 7},
    {slika: 'https://static.gamespot.com/uploads/original/mig/6/1/7/1/2236171-Payday2_37011_screen.jpg', pozicija: 7, username: 'Bokunda', imePrezime: 'Bojan Piskulić', pobedaPorazi: '17/13', nivo: 6},
    {slika: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/04/042af6e6701449d44ee919b59f0ff18cc8f3d288_full.jpg', pozicija: 4, username: 'Pajo36Soma', imePrezime: 'Nikola Pajovic', pobedaPorazi: '93/15', nivo: 27},
    {slika: 'http://gamegeex.blogomancer.com/files/gamegeex/images/Avatars/street-fighter-avatar-4.png', pozicija: 5, username: 'Jeca', imePrezime: 'Jelena Čolić', pobedaPorazi: '92/23', nivo: 11},
    {slika: 'https://tse3.mm.bing.net/th?id=OIP.CgkdY_zCN4F0Go6Uc_WIzAHaHa&w=190&h=190&c=8&o=5&pid=1.7', pozicija: 6, username: 'Davicko', imePrezime: 'David Aničić', pobedaPorazi: '91/14', nivo: 7},
    {slika: 'https://wordswithfriendsedu.com/assets/player_guide/avatar_03_dog.png', pozicija: 7, username: 'Bokunda', imePrezime: 'Bojan Piskulić', pobedaPorazi: '17/13', nivo: 6}
];
*/
