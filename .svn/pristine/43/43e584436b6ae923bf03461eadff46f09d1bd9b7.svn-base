import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import * as Phaser from 'phaser-ce';
import { MOCK_DATA } from './mock-data';
import { TurnirService } from '../../servisi/turnir.service';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';
import { Mec } from '../../modeli/Mec';
import swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from '../../../environments/environment';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-prenos-utakmice',
	templateUrl: './prenos-utakmice.component.html',
	styleUrls: ['./prenos-utakmice.component.css']
})
export class PrenosUtakmiceComponent implements OnInit, OnDestroy {

    prikaziVatromet = false;
	game: Phaser.Game;
	krajEvent: Phaser.TimerEvent;
	krugovi: Phaser.Group;
	skaliranje: number;
	audio: Phaser.Sound;
	timer: Phaser.TimerEvent;
	brojac: number;
	mec = null;
	tokMeca;
	interval: number;
	matrica: any[][];
	fullScreen: Phaser.Button;
	fullScreenExit: Phaser.Button;
	gamePetlja: Phaser.TimerEvent;
	emitterZaVatromet: EventEmitter<any>;
	greska:boolean = false;
	nemaMeca: boolean = false;
	text1: Phaser.Text;
	text2: Phaser.Text;
	mecPoceo: boolean;
	trajanje: number;
	odgovor: any;
	tim1: Array<Phaser.Sprite>;
	tim2: Array<Phaser.Sprite>;
	lopta: Phaser.Sprite;
	physicsGroup: Phaser.Group;
	brojIgraca: number;

	json: any;

	prvi: any[];
	drugi: any[];
	loptalopta: any[];

	aktuelniTurniri = [];

	ruta;

	constructor(private turnirService: TurnirService,
				private route: ActivatedRoute,
				private router: Router,
				public translate: TranslateService,
				private cookieService: CookieService) {

	}

	init() {
		/*
		this.turnirService.UzmiSveAktuelneTurnire().subscribe(odg =>
		{
			if (odg != null && odg != undefined)
			{
				this.aktuelniTurniri = odg;
				let danasnjiDatum = Math.floor(Date.now()/1000);
				this.aktuelniTurniri = this.aktuelniTurniri.filter(t => t.datumVremePocetka <= danasnjiDatum && t.datumVremeZavrsetka >= danasnjiDatum);
				/*
				let i,j;
				for (i=0;i<this.aktuelniTurniri.length;i++)
				{
					let turnir = this.aktuelniTurniri[i];
					for (j=0;j<turnir.mecevi.length;j++)
					{
						let mec = turnir.mecevi[j];
						mec.korisnik1.bot1 = mec.korisnik1.bot1
					}
				}
				//
			}
		});
		*/
	}


	ngOnInit()
	{
		this.init();

		this.ruta = "" + environment.serverUrl;

		this.mec = null;
		this.emitterZaVatromet = new EventEmitter();

		this.emitterZaVatromet.subscribe(() => {
			this.prikaziVatromet = true;
			setTimeout(() => {
				this.prikaziVatromet = false;
			}, 10000);
		})

		this.route.params.subscribe((params: Params) =>
		{
			//console.log(("uzeto");
			if (params['id'] != undefined)
			{
				let id = +params['id'];
				//console.log("id = ",id);

				if (this.game != null && this.game.debug != null)
				{
					//console.log((" route params ");
					//console.log((this.game);
					this.game.destroy();
					this.prikaziVatromet = false;
				}


				this.turnirService.UzmiPodatkeZaPrenosMeca(id).subscribe( odgovor =>
				{
					//console.log(("odgovor stigao");
					// nije autorizovan da gleda
					if (odgovor == -1)
					{
						if(this.cookieService.get("language") == 'sr')
						{
							swal({
								type:'error',
								title:'GREŠKA: Pokušajte ponovo!'
							})
						}
						else
						{
							swal({
								type:'error',
								title:'Error: Try again later!'
							})
						}
						
					}
					else if (odgovor == 0 || odgovor.autorizovan == 0)
					{
						//console.log(odgovor);
						//console.log('nije autorizovan');
						this.router.navigate(['/prenos']);
					}
					else
					{
						// mec nije poceo
						if (odgovor.poceo == 0)
						{
							//console.log('nije poceo');
							this.mecPoceo = false;
							if(this.cookieService.get("language") == 'sr')
							{
								swal({
									type: 'info',
									title: 'Meč nije počeo',
									showConfirmButton: false,
									timer: 2600
								})
							}
							else
							{
								swal({
									type: 'info',
									title: 'The match did not start',
									showConfirmButton: false,
									timer: 2600
								})
							}
							
							// neki ng if nesto
						}
						else
						{

							this.mec = odgovor;
							//console.log((this.mec);

							////console.log((this.mec.tokMeca.trenuci);
							this.tokMeca = this.mec.tokMeca.trenuci;
							/* //console.log(("odgovor");
							//console.log((odgovor); */

							//console.log(("tok meca");
							//console.log((this.tokMeca);

							////console.log((JSON.parse(this.mec.tokMeca));

							let state = {
								preload: this.preload,
								create: this.create,
								update: this.update,
								turnirService: this.turnirService,
								DajKoordinate: this.DajKoordinate,
								mec: this.mec,
								tokMeca: this.tokMeca,
								brojac: this.brojac,
								interval: this.interval,
								krugovi: this.krugovi,
								UkljuciFullScreen: this.UkljuciFullScreen,
								IskljuciFullScreen: this.IskljuciFullScreen,
								prikaziVatromet: this.prikaziVatromet,
								emitterZaVatromet: this.emitterZaVatromet,
								lopta: this.lopta,
								brojIgraca: this.brojIgraca,
								Postavi: this.Postavi,
								json: this.json,
								cookieService: this.cookieService,
								prvi: this.prvi,
								drugi: this.drugi,
								loptalopta: this.loptalopta,

								matrica: this.matrica,
								tim1: this.tim1,
								tim2: this.tim2,
								krajEvent: this.krajEvent
							};

							//this.game = new Phaser.Game(470,410, Phaser.AUTO, 'phaser-game', state);
							if (odgovor.brojKolona != undefined && odgovor.brojKolona != null && odgovor.brojKolona > 0)
							{
								let w = odgovor.brojKolona * (odgovor.velicinaKuglice + 10) + 50;
								let h = odgovor.brojVrsta * (odgovor.velicinaKuglice + 10) + 50;
								this.game = new Phaser.Game(w,h,Phaser.AUTO,'phaser-game',state);
							}
							else
							{
								this.game = new Phaser.Game(odgovor.sirina,odgovor.visina, Phaser.AUTO, 'phaser-game', state);
							}



						}
					}
				})
			}
			else
			{
				//console.log('nema ');
				this.mec = null;
				this.tokMeca = null;
			}
		})


	}

	ngOnDestroy(): void {

	    if (this.game != null && this.game.debug != null)
	    {
			//console.log((this.game);
            this.game.destroy();
        }

	}

	preload()
	{
		this.game.load.crossOrigin = 'anonymous';
		this.game.load.baseURL = environment.serverUrl;

		//console.log((" JELENA PRELOAD "+this.mec.slikaKuglice1);

		this.game.load.image('krugPlavi','upload/slike/igre/'+this.mec.slikaKuglice2);
		this.game.load.image('krugCrveni','upload/slike/igre/'+this.mec.slikaKuglice1);
		this.game.load.audio('zvuk','upload/audio/aplauz.mp3');
		this.game.load.image('fullscreen', 'upload/slike/igre/fullscreen.svg');
		this.game.load.image('fullscreen_exit', 'upload/slike/igre/fullscreen_exit.svg');
		this.game.load.image('krugBeli', 'upload/slike/igre/bc.png');
		console.log(this.mec.pozadina);

		if (this.mec.pozadina != undefined && this.mec.pozadina != null && this.mec.pozadina != '')
		{
			this.game.load.image('pozadina', 'upload/slike/igre/pozadine/'+this.mec.pozadina);
		}

		//console.log(("preload prosao");
		/*
		this.game.load.image('krugPlavi','assets/slike/kp.png');
		this.game.load.image('krugCrveni','assets/slike/kc.png');
		this.game.load.audio('zvuk','assets/audio/beep.mp3');
		this.game.load.image('fullscreen','assets/slike/fullscreen.svg');
		this.game.load.image('fullscreen_exit','assets/slike/fullscreen_exit.svg');

		if (this.mec.pozadina != undefined && this.mec.pozadina != null)
		{
			this.game.load.image('pozadina', this.mec.pozadina);
			//console.log((this.mec.pozadina);
		}

		*/
	}

	create()
	{ 
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;


		// ako je uneta slika
		if (this.mec.pozadina != undefined && this.mec.pozadina != null && this.mec.pozadina != '')
		{
			this.game.add.tileSprite(0,0,this.game.width,this.game.height,'pozadina');
		}
		else
		{
			this.game.stage.backgroundColor = '#ffffff';
		}

		// pravljenje json-a

		this.tim1 = [];
		this.tim2 = [];

		this.brojac = 0;


		// ako je dato kao matrica
		if (this.mec.brojVrsta != undefined && this.mec.brojVrsta != null)
		{
			this.matrica = new Array<any[]>(this.mec.brojVrsta);
			for (let i=0;i<this.mec.brojVrsta;i++)
			{
				//console.log((this.matrica);
				this.matrica[i] = new Array<any>(this.mec.brojKolona);
			}

		}

		// dodaj imena korisnika
		this.text1 = this.game.add.text(10, 6, this.mec.korisnik1.ime);
		//this.text2 = this.game.add.text(this.game.width - 75,0,this.mec.korisnik2.ime);
		//this.text2 = this.game.add.text(0,0,this.mec.korisnik2.ime, {boundsAlignH: "right", boundsAlignV: "top"});
		/*
		this.text2 = this.game.add.text();
		//this.text2.anchor.setTo(1,0);
		this.text2.text = this.mec.korisnik2.ime;
		//console.log((this.text2.x+ " - "+ this.text2.y);
		this.text2.alignIn(this.game.world.bounds,Phaser.RIGHT_TOP);
		//console.log((this.text2.x+ " - "+ this.text2.y);
		*/
		this.text2 = this.game.add.text();
		this.text2.text = this.mec.korisnik2.ime;
		this.text2.fontSize = 20;
		this.text2.x = this.game.width - this.text2.width - 10;
		this.text2.y = 6;

		if (this.mec.korisnik1.pobednik)
		{
			this.text2.fill = '#0000ff';
			this.text1.fill = '#ff0000';
		}
		else
		{
			this.text2.fill = '#0000ff';
			this.text1.fill = '#ff0000';
		}


		//this.text2.anchor.set(0,0);
		//this.text2.alignIn(this.game.world.bounds,Phaser.TOP_RIGHT,-this.text2.width/2-5);

		this.text1.fontSize = 20;
		this.text2.fontSize = 20;


		this.audio = this.game.add.audio('zvuk');
		this.audio.allowMultiple = false;


		this.fullScreen = this.game.add.button(this.game.width-50,this.game.height-50,'fullscreen', this.UkljuciFullScreen, this);
		this.fullScreen.width = 50;
		this.fullScreen.height = 50;

		this.fullScreenExit = this.game.add.button(this.game.width-50,this.game.height-50,'fullscreen_exit', this.IskljuciFullScreen, this);
		this.fullScreenExit.width = 50;
		this.fullScreenExit.height = 50;
		this.fullScreenExit.visible = false;
		this.fullScreenExit.input.enabled = false;


		this.interval = this.mec.interval;
		//console.log(("staticka?");
		//console.log((this.mec.staticka);

		// staticka igra je igra gde se nista ne pomera, nego se dodaju novi objekti
		if (this.mec.staticka == 1)
		{
			this.gamePetlja = this.game.time.events.loop(this.interval, this.DajKoordinate,this);
		}
		else
		{
			//console.log(("nije staticka");

			this.Postavi();
		}


	}

	Postavi(): void
	{
		//this.physicsGroup = this.game.add.physicsGroup(Phaser.Physics.ARCADE);
		this.brojac = 0;
		this.brojIgraca = this.mec.brojIgraca;
		////console.log((this.brojIgraca);

		let i;
		for (i=0;i<this.brojIgraca;i++)
		{
			/*
			let s1 = this.physicsGroup.create(this.game.rnd.integerInRange(100,700), this.game.rnd.integerInRange(100,500), 'krugPlavi');
			s1.body.velocity.set(this.game.rnd.integerInRange(-200,200), this.game.rnd.integerInRange(-200,200));
			s1.width = this.mec.velicinaKuglice;
			s1.height = this.mec.velicinaKuglice;
			*/
        //console.log((this.tokMeca[this.brojac].prvi.igraci[i]);
			let s1 = this.game.add.sprite(this.tokMeca[this.brojac].prvi.igraci[i].x,this.tokMeca[this.brojac].prvi.igraci[i].y,'krugCrveni');
			s1.width = this.mec.velicinaKuglice;
			s1.height = this.mec.velicinaKuglice;
			this.tim1[i] = s1;
			////console.log((this.tim1[i]);

			let s2 = this.game.add.sprite(this.tokMeca[this.brojac].drugi.igraci[i].x,this.tokMeca[this.brojac].drugi.igraci[i].y,'krugPlavi');
			s2.width = this.mec.velicinaKuglice;
			s2.height = this.mec.velicinaKuglice;
			this.tim2[i] = s2;



			/*
			let s2 = this.physicsGroup.create(this.game.rnd.integerInRange(100,700), this.game.rnd.integerInRange(100,500), 'krugCrveni')
			s2.body.velocity.set(this.game.rnd.integerInRange(-200,200), this.game.rnd.integerInRange(-200,200));
			s2.width = this.mec.velicinaKuglice;
			s2.height = this.mec.velicinaKuglice;
			*/
		}

		/*
		let l = this.physicsGroup.create(this.game.rnd.integerInRange(100,700), this.game.rnd.integerInRange(100,500), 'krugBeli');
		l.body.velocity.set(this.game.rnd.integerInRange(-200,200), this.game.rnd.integerInRange(-200,200));
		l.width = this.mec.velicinaKuglice;
		l.height = this.mec.velicinaKuglice;
		*/

		let l = this.game.add.sprite(this.tokMeca[this.brojac].lopta.x,this.tokMeca[this.brojac].lopta.y,'krugBeli');
		l.width = this.mec.velicinaKuglice;
		l.height = this.mec.velicinaKuglice;
		this.lopta = l;

		/*
		this.physicsGroup.setAll('body.collideWorldBounds', true);
		this.physicsGroup.setAll('body.bounce.x',1);
		this.physicsGroup.setAll('body.bounce.y',1);
		*/

		////console.log(()
		this.brojac++;
	}

	/*
	update()
	{

	}
	*/
	update()
	{
		if (this.mec.staticka == 0)
		{
			if (this.brojac < this.tokMeca.length - 1)
			{
				this.brojac++;

				let i;

				for (i=0;i<this.brojIgraca;i++)
				{
					this.tim1[i].x = this.tokMeca[this.brojac].prvi.igraci[i].x;
					this.tim1[i].y = this.tokMeca[this.brojac].prvi.igraci[i].y;

					this.tim2[i].x = this.tokMeca[this.brojac].drugi.igraci[i].x;
					this.tim2[i].y = this.tokMeca[this.brojac].drugi.igraci[i].y;

				}

				this.lopta.x = this.tokMeca[this.brojac].lopta.x;
				this.lopta.y = this.tokMeca[this.brojac].lopta.y;
			}
			else
			{
				this.game.time.events.add(100,this.PustiZvuk, this);
				this.audio.play();
				this.game.paused = true;
				this.prikaziVatromet = true;
				//console.log('pauza');

				////console.log((JSON.stringify(this.json));

				//this.audio.play();

				if(this.cookieService.get("language") == 'sr')
				{
					swal (
						{
							title: 'Pobednik je ' + this.mec.korisnik1.ime,
							showConfirmButton: false,
							timer: 2600
						}
					)
				}
				else
				{
					swal (
						{
							title: 'The winner is ' + this.mec.korisnik1.ime,
							showConfirmButton: false,
							timer: 2600
						}
					)
				}
				
				this.emitterZaVatromet.emit();
			}

			//this.game.physics.arcade.collide(this.physicsGroup);

			/*
			if (this.game.time.totalElapsedSeconds() >= 30)
			{

			}
			*/

		}


	}

	PustiZvuk(): void
	{
		this.audio.play();
	}


	DajKoordinate2(): void
	{
		if (this.brojac < this.tokMeca.length)
		{
			let i;

			for (i=0;i<this.tokMeca[this.brojac].prvi.length;i++)
			{
				this.tim1[i].x = this.tokMeca[this.brojac].prvi[i].x;
				this.tim1[i].y = this.tokMeca[this.brojac].prvi[i].y;

				this.tim2[i].x = this.tokMeca[this.brojac].drugi[i].x;
				this.tim2[i].y = this.tokMeca[this.brojac].drugi[i].y;

				this.lopta.x = this.tokMeca[this.brojac].lopta.x;
				this.lopta.y = this.tokMeca[this.brojac].lopta.y;
			}
		}
		else
		{
			this.game.time.events.remove(this.gamePetlja);

			let pobednik;

			if (this.mec.korisnik1.pobednik)
			{
				pobednik = this.mec.korisnik1.ime;
			}
			else
			{
				pobednik = this.mec.korisnik2.ime;
			}

			//this.game.add.sprite(0,0,'avatar1');

			let poruka;

			if (pobednik == '')
			{
				if(this.cookieService.get("language") == 'sr')
				{
					pobednik = ' drugi bot!'
				}
				else
				{
					pobednik = ' second bot!'
				}
				
			}

			if(this.cookieService.get("language") == 'sr')
			{
				swal (
					{
						title: 'Pobednik je ' + pobednik,
						showConfirmButton: false,
						timer: 2600
						/*backdrop: `
									rgba(127, 127, 127, 0.3)
									url("../../../assets/slike/vatromet.webp")
									center top
									repeat-x
									  `*/
					}
				)
			}
			else
			{
				swal (
					{
						title: 'The winner is ' + pobednik,
						showConfirmButton: false,
						timer: 2600
						/*backdrop: `
									rgba(127, 127, 127, 0.3)
									url("../../../assets/slike/vatromet.webp")
									center top
									repeat-x
									  `*/
					}
				)
			}

			

			this.prikaziVatromet = true;
			this.emitterZaVatromet.emit();
		}
	}

	/*
	DajKoordinate2(): void
	{
		this.turnirService.DajKoordinate(this.odgovor.igra.brojIgraca).subscribe(odgovor => {

			if (odgovor != -1 && odgovor != 0)
			{
				if (this.niz1 == undefined || this.niz1 == null)
				{
					let i;
					for (i=0;i<this.odgovor.igra.brojIgraca;i++)
					{
						this.physicsGroup = this.game.add.physicsGroup(Phaser.Physics.ARCADE);

						this.niz1[i] = this.physicsGroup.create(odgovor.prvi.x,odgovor.prvi.y,'krugCrveni');
						this.niz2[i] = this.physicsGroup.create(odgovor.drugi.x,odgovor.drugi.y,'krugPlavi');


					}
				}
				else
				{

				}

			}
		});
	}
*/



	UkljuciFullScreen():void
	{
		//console.log(("ukljuci");
		this.game.scale.startFullScreen();
		this.fullScreen.visible = false;
		this.fullScreen.input.enabled = false;

		this.fullScreenExit.visible = true;
		this.fullScreenExit.input.enabled = true;
	}

	IskljuciFullScreen(): void
	{
		//console.log(("iskljuci");
		this.game.scale.stopFullScreen();
		this.fullScreenExit.visible = false;
		this.fullScreenExit.input.enabled = false;

		this.fullScreen.visible = true;
		this.fullScreen.input.enabled= true;
	}



	DajKoordinate():void
	{
		if (this.brojac < this.tokMeca.length)
		{
			let krug: Phaser.Sprite;

			let i = this.tokMeca[this.brojac].i;
			let j = this.tokMeca[this.brojac].j;

			// prvi igrac

			if (this.tokMeca[this.brojac].igrac == 1)
			{
				krug = this.game.add.sprite(this.tokMeca[this.brojac].j*(this.mec.velicinaKuglice+10),(this.tokMeca[this.brojac].i)*(this.mec.velicinaKuglice+10)+50,'krugPlavi');
			}
			else
			{
				krug = this.game.add.sprite(this.tokMeca[this.brojac].j*(this.mec.velicinaKuglice+10),(this.tokMeca[this.brojac].i)*(this.mec.velicinaKuglice+10)+50,'krugCrveni');
			}


			//krug = this.game.add.sprite(this.tokMeca[this.brojac].j*120,0,'krugPlavi');

			krug.width = this.mec.velicinaKuglice;
			krug.height = this.mec.velicinaKuglice;

			this.matrica[i][j] = { objekat: krug, promeniBoju: this.tokMeca[this.brojac].promeniBoju };
			////console.log((this.matrica);

			//this.game.physics.arcade.enable(krug);

			//krug.body.velocity = 100;
			//krug.body.moveTo(1000,(this.tokMeca[this.brojac].i+1)*120,90);

			//krug = this.game.add.sprite(this.tokMeca[this.brojac].j*120,0,'krugPlavi');

		//	krug.body.collideWorldBounds = true;
			//this.game.physics.arcade.moveToXY(krug,this.tokMeca[this.brojac].j*120,(this.tokMeca[this.brojac].i+1)*120,450);


			////console.log((this.tokMeca[this.brojac].zvuk);

			if (this.tokMeca[this.brojac].kraj == 1)
			{
				this.krajEvent = this.game.time.events.add(200,function()
				{
					let i,j;

					for (i=0;i<this.mec.brojVrsta;i++)
					{
						for (j=0;j<this.mec.brojKolona;j++)
						{
							//console.log((this.matrica[i][j]);
							if (this.matrica[i][j] && this.matrica[i][j].promeniBoju)
							{
								this.matrica[i][j].objekat.tint = 0xaaaaaa;
							}

							if (i == this.mec.brojVrsta-1 && j == this.mec.brojKolona-1)
							{
								this.audio.play();
								this.game.time.events.remove(this.krajEvent);
							}

						}
					}


				},this);
			}




			this.brojac++;
		}
		else
		{


			this.game.time.events.remove(this.gamePetlja);

			let pobednik;

			if (this.mec.korisnik1.pobednik)
			{
				pobednik = this.mec.korisnik1.ime;
			}
			else
			{
				pobednik = this.mec.korisnik2.ime;
			}

			//this.game.add.sprite(0,0,'avatar1');

			if(this.cookieService.get("language") == 'sr')
			{
				swal (
					{
						title: 'Pobednik je ' + pobednik,
						showConfirmButton: false,
						timer: 2600
						/*backdrop: `
									rgba(127, 127, 127, 0.3)
									url("../../../assets/slike/vatromet.webp")
									center top
									repeat-x
									  `*/
					}
				)
			}
			else
			{
				swal (
					{
						title: 'The winner is ' + pobednik,
						showConfirmButton: false,
						timer: 2600
						/*backdrop: `
									rgba(127, 127, 127, 0.3)
									url("../../../assets/slike/vatromet.webp")
									center top
									repeat-x
									  `*/
					}
				)
			}
			

			this.prikaziVatromet = true;
			this.emitterZaVatromet.emit();


		}


	}


}

