webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Olimijada';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__komponente_registracija_registracija_component__ = __webpack_require__("./src/app/komponente/registracija/registracija.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__komponente_header_header_component__ = __webpack_require__("./src/app/komponente/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__komponente_pocetna_pocetna_component__ = __webpack_require__("./src/app/komponente/pocetna/pocetna.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__moduli_app_routing_module__ = __webpack_require__("./src/app/moduli/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__komponente_prijava_prijava_component__ = __webpack_require__("./src/app/komponente/prijava/prijava.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__komponente_turniri_turniri_component__ = __webpack_require__("./src/app/komponente/turniri/turniri.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__moduli_materialkomponente_module__ = __webpack_require__("./src/app/moduli/materialkomponente.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__servisi_auth_service__ = __webpack_require__("./src/app/servisi/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__servisi_auth_guard_service__ = __webpack_require__("./src/app/servisi/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__servisi_pravila_service__ = __webpack_require__("./src/app/servisi/pravila.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__komponente_kreiranje_igara_kreiranje_igara_component__ = __webpack_require__("./src/app/komponente/kreiranje-igara/kreiranje-igara.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__komponente_prikaz_turnira_prikaz_turnira_component__ = __webpack_require__("./src/app/komponente/prikaz-turnira/prikaz-turnira.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__komponente_email_email_component__ = __webpack_require__("./src/app/komponente/email/email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__komponente_registracija_registracija_component__["a" /* RegistracijaComponent */],
                __WEBPACK_IMPORTED_MODULE_5__komponente_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__komponente_pocetna_pocetna_component__["a" /* PocetnaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__komponente_prijava_prijava_component__["a" /* PrijavaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__komponente_turniri_turniri_component__["a" /* TurniriComponent */],
                __WEBPACK_IMPORTED_MODULE_17__komponente_kreiranje_igara_kreiranje_igara_component__["a" /* KreiranjeIgaraComponent */],
                __WEBPACK_IMPORTED_MODULE_18__komponente_prikaz_turnira_prikaz_turnira_component__["a" /* PrikazTurniraComponent */],
                __WEBPACK_IMPORTED_MODULE_19__komponente_email_email_component__["a" /* EmailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__moduli_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__moduli_materialkomponente_module__["a" /* MaterialkomponenteModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__servisi_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_14__servisi_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__servisi_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_16__servisi_pravila_service__["a" /* PravilaService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/komponente/email/email.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\t<mat-card class=\"kartica\">\n\t\t<mat-card-content>\n\t\t<form (ngSubmit)=\"PosaljiMail()\">\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"e-mail adresa\" [formControl]=\"mail\" required><hr>\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"subject\" [formControl]=\"subject\" required><hr>\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"poruka\" [formControl]=\"poruka\" required><hr>\n\t\t\t</mat-form-field>\n\n\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\t\t\tPosalji mail\n\t\t\t</button>\n\t\t</form>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/komponente/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeli_Mail__ = __webpack_require__("./src/app/modeli/Mail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = /** @class */ (function () {
    function EmailComponent(adminService) {
        this.adminService = adminService;
        this.mail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.subject = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.poruka = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent.prototype.PosaljiMail = function () {
        var mail = new __WEBPACK_IMPORTED_MODULE_2__modeli_Mail__["a" /* Mail */]();
        mail.mail = this.mail.value;
        mail.subject = this.subject.value;
        mail.poruka = this.poruka.value;
        console.log(mail);
        this.adminService.PosaljiMail(mail).subscribe();
    };
    EmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__("./src/app/komponente/email/email.component.html"),
            styles: [__webpack_require__("./src/app/komponente/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__servisi_admin_service__["a" /* AdminService */]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/komponente/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".ikonica\r\n{\r\n  padding: 0 14px;\r\n}\r\n\r\n.razdelnik\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n#logoText\r\n{\r\n  text-decoration: none;\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin-left: 6px;\r\n}\r\n\r\n#adminOlimijada\r\n{\r\n  font-size: 12px;\r\n  background-color: yellow;\r\n  color: black;\r\n}\r\n\r\n#adminOlimijada:hover\r\n{\r\n  background-color: white;\r\n  font-size: 14px;\r\n  -webkit-transition-duration: 0.6s;\r\n          transition-duration: 0.6s;\r\n}\r\n\r\nul, li\r\n{\r\n  border: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  list-style: none;\r\n}\r\n\r\nhr\r\n{\r\n  margin-left: -38px;\r\n  color: darkgrey;\r\n}\r\n\r\n.linkDugme\r\n{\r\n  text-decoration: none;\r\n  color: cadetblue;\r\n}\r\n\r\n.faksDugme\r\n{\r\n  font-size: 96%;\r\n}\r\n\r\n.sidebaroviKontejner\r\n{\r\n  top: 64px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  background: none;\r\n}\r\n\r\nmat-sidenav\r\n{\r\n  width: 248px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/komponente/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n\n    <mat-toolbar color=\"primary\">\n        <mat-toolbar-row class=\"mat-elevation-z6\">\n\n            <button mat-mini-fab (click)=\"sidenav.toggle()\">\n                <mat-icon aria-label=\"Dugme za leviSidebarMeni\">menu</mat-icon>\n            </button>\n            <span><a href=\"/\" id=\"logoText\">Olimijada.<span id=\"adminOlimijada\">admin</span></a></span>\n            <span class=\"razdelnik\"></span>\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>apps</mat-icon></button>\n            <mat-menu class=\"faksMeni\" #menu=\"matMenu\" xPosition=\"after\">\n                <a href=\"https://imi.pmf.kg.ac.rs\" class=\"linkDugme\"><button mat-menu-item class=\"faksDugme\">Institut za Informatiku i Matematiku</button></a>\n                <a href=\"https://www.pmf.kg.ac.rs\" class=\"linkDugme\"><button mat-menu-item class=\"faksDugme\">Prirodno-matematički fakultet</button></a>\n            </mat-menu>\n\n            <mat-icon class=\"ikonica\">notifications</mat-icon>\n\n            <button mat-button (click)=\"desniSidenav.toggle()\">\n                <span class=\"ikonica\">prijava</span>\n            </button>\n        </mat-toolbar-row>\n    </mat-toolbar>\n</div>\n\n\n\n<div>\n    <mat-sidenav-container class=\"sidebaroviKontejner\">\n\n\n        <mat-sidenav #sidenav [mode]=\"mode.value\">\n            <ul>\n                <nav>\n                    <a href=\"#\" routerLink=\"/\" class=\"linkDugme\" (click)=\"sidenav.toggle()\">Početna</a><hr>\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/turniri\" class=\"linkDugme\" (click)=\"sidenav.toggle()\" >Dodavanje turnira</a></li><hr>\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/kreiranje-igara\" class=\"linkDugme\" (click)=\"sidenav.toggle()\">Dodavanje igre</a></li><hr>\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/dodajAdmina\" class=\"linkDugme\" (click)=\"sidenav.toggle()\">Dodavanje admina</a></li><hr>\n\t\t\t\t\t<li><a href=\"#\" routerLink=\"/slanjeMejla\" class=\"linkDugme\" (click)=\"sidenav.toggle()\">slanje mejla</a></li><hr>\n                    <li><a href=\"#\" class=\"linkDugme\">Igrači</a></li><hr>\n                    <li><a href=\"#\" class=\"linkDugme\">Botovi</a></li><hr>\n                    <li><a href=\"#\" class=\"linkDugme\">Poruke</a></li><hr> <!---- misli se na poruke iz kontakt forme ---->\n                </nav>\n            </ul>\n        </mat-sidenav>\n\n\n        <mat-sidenav #desniSidenav [mode]=\"mode.value\" position=\"end\">\n\n\t\t\t\n\t\t\t<app-prijava></app-prijava>\n\n        </mat-sidenav>\n\n\n\n\n        <mat-sidenav-content>\n            <router-outlet></router-outlet>\n        </mat-sidenav-content>\n\n    </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.mode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('over');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/komponente/header/header.component.html"),
            styles: [__webpack_require__("./src/app/komponente/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/komponente/kreiranje-igara/kreiranje-igara.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n#fab-upload, #icon-upload {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite datoteku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/kreiranje-igara/kreiranje-igara.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"pocetnaWrapper\">\n\n\t<mat-card class=\"kartica\">\n\t\t<mat-card-content>\n\t\t\t<form (ngSubmit) = \"DodajIgru()\">\t\t\t<!-- FORMA -->\n\t\t\t\t\t<mat-form-field> \t\t\t\t\t<!-- naziv igre -->\n\t\t\t\t\t\t<input matInput [formControl]=\"naziv\" placeholder=\"Naziv Igre\" required>\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t\t\t\t\t<!-- upload fajla sa pravilima -->\n\t\t\t\t\t\t<input type=\"file\" style=\"display: none\" name=\"fajlUpload\" id=\"fajlUpload\" class=\"fajlUpload\" #fajlUpload (change)=\"PostaviFajl($event)\" />\n\t\t\t\t\t\t<button mat-mini-fab (click)=\"fajlUpload.click()\" id=\"fab-upload\" style=\"background-color: purple;\">\n\t\t\t\t\t\t\t<mat-icon id=\"icon-upload\">file_upload</mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<span style=\"width: auto; width: 100px;\" *ngIf=\"fajlZaUpload == null\">\n\t\t\t\t\t\t\tNiste odabrali fajl\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span style=\"width: auto; width: 100px;\" *ngIf=\"fajlZaUpload != null\">\n\t\t\t\t\t\t\t{{ fajlZaUpload.name }}\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<mat-icon class=\"ikonica\" *ngIf=\"uspesno\">done</mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"ikonica\" *ngIf=\"neuspesno\">clear</mat-icon>\n\t\t\t\t\n\t\t\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\t\t\t\t\tDodaj turnir\n\t\t\t\t\t</button>\n\t\t\t</form>\n\t\t</mat-card-content>\n\t</mat-card>\n\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/kreiranje-igara/kreiranje-igara.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KreiranjeIgaraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_pravila_service__ = __webpack_require__("./src/app/servisi/pravila.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modeli_Igra__ = __webpack_require__("./src/app/modeli/Igra.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var KreiranjeIgaraComponent = /** @class */ (function () {
    function KreiranjeIgaraComponent(adminService, pravilaService) {
        this.adminService = adminService;
        this.pravilaService = pravilaService;
        // kontrole za unos potrebnih podataka
        this.naziv = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]);
        this.kontrolaZaIgru = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]);
    }
    KreiranjeIgaraComponent.prototype.ngOnInit = function () {
        this.nijeOdabranFajl = false;
        this.fajlZaUpload = null;
        this.uspesno = false;
        this.neuspesno = false;
    };
    // funkcija koja treba da pozove odredjeni servis za dodavanje novo unete IGRE
    KreiranjeIgaraComponent.prototype.DodajIgru = function () {
        var _this = this;
        var igra = new __WEBPACK_IMPORTED_MODULE_4__modeli_Igra__["a" /* Igra */]();
        if (this.fajlZaUpload != null) {
            igra.fajlZaPravila = this.fajlZaUpload.name;
        }
        igra.naziv = this.naziv.value;
        console.log(igra);
        if (this.fajlZaUpload != null) {
            // prosledjujemo servisu objekat Igra i fajl koji smo ucitali
            this.pravilaService.DodajIgru(igra, this.fajlZaUpload).subscribe(function (odgovor) {
                if (odgovor === 1) {
                    // neki FENSI modal za potvrdu da je dodat
                    console.log(odgovor);
                    _this.uspesno = true;
                }
                else {
                    // modal za gresku
                    console.log(odgovor);
                    _this.neuspesno = true;
                }
            });
        }
        else {
            this.nijeOdabranFajl = true;
        }
    };
    KreiranjeIgaraComponent.prototype.PostaviFajl = function (event) {
        console.log(event);
        var files = event.target.files;
        if (files.length > 0) {
            this.fajlZaUpload = files[0];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fajlUpload'),
        __metadata("design:type", Object)
    ], KreiranjeIgaraComponent.prototype, "fajl", void 0);
    KreiranjeIgaraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kreiranje-igara',
            template: __webpack_require__("./src/app/komponente/kreiranje-igara/kreiranje-igara.component.html"),
            styles: [__webpack_require__("./src/app/komponente/kreiranje-igara/kreiranje-igara.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_2__servisi_pravila_service__["a" /* PravilaService */]])
    ], KreiranjeIgaraComponent);
    return KreiranjeIgaraComponent;
}());



/***/ }),

/***/ "./src/app/komponente/pocetna/pocetna.component.css":
/***/ (function(module, exports) {

module.exports = ".pocetnaWrapper\r\n{\r\n    margin: 26px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/komponente/pocetna/pocetna.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\t<h1>Ovo je početna strana Administratora, dobrodošli!</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/pocetna/pocetna.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PocetnaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PocetnaComponent = /** @class */ (function () {
    function PocetnaComponent() {
    }
    PocetnaComponent.prototype.ngOnInit = function () {
    };
    PocetnaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pocetna',
            template: __webpack_require__("./src/app/komponente/pocetna/pocetna.component.html"),
            styles: [__webpack_require__("./src/app/komponente/pocetna/pocetna.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PocetnaComponent);
    return PocetnaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prijava/prijava.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field, button, .div-greska {\r\n\twidth: 90%;\r\n\tfont-size: 96%;\r\n\tmargin-top: 10px;\r\n\tmargin-left: 5%;\r\n}\r\n\r\n.div-greska {\r\n\tcolor: red;\r\n\tfont-size: 90%;\r\n\tmargin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/komponente/prijava/prijava.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<form  (ngSubmit)=\"PrijaviAdmina()\">\n\t\t<mat-form-field>\n\t\t\t<input matInput placeholder=\"Korisničko ime\" [formControl]=\"username\" required>\n\t\t</mat-form-field>\n\t\t<mat-form-field>\n\t\t\t<input matInput type=\"password\" placeholder=\"Lozinka\" [formControl]=\"password\" required>\n\t\t</mat-form-field>\n\n\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\tPrijavite se\n\t\t</button>\n\n\t\t<div *ngIf=\"pogresno\" class=\"div-greska\">\n\t\t\tPogrešno korisničko ime i/ili lozinka\n\t\t</div>\n\t\t<div *ngIf=\"greska\">\n\t\t\tDošlo je do greške\n\t\t</div>\n\t</form>\n\t\t  \n</div>"

/***/ }),

/***/ "./src/app/komponente/prijava/prijava.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrijavaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modeli_Admin__ = __webpack_require__("./src/app/modeli/Admin.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servisi_auth_service__ = __webpack_require__("./src/app/servisi/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrijavaComponent = /** @class */ (function () {
    function PrijavaComponent(adminService, authService) {
        this.adminService = adminService;
        this.authService = authService;
        this.naSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]);
    }
    PrijavaComponent.prototype.ngOnInit = function () {
        this.pogresno = false;
    };
    PrijavaComponent.prototype.PrijaviAdmina = function () {
        var _this = this;
        if (this.password.valid && this.username.valid) {
            console.log("submitovano");
            var admin = new __WEBPACK_IMPORTED_MODULE_3__modeli_Admin__["a" /* Admin */]();
            admin.username = this.username.value;
            admin.password = this.password.value;
            var odgovor;
            this.adminService.PrijaviAdmina(admin).subscribe(function (odg) {
                console.log(odg);
                if (odg.status == 1) {
                    _this.authService.Prijavi(odg);
                    // redirekcija na pocetnu stranu kada se uloguje
                    _this.naSubmit.emit(true);
                }
                else if (odg.status == 0) {
                    _this.ResetovanjeForme();
                    _this.pogresno = true;
                }
                else {
                    _this.ResetovanjeForme();
                    // otvori neki prozor koji ce da obavesti da je doslo do greske
                }
            });
        }
    };
    PrijavaComponent.prototype.ResetovanjeForme = function () {
        this.username.reset();
        this.password.reset();
        this.pogresno = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PrijavaComponent.prototype, "naSubmit", void 0);
    PrijavaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prijava',
            template: __webpack_require__("./src/app/komponente/prijava/prijava.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prijava/prijava.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_4__servisi_auth_service__["a" /* AuthService */]])
    ], PrijavaComponent);
    return PrijavaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prikaz-turnira/prikaz-turnira.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-turnira/prikaz-turnira.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<mat-card class=\"kartica\">\n\t\t<p>duvaj kurac</p>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/komponente/prikaz-turnira/prikaz-turnira.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrikazTurniraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrikazTurniraComponent = /** @class */ (function () {
    function PrikazTurniraComponent() {
    }
    PrikazTurniraComponent.prototype.ngOnInit = function () {
    };
    PrikazTurniraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prikaz-turnira',
            template: __webpack_require__("./src/app/komponente/prikaz-turnira/prikaz-turnira.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prikaz-turnira/prikaz-turnira.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrikazTurniraComponent);
    return PrikazTurniraComponent;
}());



/***/ }),

/***/ "./src/app/komponente/registracija/registracija.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field, button {\r\n\twidth: 90%;\r\n\tfont-size: 96%;\r\n\tmargin-top: 10px;\r\n\tmargin-left: 5%;\r\n}\r\n\r\n.kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/registracija/registracija.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\n\t<mat-card class=\"kartica\">\n\n\t<form (ngSubmit)=\"RegistracijaAdmina()\">\n\t\t<mat-form-field>\n\t\t\t<input matInput placeholder=\"Email\" [formControl]=\"email\" required>\n\t\t\t<mat-error *ngIf=\"email.invalid\">\n\t\t\t\t{{ GreskaMail() }}\n\t\t\t</mat-error>\n\t\t</mat-form-field>\n\t\t\n\t\t  \n\t\t<mat-form-field>\n\t\t\t<input matInput placeholder=\"Korisničko ime\" [formControl]=\"username\" required>\n\t\t\t<mat-error *ngIf=\"zauzeto\">\n\t\t\t\tKorisnicko ime je zauzeto\n\t\t\t</mat-error>\n\t\t</mat-form-field>\n\t\t\n\n\t\t<mat-form-field>\n\t\t\t\t<input matInput type=\"password\" placeholder=\"Lozinka\" [formControl]=\"password\" (keyup)=\"PoklapanjePassworda()\" required>\n\t\t\t\t<mat-hint align=\"start\">\n\t\t\t\t\tMinimalno 8 karaktera\n\t\t\t\t</mat-hint>\n\t\t</mat-form-field>\n\t\t\n\n\t\t\n\t\t\n\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\tDodaj admina\n\t\t</button>\n\t</form>\n\n\t</mat-card>\n\t\t  \n</div>"

/***/ }),

/***/ "./src/app/komponente/registracija/registracija.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistracijaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servisi_auth_service__ = __webpack_require__("./src/app/servisi/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modeli_Admin__ = __webpack_require__("./src/app/modeli/Admin.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { PasswordValidator } from '../password-validator.directive'; 


var RegistracijaComponent = /** @class */ (function () {
    function RegistracijaComponent(korisnikService, router, authService) {
        this.korisnikService = korisnikService;
        this.router = router;
        this.authService = authService;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email]);
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(8)]);
        this.passwordPonovo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(8)]);
    }
    RegistracijaComponent.prototype.ngOnInit = function () {
        this.zauzeto = false;
    };
    RegistracijaComponent.prototype.GreskaMail = function () {
        return (this.email.hasError('email') && !this.email.hasError('required')) ? "Email nije validan" : "";
    };
    RegistracijaComponent.prototype.GreskaPasswordPonovo = function () {
        //console.log(this.passwordPonovo.value);
        //console.log(this.password.value);
        return this.passwordPonovo.hasError('Password') ? "Lozinke se ne poklapaju" : "aaa";
    };
    RegistracijaComponent.prototype.PoklapanjePassworda = function () {
        console.log(this.password.value);
        console.log(this.passwordPonovo.value);
        console.log(this.poklapanje = (this.password.value === this.passwordPonovo.value));
    };
    RegistracijaComponent.prototype.RegistracijaAdmina = function () {
        if (this.email.valid && this.password.valid && this.passwordPonovo.valid && this.username.valid) {
            console.log("submitovano");
            var admin = new __WEBPACK_IMPORTED_MODULE_5__modeli_Admin__["a" /* Admin */]();
            admin.username = this.username.value;
            admin.password = this.password.value;
            admin.email = this.email.value;
            var odgovor;
            /*this.korisnikService.RegistrujKorisnika(korisnik).subscribe(odg =>
            {
                console.log(odg.status);
                if (odg.status === "ok")
                {
                    // ako se uspesno registrovao
                    
                }
                else if (odg.status === "postoji")
                {
                    // ispisi da je zauzeto ime (nece da radi ngIf u mat-error-u)
                }
                else
                {
                    // otvori neki prozor koji ce da obavesti da je doslo do greske
                }
            });*/
        }
    };
    RegistracijaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registracija',
            template: __webpack_require__("./src/app/komponente/registracija/registracija.component.html"),
            styles: [__webpack_require__("./src/app/komponente/registracija/registracija.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__servisi_auth_service__["a" /* AuthService */]])
    ], RegistracijaComponent);
    return RegistracijaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/turniri/turniri.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/turniri/turniri.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\n\t<mat-card class=\"kartica\">\n\n\t\t<mat-card-content>\n\t\t\t<form (ngSubmit)=\"DodajTurnir()\" >\n\t\t\t\t<mat-form-field>\t\t\t\t<!--Biranje tipa turnira Kup/Liga-->\n\t\t\t\t\t<mat-select placeholder=\"Izaberite tip turnira\" [(ngModel)]=\"odabraniTipTurnira\" name=\"tipTurnira\"  required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let tipTurnira of tipoviTurnira\" [value]=\"tipTurnira.id\">\n\t\t\t\t\t\t\t{{tipTurnira.naziv}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t\t<!--Unosenje naziva turnira-->\n\t\t\t\t\t<input matInput placeholder=\"Naziv turnira\"  [formControl]=\"naziv\" required>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t\t<!--Biranje igre-->\n\t\t\t\t\t<mat-select placeholder=\"Izaberite igru\" [(ngModel)]=\"odabramaIgra\" name=\"tipIgre\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let igra of igre\" [value]=\"igra.id\">\n\t\t\t\t\t\t\t{{igra.naziv}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t<!--Datum pocekta turnira-->\n\t\t\t\t\t<input matInput [matDatepicker]=\"pickerPocetakTurnira\" placeholder=\"Datum početka turnira\" [(ngModel)]=\"datumPocetka\" name=\"prviDatum\"  required>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerPocetakTurnira\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #pickerPocetakTurnira></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t<!--Sati pocetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme početka turnira (sati)\" [(ngModel)]=\"pocetakTurniraSati\" name=\"pocSati\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let sat of sati\" [value]=\"sat\">\n\t\t\t\t\t\t\t{{sat + \" h\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t<!--Minuti pocetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme početka turnira (minuti)\" [(ngModel)]=\"pocetakTurniraMinuti\" name=\"pocMinuti\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let minut of minuti\" [value]=\"minut\">\n\t\t\t\t\t\t\t{{minut + \" min\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t<!--Datum zvrsetka turnira-->\n\t\t\t\t\t<input matInput [matDatepicker]=\"pickerZavrsetakTurnira\" placeholder=\"Datum završetka turnira\" [(ngModel)]=\"datumZavrsetka\" name=\"drugiDatum\"  required>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerZavrsetakTurnira\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #pickerZavrsetakTurnira></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t<!--Sati zavrsetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme završetka turnira (sati)\" [(ngModel)]=\"zavrsetakTurniraSati\" name=\"zavSati\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let sat of sati\" [value]=\"sat\">\n\t\t\t\t\t\t\t{{sat + \" h\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field>\t\t\t<!--Minuti zavrsetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme završetka turnira (minuti)\" [(ngModel)]=\"zavrsetakTurniraMinuti\" name=\"zavMinuti\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let minut of minuti\" [value]=\"minut\">\n\t\t\t\t\t\t\t{{minut + \" min\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<div *ngIf=\"losDatum\">\n\t\t\t\t\t{{poruka}}\n\t\t\t\t</div>\n\n\t\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\t\t\tDodaj turnir\n\t\t\t\t</button>\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t</form>\n\t\t</mat-card-content>\n\n\t</mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/komponente/turniri/turniri.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurniriComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modeli_Turnir__ = __webpack_require__("./src/app/modeli/Turnir.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TurniriComponent = /** @class */ (function () {
    function TurniriComponent(adminService) {
        this.adminService = adminService;
        this.naziv = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
        this.poruka = "Početak turnira ne može biti kasnije od završetka turnira"; //poruka koja se salje u slucaju loseg datuma/vremena
        this.losDatum = false;
        this.sati = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.minuti = [10, 20, 30, 40, 50];
        this.igre = [];
        this.tipoviTurnira = [];
    }
    TurniriComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.DajSveIgre().subscribe(function (igre) { return _this.igre = igre; });
        this.adminService.DajTipoveTurnira().subscribe(function (tipoviTurnira) { return _this.tipoviTurnira = tipoviTurnira; });
    };
    TurniriComponent.prototype.DodajTurnir = function () {
        var turnir = new __WEBPACK_IMPORTED_MODULE_3__modeli_Turnir__["a" /* Turnir */]();
        turnir.idTipaTurnira = this.odabraniTipTurnira;
        turnir.naziv = this.naziv.value;
        turnir.idIgre = this.odabramaIgra;
        if ((this.datumPocetka > this.datumZavrsetka) || (this.datumPocetka == this.datumZavrsetka && this.pocetakTurniraSati > this.zavrsetakTurniraSati) || (this.datumPocetka == this.datumZavrsetka && this.pocetakTurniraSati == this.zavrsetakTurniraSati && this.pocetakTurniraMinuti >= this.zavrsetakTurniraMinuti) || (parseInt(this.datumPocetka.toString()) < Date.now())) {
            this.losDatum = true;
        }
        this.pocetniDatum = this.datumPocetka.toLocaleDateString();
        this.pocetniDatum += " " + this.pocetakTurniraSati;
        this.pocetniDatum += ":" + this.pocetakTurniraMinuti + ":00.000";
        this.zavrsniDatum = this.datumZavrsetka.toLocaleDateString();
        this.zavrsniDatum += " " + this.zavrsetakTurniraSati;
        this.zavrsniDatum += ":" + this.zavrsetakTurniraMinuti + ":00.000";
        turnir.datumVremePocetka = this.pocetniDatum;
        turnir.datumVremeZavrsetka = this.zavrsniDatum;
        //console.log(this.pocetniDatum);
        console.log(turnir);
        if (!this.losDatum) {
            this.adminService.DodajTurnir(turnir).subscribe();
        }
    };
    TurniriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-turniri',
            template: __webpack_require__("./src/app/komponente/turniri/turniri.component.html"),
            styles: [__webpack_require__("./src/app/komponente/turniri/turniri.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */]])
    ], TurniriComponent);
    return TurniriComponent;
}());



/***/ }),

/***/ "./src/app/modeli/Admin.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Admin; });
var Admin = /** @class */ (function () {
    function Admin() {
    }
    return Admin;
}());



/***/ }),

/***/ "./src/app/modeli/Igra.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Igra; });
var Igra = /** @class */ (function () {
    function Igra() {
    }
    return Igra;
}());



/***/ }),

/***/ "./src/app/modeli/Mail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
var Mail = /** @class */ (function () {
    function Mail() {
    }
    return Mail;
}());



/***/ }),

/***/ "./src/app/modeli/Turnir.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Turnir; });
var Turnir = /** @class */ (function () {
    function Turnir() {
    }
    return Turnir;
}());



/***/ }),

/***/ "./src/app/moduli/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__komponente_pocetna_pocetna_component__ = __webpack_require__("./src/app/komponente/pocetna/pocetna.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__komponente_registracija_registracija_component__ = __webpack_require__("./src/app/komponente/registracija/registracija.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__komponente_turniri_turniri_component__ = __webpack_require__("./src/app/komponente/turniri/turniri.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servisi_auth_guard_service__ = __webpack_require__("./src/app/servisi/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__komponente_kreiranje_igara_kreiranje_igara_component__ = __webpack_require__("./src/app/komponente/kreiranje-igara/kreiranje-igara.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__komponente_email_email_component__ = __webpack_require__("./src/app/komponente/email/email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/pocetna', pathMatch: 'full' },
    { path: 'pocetna', component: __WEBPACK_IMPORTED_MODULE_1__komponente_pocetna_pocetna_component__["a" /* PocetnaComponent */] },
    { path: 'turniri', component: __WEBPACK_IMPORTED_MODULE_4__komponente_turniri_turniri_component__["a" /* TurniriComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__servisi_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'kreiranje-igara', component: __WEBPACK_IMPORTED_MODULE_6__komponente_kreiranje_igara_kreiranje_igara_component__["a" /* KreiranjeIgaraComponent */] },
    { path: 'dodajAdmina', component: __WEBPACK_IMPORTED_MODULE_3__komponente_registracija_registracija_component__["a" /* RegistracijaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__servisi_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'slanjeMejla', component: __WEBPACK_IMPORTED_MODULE_7__komponente_email_email_component__["a" /* EmailComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/moduli/materialkomponente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialkomponenteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_divider__ = __webpack_require__("./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material_menu__["a" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__["a" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material_radio__["a" /* MatRadioModule */],
    __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material_form_field__["c" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_10__angular_material_input__["b" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_material_tabs__["a" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_material_divider__["a" /* MatDividerModule */],
    __WEBPACK_IMPORTED_MODULE_13__angular_material_chips__["a" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_14__angular_material_list__["a" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material_select__["a" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_16__angular_material_datepicker__["a" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_material__["a" /* MatNativeDateModule */]
];
var MaterialkomponenteModule = /** @class */ (function () {
    function MaterialkomponenteModule() {
    }
    MaterialkomponenteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [MATERIAL_MODULES],
            exports: [MATERIAL_MODULES],
            declarations: []
        })
    ], MaterialkomponenteModule);
    return MaterialkomponenteModule;
}());



/***/ }),

/***/ "./src/app/servisi/admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.RegistrujAdmina = function (admin) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "registracija";
        var zahtev = {
            admin: 0,
            korisnik: admin
        };
        return this.http.post(url, zahtev);
    };
    AdminService.prototype.PrijaviAdmina = function (admin) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + "prijava";
        var zahtev = {
            admin: 1,
            korisnik: admin
        };
        return this.http.post(url, zahtev);
    };
    AdminService.prototype.DajSveIgre = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'sveIgre';
        return this.http.get(url);
    };
    AdminService.prototype.DajTipoveTurnira = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'sviTipoviTurnira';
        return this.http.get(url);
    };
    AdminService.prototype.DodajTurnir = function (turnir) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'dodajTurnir';
        console.log(turnir);
        return this.http.post(url, turnir, { headers: headers });
    };
    AdminService.prototype.PosaljiMail = function (mail) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'posaljiMail';
        console.log(mail);
        return this.http.post(url, mail);
    };
    AdminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/servisi/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/servisi/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.ProveriDaLiJePrijavljen();
        //return this.authService.DaLiJePrijavljen();
    };
    AuthGuardService.prototype.ProveriDaLiJePrijavljen = function () {
        var prijavljen = this.authService.DaLiJePrijavljen();
        if (prijavljen) {
            console.log('Guard: prijavljen');
            return true;
        }
        else {
            console.log('Guard: nije prijavljen');
            this.router.navigate(['/pocetna']);
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/servisi/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.Prijavi = function (odgovor) {
        this.prijavljen = true;
        localStorage.setItem("token", odgovor.token);
        localStorage.setItem("username", odgovor.korisnik.username);
        console.log('Auth: prijavljen ' + this.prijavljen);
    };
    AuthService.prototype.Odjavi = function () {
        this.prijavljen = false;
        localStorage.clear();
        this.router.navigate(['/pocetna']);
    };
    AuthService.prototype.DaLiJePrijavljen = function () {
        /*
        console.log('prijavljen: '+ this.prijavljen);
        return this.prijavljen;
        */
        if (localStorage.getItem("token") != undefined) {
            this.prijavljen = true;
            return true;
        }
        else {
            this.prijavljen = false;
            return false;
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/servisi/pravila.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PravilaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PravilaService = /** @class */ (function () {
    function PravilaService(http) {
        this.http = http;
    }
    // primamo objekat tipa Igra sa nazivom igre i nazivom fajla
    // kao i fajl koji smo ucitali
    PravilaService.prototype.DodajIgru = function (igra, fajlZaUpload) {
        // url servera
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].serverUrl + 'dodajIgru';
        // moramo biti ulogovani
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        // pravimo formu
        var formData = new FormData();
        console.log(fajlZaUpload.name);
        formData.append('file', fajlZaUpload, fajlZaUpload.name); // ucitan fajl
        formData.append('fileName', fajlZaUpload.name); // saljemo posebno ime fajla posto nije htelo da radi
        formData.append('username', localStorage.getItem('username')); // ko je ulogovan
        formData.append('naziv', igra.naziv); // naziv igre bi ovde trebalo da saljemo
        //headers.append('authorization', bearerHeader);
        //headers.append('authorization', bearerHeader);
        /*
        let zahtev =
        {
            username: localStorage.getItem('username'),
            bot: bot,
            fajl: fajl
        };
        */
        //console.log(zahtev.fajl);
        // saljemo rikvest!
        return this.http.post(url, formData, { headers: headers });
    };
    PravilaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], PravilaService);
    return PravilaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverUrl: 'http://localhost:8080/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map