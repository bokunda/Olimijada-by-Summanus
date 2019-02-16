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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_editor__ = __webpack_require__("./node_modules/ngx-editor/esm5/ngx-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__komponente_azuriraj_turnir_azuriraj_turnir_component__ = __webpack_require__("./src/app/komponente/azuriraj-turnir/azuriraj-turnir.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__komponente_prikaz_korisnika_prikaz_korisnika_component__ = __webpack_require__("./src/app/komponente/prikaz-korisnika/prikaz-korisnika.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__komponente_banovanje_banovanje_component__ = __webpack_require__("./src/app/komponente/banovanje/banovanje.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__komponente_prikaz_meceva_za_turnir_prikaz_meceva_za_turnir_component__ = __webpack_require__("./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__komponente_faq_faq_component__ = __webpack_require__("./src/app/komponente/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__komponente_prikaz_igara_prikaz_igara_component__ = __webpack_require__("./src/app/komponente/prikaz-igara/prikaz-igara.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__komponente_potvrda_potvrda_component__ = __webpack_require__("./src/app/komponente/potvrda/potvrda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__komponente_prikaz_prijava_prikaz_prijava_component__ = __webpack_require__("./src/app/komponente/prikaz-prijava/prikaz-prijava.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__komponente_azuriraj_faq_azuriraj_faq_component__ = __webpack_require__("./src/app/komponente/azuriraj-faq/azuriraj-faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__komponente_prikaz_admina_prikaz_admina_component__ = __webpack_require__("./src/app/komponente/prikaz-admina/prikaz-admina.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__komponente_igre_igre_component__ = __webpack_require__("./src/app/komponente/igre/igre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__kompmonente_za_turnire_za_turnire_component__ = __webpack_require__("./src/app/kompmonente/za-turnire/za-turnire.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_12__komponente_turniri_turniri_component__["b" /* TurniriComponent */],
                __WEBPACK_IMPORTED_MODULE_17__komponente_kreiranje_igara_kreiranje_igara_component__["a" /* KreiranjeIgaraComponent */],
                __WEBPACK_IMPORTED_MODULE_18__komponente_prikaz_turnira_prikaz_turnira_component__["a" /* PrikazTurniraComponent */],
                __WEBPACK_IMPORTED_MODULE_19__komponente_email_email_component__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_24__komponente_azuriraj_turnir_azuriraj_turnir_component__["a" /* AzurirajTurnirComponent */],
                __WEBPACK_IMPORTED_MODULE_25__komponente_prikaz_korisnika_prikaz_korisnika_component__["a" /* PrikazKorisnikaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__komponente_banovanje_banovanje_component__["a" /* BanovanjeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__komponente_prikaz_meceva_za_turnir_prikaz_meceva_za_turnir_component__["a" /* PrikazMecevaZaTurnirComponent */],
                __WEBPACK_IMPORTED_MODULE_28__komponente_faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_29__komponente_prikaz_igara_prikaz_igara_component__["a" /* PrikazIgaraComponent */],
                __WEBPACK_IMPORTED_MODULE_30__komponente_potvrda_potvrda_component__["a" /* PotvrdaComponent */],
                __WEBPACK_IMPORTED_MODULE_31__komponente_prikaz_prijava_prikaz_prijava_component__["a" /* PrikazPrijavaComponent */],
                __WEBPACK_IMPORTED_MODULE_32__komponente_azuriraj_faq_azuriraj_faq_component__["a" /* AzurirajFaqComponent */],
                __WEBPACK_IMPORTED_MODULE_33__komponente_prikaz_admina_prikaz_admina_component__["a" /* PrikazAdminaComponent */],
                __WEBPACK_IMPORTED_MODULE_34__komponente_igre_igre_component__["a" /* IgreComponent */],
                __WEBPACK_IMPORTED_MODULE_35__kompmonente_za_turnire_za_turnire_component__["a" /* ZaTurnireComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__moduli_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__moduli_materialkomponente_module__["a" /* MaterialkomponenteModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_editor__["a" /* NgxEditorModule */],
                __WEBPACK_IMPORTED_MODULE_22_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__servisi_admin_service__["a" /* AdminService */], __WEBPACK_IMPORTED_MODULE_14__servisi_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__servisi_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_16__servisi_pravila_service__["a" /* PravilaService */], __WEBPACK_IMPORTED_MODULE_20__angular_common__["d" /* DatePipe */], { provide: __WEBPACK_IMPORTED_MODULE_23__angular_material_core__["c" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_12__komponente_turniri_turniri_component__["a" /* MyDateAdapter */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_24__komponente_azuriraj_turnir_azuriraj_turnir_component__["a" /* AzurirajTurnirComponent */], __WEBPACK_IMPORTED_MODULE_26__komponente_banovanje_banovanje_component__["a" /* BanovanjeComponent */], __WEBPACK_IMPORTED_MODULE_30__komponente_potvrda_potvrda_component__["a" /* PotvrdaComponent */], __WEBPACK_IMPORTED_MODULE_31__komponente_prikaz_prijava_prikaz_prijava_component__["a" /* PrikazPrijavaComponent */], __WEBPACK_IMPORTED_MODULE_32__komponente_azuriraj_faq_azuriraj_faq_component__["a" /* AzurirajFaqComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/kompmonente/za-turnire/za-turnire.component.css":
/***/ (function(module, exports) {

module.exports = ".divZaTurnire\r\n{\r\n  width: 96%;\r\n  display: table;\r\n  margin: 0 auto;\r\n  margin-top: 18px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/kompmonente/za-turnire/za-turnire.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"divZaTurnire\">\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h3>Kreiraj nov turnir</h3>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-turniri></app-turniri>\n    </mat-expansion-panel>\n\n\n\n    <mat-expansion-panel (opened)=\"true\" [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h3>Spisak turnira</h3>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-template matExpansionPanelContent>\n      <app-prikaz-turnira></app-prikaz-turnira>\n      </ng-template>\n    </mat-expansion-panel>\n\n  </mat-accordion>\n</div>\n"

/***/ }),

/***/ "./src/app/kompmonente/za-turnire/za-turnire.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZaTurnireComponent; });
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

var ZaTurnireComponent = /** @class */ (function () {
    function ZaTurnireComponent() {
    }
    ZaTurnireComponent.prototype.ngOnInit = function () {
    };
    ZaTurnireComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-za-turnire',
            template: __webpack_require__("./src/app/kompmonente/za-turnire/za-turnire.component.html"),
            styles: [__webpack_require__("./src/app/kompmonente/za-turnire/za-turnire.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZaTurnireComponent);
    return ZaTurnireComponent;
}());



/***/ }),

/***/ "./src/app/komponente/azuriraj-faq/azuriraj-faq.component.css":
/***/ (function(module, exports) {

module.exports = "#editor\r\n{\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n#editor p\r\n{\r\n\tcolor: gray;\r\n}"

/***/ }),

/***/ "./src/app/komponente/azuriraj-faq/azuriraj-faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\t<mat-card class=\"kartica\">\n\t\t<mat-card-header>\n\t\t\t<mat-card-title><h1>Izmena FAQ pitanja</h1></mat-card-title>\n\t\t</mat-card-header>\n\t\t<mat-card-content>\n\t\t\t<form (ngSubmit)= \"IzmeniFAQ()\"> \t<!-- FORMA -->\n\t\t\t\t<mat-form-field>   \t\t\t\t\t<!-- Pitanje -->\n\t\t\t\t\t<textarea matInput [formControl]=\"pitanje1\" [(value)]=\"pitanjeSadr\" placeholder=\"Promenite pitanje\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"10\" required></textarea>\n\t\t\t\t\t<!-- <mat-error *ngIf=\"pitanje.invalid\">{{ greskaPitanje() }}</mat-error><br/><br/> -->\n\t\t\t\t</mat-form-field><br/>\n\t\t\t\t<div id=\"editor\">\t\t\t\t\t<!-- Odgovor - editor -->\n\t\t\t\t\t<p>Upišite odgovor*</p>\n\t\t\t\t\t<app-ngx-editor [placeholder]=\"'Unesite tekst ovde...'\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" [ngModelOptions]=\"{standalone: true}\" height=\"200px\" minHeight=\"200px\"></app-ngx-editor>\n\t\t\t\t</div>\n\t\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\t\t\tIzmeni\n\t\t\t\t</button>\n\t\t\t</form>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/komponente/azuriraj-faq/azuriraj-faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzurirajFaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeli_PitanjeOdgovor__ = __webpack_require__("./src/app/modeli/PitanjeOdgovor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AzurirajFaqComponent = /** @class */ (function () {
    function AzurirajFaqComponent(adminServis, data, dialogRef) {
        this.adminServis = adminServis;
        this.data = data;
        this.dialogRef = dialogRef;
        this.pitanje1 = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required]);
        this.htmlContent = "";
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "200px",
            "minHeight": "0",
            "width": "auto",
            "minWidth": "0",
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "url": "http://localhost:8080/upload/slike/",
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
                ["link", "unlink", "image", "video"],
                ["code"]
            ]
        };
    }
    AzurirajFaqComponent.prototype.ngOnInit = function () {
        this.selektovanoFaqPitanje = this.data.po;
        console.log("Izabrao FAQ pitanje za ažuriranje mečeva:");
        console.log(this.selektovanoFaqPitanje);
        this.pitanjeSadr = this.selektovanoFaqPitanje.pitanje;
        this.htmlContent = this.selektovanoFaqPitanje.odgovor;
        this.id = this.selektovanoFaqPitanje.id;
    };
    AzurirajFaqComponent.prototype.IzmeniFAQ = function () {
        var _this = this;
        this.odgovorSadr = this.htmlContent;
        if (this.htmlContent.length > 0) {
            var po = new __WEBPACK_IMPORTED_MODULE_2__modeli_PitanjeOdgovor__["a" /* PitanjeOdgovor */]();
            po.id = this.id;
            po.pitanje = this.pitanje1.value;
            po.odgovor = this.htmlContent;
            this.adminServis.IzmeniFaq(po).subscribe(function (odgovor) {
                console.log("Odg od servera za izmenu FAQ pitanja:");
                console.log(odgovor);
                if (odgovor == -1) {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                        type: 'error',
                        timer: 2600,
                        title: 'Pitanje FAQ nije uspešno izmenjeno!'
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                        type: 'success',
                        timer: 2600,
                        title: 'Pitanje FAQ uspešno izmenjeno!'
                    });
                    _this.dialogRef.close();
                }
            });
        }
    };
    AzurirajFaqComponent.prototype.greskaPitanje = function () {
        return this.pitanje1.hasError("required") ?
            "Morate da unesete pitanje!" :
            this.pitanje1.hasError("pattern") ? "Pitanje može da sadrži samo slova i brojeve!" : "";
    };
    AzurirajFaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-azuriraj-faq',
            template: __webpack_require__("./src/app/komponente/azuriraj-faq/azuriraj-faq.component.html"),
            styles: [__webpack_require__("./src/app/komponente/azuriraj-faq/azuriraj-faq.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__servisi_admin_service__["a" /* AdminService */], Object, __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]])
    ], AzurirajFaqComponent);
    return AzurirajFaqComponent;
}());



/***/ }),

/***/ "./src/app/komponente/azuriraj-turnir/azuriraj-turnir.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.div-greska\r\n{\r\n\tcolor: red;\r\n}\r\n\r\n.unos\r\n{\r\n\twidth: 33%;\r\n}\r\n\r\n.inli\r\n{\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.maxi\r\n{\r\n\tmax-width: 200px;\r\n}\r\n\r\n.poceo\r\n{\r\n\ttext-align: center;\r\n\tfont-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/komponente/azuriraj-turnir/azuriraj-turnir.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<mat-form-field>\t\t\t\t\n\t<mat-select placeholder=\"Izaberite tip turnira\" [formControl]=\"odabraniTipTurnira\" [(value)]=\"selectedTipTurnira\" name=\"tipTurnira\"  required>\n\t\t<mat-option *ngFor=\"let tipTurnira of tipoviTurnira\" [value]=\"tipTurnira.id\" >\n\t\t\t{{tipTurnira.naziv}}\n\t\t</mat-option>\n\t</mat-select>\n</mat-form-field>-->\n<div *ngIf=\"proveraKrajTurnira\">\n<form (ngSubmit)=\"AzurirajTurnir();NaAzur()\" >\n\n<mat-form-field>\t\t\t\t<!--Biranje tipa turnira-->\n\t<mat-select placeholder=\"Izaberite tip turnira\" [(value)]=\"selectedTipTurnira\">\n\t\t<mat-option value=\"1\">Liga</mat-option>\n\t\t<mat-option value=\"2\">Kup</mat-option>\n\t</mat-select>\n</mat-form-field>\n<!--<p>{{selected}}</p>-->\n\n<mat-form-field>\t\t\t\t<!--Unosenje naziva turnira/////[formControl]=\"naziv\"-->\n\t<input matInput placeholder=\"Naziv turnira\"   [(value)]=\"selectedNaziv\" [formControl]=\"nazivTurnira\">\n\t<!--<mat-error *ngIf=\"naziv.invalid\">{{ greskaNazivTurnira() }}</mat-error>-->\n</mat-form-field>\n\n\n<div *ngIf=\"proveraPocetakPrijava\" class=\"inli\">\n<mat-form-field class=\"unos\">\t\t\t<!--Datum pocekta prijave-->\n\t<input matInput [min]=\"minDatum\" [(value)]=\"selectedPocetakPrijava\" [matDatepicker]=\"pickerPocetakPrijava\" placeholder=\"Datum početka prijava\" [formControl]=\"datumPocetkaPrijava\" name=\"prijavePoc\"  >\n\t<mat-datepicker-toggle matSuffix [for]=\"pickerPocetakPrijava\" ></mat-datepicker-toggle>\n\t<mat-datepicker #pickerPocetakPrijava disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"unos\">\t\t\t<!--Sati pocetka prijava-->\n\t<mat-select placeholder=\"Vreme početka prijava (sati)\" [(value)]=\"selectedPocetakPrijavaSati\">\n\t\t<mat-option value=\"0\">0 h</mat-option>\t\n\t\t<mat-option value=\"1\">1 h</mat-option>\n\t\t<mat-option value=\"2\">2 h</mat-option>\n\t\t<mat-option value=\"3\">3 h</mat-option>\n\t\t<mat-option value=\"4\">4 h</mat-option>\n\t\t<mat-option value=\"5\">5 h</mat-option>\n\t\t<mat-option value=\"6\">6 h</mat-option>\n\t\t<mat-option value=\"7\">7 h</mat-option>\n\t\t<mat-option value=\"8\">8 h</mat-option>\n\t\t<mat-option value=\"9\">9 h</mat-option>\n\t\t<mat-option value=\"10\">10 h</mat-option>\n\t\t<mat-option value=\"11\">11 h</mat-option>\n\t\t<mat-option value=\"12\">12 h</mat-option>\n\t\t<mat-option value=\"13\">13 h</mat-option>\n\t\t<mat-option value=\"14\">14 h</mat-option>\n\t\t<mat-option value=\"15\">15 h</mat-option>\n\t\t<mat-option value=\"16\">16 h</mat-option>\n\t\t<mat-option value=\"17\">17 h</mat-option>\n\t\t<mat-option value=\"18\">18 h</mat-option>\n\t\t<mat-option value=\"19\">19 h</mat-option>\n\t\t<mat-option value=\"20\">20 h</mat-option>\n\t\t<mat-option value=\"21\">21 h</mat-option>\n\t\t<mat-option value=\"22\">22 h</mat-option>\n\t\t<mat-option value=\"23\">23 h</mat-option>\n\t</mat-select>\n</mat-form-field>\n\n<mat-form-field class=\"unos\" class=\"maxi\">\t\t\t<!--Minuti pocetka prijava-->\n\t<mat-select placeholder=\"Vreme početka prijava (minuti)\" [(value)]=\"selectedPocetakPrijavaMinuti\">\n\t\t<mat-option value=\"0\">0 min</mat-option>\t\n\t\t<mat-option value=\"10\">10 min</mat-option>\n\t\t<mat-option value=\"20\">20 min</mat-option>\n\t\t<mat-option value=\"30\">30 min</mat-option>\n\t\t<mat-option value=\"40\">40 min</mat-option>\n\t\t<mat-option value=\"50\">50 min</mat-option>\n\t</mat-select>\n</mat-form-field>\n</div>\n\n<div *ngIf=\"proveraKrajPrijava\" class=\"inli\">\n<mat-form-field class=\"unos\">\t\t\t<!--Datum zavrsetka prijave-->\n\t<input matInput [min]=\"minDatum\" [(value)]=\"selectedKrajPrijava\" [matDatepicker]=\"pickerKrajPrijava\" placeholder=\"Datum završetka prijava\" [formControl]=\"datumZavrsetkaPrijava\" name=\"prijavePoc\"  >\n\t<mat-datepicker-toggle matSuffix [for]=\"pickerKrajPrijava\" ></mat-datepicker-toggle>\n\t<mat-datepicker #pickerKrajPrijava disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field class=\"unos\">\t\t\t<!--Sati pocetka prijava-->\n\t<mat-select placeholder=\"Vreme završetka prijava (sati)\" [(value)]=\"selectedKrajPrijavaSati\">\n\t\t<mat-option value=\"0\">0 h</mat-option>\t\n\t\t<mat-option value=\"1\">1 h</mat-option>\n\t\t<mat-option value=\"2\">2 h</mat-option>\n\t\t<mat-option value=\"3\">3 h</mat-option>\n\t\t<mat-option value=\"4\">4 h</mat-option>\n\t\t<mat-option value=\"5\">5 h</mat-option>\n\t\t<mat-option value=\"6\">6 h</mat-option>\n\t\t<mat-option value=\"7\">7 h</mat-option>\n\t\t<mat-option value=\"8\">8 h</mat-option>\n\t\t<mat-option value=\"9\">9 h</mat-option>\n\t\t<mat-option value=\"10\">10 h</mat-option>\n\t\t<mat-option value=\"11\">11 h</mat-option>\n\t\t<mat-option value=\"12\">12 h</mat-option>\n\t\t<mat-option value=\"13\">13 h</mat-option>\n\t\t<mat-option value=\"14\">14 h</mat-option>\n\t\t<mat-option value=\"15\">15 h</mat-option>\n\t\t<mat-option value=\"16\">16 h</mat-option>\n\t\t<mat-option value=\"17\">17 h</mat-option>\n\t\t<mat-option value=\"18\">18 h</mat-option>\n\t\t<mat-option value=\"19\">19 h</mat-option>\n\t\t<mat-option value=\"20\">20 h</mat-option>\n\t\t<mat-option value=\"21\">21 h</mat-option>\n\t\t<mat-option value=\"22\">22 h</mat-option>\n\t\t<mat-option value=\"23\">23 h</mat-option>\n\t</mat-select>\n</mat-form-field>\n\n<mat-form-field class=\"unos\" class=\"maxi\">\t\t\t<!--Minuti pocetka prijava-->\n\t<mat-select placeholder=\"Vreme završetka prijava (minuti)\" [(value)]=\"selectedKrajPrijavaMinuti\">\n\t\t<mat-option value=\"0\">0 min</mat-option>\t\n\t\t<mat-option value=\"10\">10 min</mat-option>\n\t\t<mat-option value=\"20\">20 min</mat-option>\n\t\t<mat-option value=\"30\">30 min</mat-option>\n\t\t<mat-option value=\"40\">40 min</mat-option>\n\t\t<mat-option value=\"50\">50 min</mat-option>\n\t</mat-select>\n</mat-form-field>\n\n</div>\n\n<div *ngIf=\"proveraPocetakTurnira\" class=\"inli\">\n\t\t<mat-form-field class=\"unos\">\t\t\t<!--Datum zavrsetka prijave-->\n\t\t\t<input matInput [min]=\"minDatum\" [(value)]=\"selectedPocetakTurnira\" [matDatepicker]=\"pickerPocetakTurnira\" placeholder=\"Datum početka turnira\" [formControl]=\"datumPocetkaTurnira\" name=\"prijavePoc\"  >\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerPocetakTurnira\" ></mat-datepicker-toggle>\n\t\t\t<mat-datepicker #pickerPocetakTurnira disabled=\"false\"></mat-datepicker>\n\t\t</mat-form-field>\n\t\t\n\t\t<mat-form-field class=\"unos\">\t\t\t<!--Sati pocetka prijava-->\n\t\t\t<mat-select placeholder=\"Vreme završetka prijava (sati)\" [(value)]=\"selectedPocetakTurniraSati\">\n\t\t\t\t<mat-option value=\"0\">0 h</mat-option>\t\n\t\t\t\t<mat-option value=\"1\">1 h</mat-option>\n\t\t\t\t<mat-option value=\"2\">2 h</mat-option>\n\t\t\t\t<mat-option value=\"3\">3 h</mat-option>\n\t\t\t\t<mat-option value=\"4\">4 h</mat-option>\n\t\t\t\t<mat-option value=\"5\">5 h</mat-option>\n\t\t\t\t<mat-option value=\"6\">6 h</mat-option>\n\t\t\t\t<mat-option value=\"7\">7 h</mat-option>\n\t\t\t\t<mat-option value=\"8\">8 h</mat-option>\n\t\t\t\t<mat-option value=\"9\">9 h</mat-option>\n\t\t\t\t<mat-option value=\"10\">10 h</mat-option>\n\t\t\t\t<mat-option value=\"11\">11 h</mat-option>\n\t\t\t\t<mat-option value=\"12\">12 h</mat-option>\n\t\t\t\t<mat-option value=\"13\">13 h</mat-option>\n\t\t\t\t<mat-option value=\"14\">14 h</mat-option>\n\t\t\t\t<mat-option value=\"15\">15 h</mat-option>\n\t\t\t\t<mat-option value=\"16\">16 h</mat-option>\n\t\t\t\t<mat-option value=\"17\">17 h</mat-option>\n\t\t\t\t<mat-option value=\"18\">18 h</mat-option>\n\t\t\t\t<mat-option value=\"19\">19 h</mat-option>\n\t\t\t\t<mat-option value=\"20\">20 h</mat-option>\n\t\t\t\t<mat-option value=\"21\">21 h</mat-option>\n\t\t\t\t<mat-option value=\"22\">22 h</mat-option>\n\t\t\t\t<mat-option value=\"23\">23 h</mat-option>\n\t\t\t</mat-select>\n\t\t</mat-form-field>\n\t\t\n\t\t<mat-form-field class=\"unos\" class=\"maxi\">\t\t\t<!--Minuti pocetka prijava-->\n\t\t\t<mat-select placeholder=\"Vreme završetka prijava (minuti)\" [(value)]=\"selectedPocetakTurniraMinuti\">\n\t\t\t\t<mat-option value=\"0\">0 min</mat-option>\t\n\t\t\t\t<mat-option value=\"10\">10 min</mat-option>\n\t\t\t\t<mat-option value=\"20\">20 min</mat-option>\n\t\t\t\t<mat-option value=\"30\">30 min</mat-option>\n\t\t\t\t<mat-option value=\"40\">40 min</mat-option>\n\t\t\t\t<mat-option value=\"50\">50 min</mat-option>\n\t\t\t</mat-select>\n\t\t</mat-form-field>\n\t\t\n\t\t</div>\n\n\t\t<div class=\"inli\">\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Datum zavrsetka prijave-->\n\t\t\t\t\t<input matInput [min]=\"minDatum\" [(value)]=\"selectedKrajTurnira\" [matDatepicker]=\"pickerKrajTurnira\" placeholder=\"Datum završetka turnira\" [formControl]=\"datumZavrsetkaTurnira\" name=\"prijavePoc\"  >\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerKrajTurnira\" ></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #pickerKrajTurnira disabled=\"false\"></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\t\t\t\t\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Sati pocetka prijava-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme završetka prijava (sati)\" [(value)]=\"selectedPocetakTurniraSati\">\n\t\t\t\t\t\t<mat-option value=\"0\">0 h</mat-option>\t\n\t\t\t\t\t\t<mat-option value=\"1\">1 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"2\">2 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"3\">3 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"4\">4 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"5\">5 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"6\">6 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"7\">7 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"8\">8 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"9\">9 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"10\">10 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"11\">11 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"12\">12 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"13\">13 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"14\">14 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"15\">15 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"16\">16 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"17\">17 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"18\">18 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"19\">19 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"20\">20 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"21\">21 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"22\">22 h</mat-option>\n\t\t\t\t\t\t<mat-option value=\"23\">23 h</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t\t\n\t\t\t\t<mat-form-field class=\"unos\" class=\"maxi\">\t\t\t<!--Minuti pocetka prijava-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme završetka prijava (minuti)\" [(value)]=\"selectedPocetakTurniraMinuti\">\n\t\t\t\t\t\t<mat-option value=\"0\">0 min</mat-option>\t\n\t\t\t\t\t\t<mat-option value=\"10\">10 min</mat-option>\n\t\t\t\t\t\t<mat-option value=\"20\">20 min</mat-option>\n\t\t\t\t\t\t<mat-option value=\"30\">30 min</mat-option>\n\t\t\t\t\t\t<mat-option value=\"40\">40 min</mat-option>\n\t\t\t\t\t\t<mat-option value=\"50\">50 min</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\t\t\t\tAžuriraj turnir\n\t\t\t\t\t</button>\n\t\t\t\n\t\t\t\t</form>\n\n</div>\n<div *ngIf=\"!proveraKrajTurnira\" class=\"poceo\">\n\tTurnir se završio!\n</div>"

/***/ }),

/***/ "./src/app/komponente/azuriraj-turnir/azuriraj-turnir.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AzurirajTurnirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modeli_Turnir__ = __webpack_require__("./src/app/modeli/Turnir.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AzurirajTurnirComponent = /** @class */ (function () {
    function AzurirajTurnirComponent(dialogRef, data, adminService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.minDatum = Date.now();
        //-------------------------------------------------------------------------
        this.datumPocetkaPrijava = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]);
        this.datumZavrsetkaPrijava = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]);
        this.datumPocetkaTurnira = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]);
        this.datumZavrsetkaTurnira = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required]);
        this.nazivTurnira = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required);
        //------------------------------------------------------------------------
        this.proveraPocetakPrijava = false;
        this.proveraKrajPrijava = false;
        this.proveraPocetakTurnira = false;
        this.proveraKrajTurnira = false;
        //--------------------------------------------------------------------------
        this.igre = []; //igre koje se uzimaju iz baze
        this.tipoviTurnira = []; //tipovi turnira koji se uzimaju iz baze
    }
    AzurirajTurnirComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 3000,
        });
    };
    AzurirajTurnirComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.turnir = this.data.turnir;
        this.selectedNaziv = this.turnir.nazivTurnira;
        this.selectedPocetakPrijava = new Date(this.turnir.pocetakPrijava * 1000);
        this.selectedKrajPrijava = new Date(this.turnir.krajPrijava * 1000);
        this.selectedPocetakTurnira = new Date(this.turnir.datumVremePocetka * 1000);
        this.selectedKrajTurnira = new Date(this.turnir.datumVremeZavrsetka * 1000);
        //-------------------------------------------------------------------------
        if (this.selectedPocetakPrijava >= Date.now()) {
            this.proveraPocetakPrijava = true;
        }
        if (this.selectedKrajPrijava >= Date.now()) {
            this.proveraKrajPrijava = true;
        }
        if (this.selectedPocetakTurnira >= Date.now()) {
            this.proveraPocetakTurnira = true;
        }
        if (this.selectedKrajTurnira >= Date.now()) {
            this.proveraKrajTurnira = true;
        }
        //--------------------------------------------------------------------------
        this.selectedPocetakPrijavaSati = this.selectedPocetakPrijava.getHours().toString();
        this.selectedKrajPrijavaSati = this.selectedKrajPrijava.getHours().toString();
        ;
        this.selectedPocetakTurniraSati = this.selectedPocetakTurnira.getHours().toString();
        ;
        this.selectedKrajTurniraSati = this.selectedKrajTurnira.getHours().toString();
        ;
        //---------------------------------------------------------------------------
        this.selectedPocetakPrijavaMinuti = this.selectedPocetakPrijava.getMinutes().toString();
        this.selectedKrajPrijavaMinuti = this.selectedKrajPrijava.getMinutes().toString();
        this.selectedPocetakTurniraMinuti = this.selectedPocetakTurnira.getMinutes().toString();
        this.selectedKrajTurniraMinuti = this.selectedKrajTurnira.getMinutes().toString();
        //----------------------------------------------------------------------------
        this.adminService.DajSveIgre().subscribe(function (igre) { return _this.igre = igre; });
        this.adminService.DajTipoveTurnira().subscribe(function (tipoviTurnira) { return _this.tipoviTurnira = tipoviTurnira; });
        this.adminService.DajTurnirZaId(this.turnir.id).subscribe(function (turnir) {
            _this.turnirBaza = turnir;
            _this.selectedTipTurnira = _this.turnirBaza.idTipaTurnira.toString();
            console.log(_this.selectedTipTurnira);
        });
    };
    AzurirajTurnirComponent.prototype.NaAzur = function () {
        this.dialogRef.close();
    };
    AzurirajTurnirComponent.prototype.AzurirajTurnir = function () {
        var azuriraniTurnir = new __WEBPACK_IMPORTED_MODULE_3__modeli_Turnir__["a" /* Turnir */]();
        azuriraniTurnir.id = this.turnir.id;
        azuriraniTurnir.idTipaTurnira = parseInt(this.selectedTipTurnira);
        if (this.nazivTurnira.value == "") {
            azuriraniTurnir.naziv = this.selectedNaziv;
        }
        else {
            azuriraniTurnir.naziv = this.nazivTurnira.value;
            console.log(azuriraniTurnir.naziv);
        }
        azuriraniTurnir.idIgre = this.turnirBaza.idIgre;
        //console.log(this.datumPocetkaPrijava.value);
        //console.log(this.selectedPocetakPrijava);
        if (this.datumPocetkaPrijava.value == "") {
            this.pocetakPrijvaSekunde = this.selectedPocetakPrijava.getTime() / 1000;
        }
        else {
            this.pocetakPrijvaSekunde = this.datumPocetkaPrijava.value.getTime() / 1000;
            this.pocetakPrijvaSekunde += this.selectedPocetakPrijavaSati * 3600 + this.selectedPocetakPrijavaMinuti * 60;
        }
        //-------------------------------------------------------
        if (this.datumZavrsetkaPrijava.value == "") {
            this.krajPrijavaSekunde = this.selectedKrajPrijava.getTime() / 1000;
        }
        else {
            this.krajPrijavaSekunde = this.datumZavrsetkaPrijava.value.getTime() / 1000;
            this.krajPrijavaSekunde += this.selectedKrajPrijavaSati * 3600 + this.selectedKrajPrijavaMinuti * 60;
        }
        //----------------------------------------------------------
        if (this.datumPocetkaTurnira.value == "") {
            this.pocetakTurniraSekunde = this.selectedPocetakTurnira.getTime() / 1000;
        }
        else {
            this.pocetakTurniraSekunde = this.datumPocetkaTurnira.value.getTime() / 1000;
            this.pocetakTurniraSekunde += this.selectedPocetakTurniraSati * 3600 + this.selectedPocetakTurniraMinuti * 60;
        }
        //------------------------------------------------------------------
        if (this.datumZavrsetkaTurnira.value == "") {
            this.krajTurniraSekunde = this.selectedKrajTurnira.getTime() / 1000;
        }
        else {
            this.krajTurniraSekunde = this.datumZavrsetkaTurnira.value.getTime() / 1000;
            console.log(this.krajTurniraSekunde);
            console.log(this.datumZavrsetkaTurnira.value);
            this.krajTurniraSekunde += this.selectedKrajTurniraSati * 3600 + this.selectedKrajTurniraMinuti * 60;
        }
        //----------------------------------------------------------------------
        azuriraniTurnir.pocetakPrijava = this.pocetakPrijvaSekunde;
        azuriraniTurnir.krajPrijava = this.krajPrijavaSekunde;
        azuriraniTurnir.datumVremePocetka = this.pocetakTurniraSekunde;
        azuriraniTurnir.datumVremeZavrsetka = this.krajTurniraSekunde;
        //console.log(azuriraniTurnir);
        /*if(this.selectedPocetakPrijava > this.pocetakPrijvaSekunde || this.selectedKrajPrijava > this.krajPrijavaSekunde || this.selectedPocetakTurnira > this.pocetakTurniraSekunde || this.selectedKrajTurnira > this.krajTurniraSekunde)
        {
            this.openSnackBar("NE MOŽETE IZABRATI DATUM MANJI OD TRENUTNOG!","");
            swal({
          type: 'error',
          title: 'GREŠKA: Ne možete izabrati datum manji od trenutnog!'
        });
        }
        else */ if (this.pocetakPrijvaSekunde < this.krajPrijavaSekunde &&
            this.krajPrijavaSekunde < this.pocetakTurniraSekunde &&
            this.pocetakTurniraSekunde < this.krajTurniraSekunde) {
            this.adminService.AzurirajTurnir(azuriraniTurnir).subscribe();
        }
        else {
            //this.openSnackBar("LOŠE IZABRANI DATUMI!","");
            __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                type: 'error',
                title: 'Loše izabrani datumi!'
            });
        }
    };
    AzurirajTurnirComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-azuriraj-turnir',
            template: __webpack_require__("./src/app/komponente/azuriraj-turnir/azuriraj-turnir.component.html"),
            styles: [__webpack_require__("./src/app/komponente/azuriraj-turnir/azuriraj-turnir.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSnackBar */]])
    ], AzurirajTurnirComponent);
    return AzurirajTurnirComponent;
}());



/***/ }),

/***/ "./src/app/komponente/banovanje/banovanje.component.css":
/***/ (function(module, exports) {

module.exports = "body\r\n{\r\n\ttext-align: center;\r\n}"

/***/ }),

/***/ "./src/app/komponente/banovanje/banovanje.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!indikatorBana\">\n<form (ngSubmit)=\"BanujKorisnika()\">\n\t<mat-form-field>\n\t\t<mat-select placeholder=\"Izaberite vreme\" [formControl]=\"duzinaBana\" required>\n\t\t  <mat-option value=\"86400\">1 dan</mat-option>\n\t\t  <mat-option value=\"604800\">7 dana</mat-option>\n\t\t  <mat-option value=\"2592000\">30 dana</mat-option>\n\t\t  <mat-option value=\"33333333333\">Trajno</mat-option>\n\t\t</mat-select>\n\t  </mat-form-field>\n\n\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\tBanuj korisnika\n\t</button>\n</form>\n</div>\n<div *ngIf=\"indikatorBana\">\n\t<p>Korisnik je banovan do {{korisnik.banovan * 1000 | date:\"dd.MM.yyyy\"}}</p>\n\t<button mat-button (click)=\"UkloniBan()\">Ukloni ban</button>\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/banovanje/banovanje.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BanovanjeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BanovanjeComponent = /** @class */ (function () {
    function BanovanjeComponent(data, adminService, dialogRef) {
        this.data = data;
        this.adminService = adminService;
        this.dialogRef = dialogRef;
        this.message = "";
        this.duzinaBana = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]);
    }
    BanovanjeComponent.prototype.ngOnInit = function () {
        this.korisnik = this.data.korisnik;
        if (this.korisnik.banovan * 1000 < Date.now()) {
            this.indikatorBana = false;
        }
        else {
            this.indikatorBana = true;
        }
        console.log(this.korisnik);
    };
    BanovanjeComponent.prototype.NaAzur = function () {
        this.dialogRef.close();
    };
    BanovanjeComponent.prototype.BanujKorisnika = function () {
        this.korisnik.banovan = Math.floor(Date.now() / 1000);
        console.log(Date.now());
        this.korisnik.banovan += parseInt(this.duzinaBana.value);
        console.log(this.duzinaBana.value);
        console.log(this.korisnik.banovan);
        this.datum = new Date(this.korisnik.banovan * 1000);
        var mesec = this.datum.getMonth() + 1;
        if (this.korisnik.banovan > 33333333333) {
            this.message = "Poštovani/a " + this.korisnik.ime + ", obaveštavamo vas da ste trajno banovani sa našeg web sajta.";
        }
        else {
            this.message = "Poštovani/a " + this.korisnik.ime + ", obaveštavamo vas da ste banovani do " + this.datum.getDate() + "." + mesec + "." + this.datum.getFullYear();
        }
        //this.message = "Poštovani/a " + this.korisnik.ime + ", obaveštavamo vas da ste banovani do " + this.datum.getDate() + "." + mesec + "." + this.datum.getFullYear();
        this.korisnik.banPoruka = this.message;
        console.log(this.korisnik);
        if (this.duzinaBana.valid) {
            this.adminService.BanujKorisnika(this.korisnik).subscribe();
            this.indikatorBana = true;
            this.NaAzur();
        }
    };
    BanovanjeComponent.prototype.UkloniBan = function () {
        this.korisnik.banovan = 0;
        this.message = "Poštovani/a " + this.korisnik.ime + ", obaveštavamo vas da vam je uklonjena zabrana sa našeg sajta.";
        this.korisnik.banPoruka = this.message;
        this.adminService.UkloniBan(this.korisnik).subscribe();
        this.indikatorBana = false;
    };
    BanovanjeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-banovanje',
            template: __webpack_require__("./src/app/komponente/banovanje/banovanje.component.html"),
            styles: [__webpack_require__("./src/app/komponente/banovanje/banovanje.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_3__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */]])
    ], BanovanjeComponent);
    return BanovanjeComponent;
}());



/***/ }),

/***/ "./src/app/komponente/email/email.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\t<mat-card class=\"kartica\">\n    <mat-card-header>\n      <div mat-card-avatar>\n        <mat-icon aria-label=\"Profil\" class=\"profilIkonicaBox\">face</mat-icon>\n      </div>\n      <mat-card-title>Slanje emaila</mat-card-title>\n    </mat-card-header>\n\t\t<mat-card-content>\n\t\t<form (ngSubmit)=\"PosaljiMail()\">\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"e-mail adresa\" [formControl]=\"mail\" required>\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"subject\" [formControl]=\"subject\" required>\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput placeholder=\"poruka\" [formControl]=\"poruka\" required>\n\t\t\t</mat-form-field>\n\n\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\t\t\tPosalji mail\n\t\t\t</button>\n\t\t</form>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modeli_Mail__ = __webpack_require__("./src/app/modeli/Mail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
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
    function EmailComponent(adminService, snackBar) {
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.mail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.subject = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.poruka = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    EmailComponent.prototype.PosaljiMail = function () {
        var mail = new __WEBPACK_IMPORTED_MODULE_2__modeli_Mail__["a" /* Mail */]();
        mail.mail = this.mail.value;
        mail.subject = this.subject.value;
        mail.poruka = this.poruka.value;
        console.log(mail);
        this.adminService.PosaljiMail(mail).subscribe();
        //this.openSnackBar('Email uspešno poslat!', '');
        __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
            type: 'success',
            title: 'Email uspešno poslat!',
            showConfirmButton: false,
            timer: 2600
        });
    };
    EmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email',
            template: __webpack_require__("./src/app/komponente/email/email.component.html"),
            styles: [__webpack_require__("./src/app/komponente/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatSnackBar */]])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/komponente/faq/faq.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n\tmargin: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 120%;\r\n}\r\n\r\n.sirina\r\n{\r\n\twidth: 200px;\r\n}\r\n\r\n.mat-table\r\n{\r\n\toverflow: auto;\r\n\tmax-height: 500px;\r\n}\r\n\r\n#editor\r\n{\r\n\tmargin-top: 20px;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n#editor p\r\n{\r\n\tcolor: gray;\r\n}\r\n\r\nmat-cell\r\n{\r\n\tpadding: 5px;\r\n}\r\n\r\n.skupi\r\n{\r\n\twidth: 72px;\r\n}"

/***/ }),

/***/ "./src/app/komponente/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\t<mat-card class=\"kartica\">\n\t\t<mat-card-header><h1>FAQ</h1></mat-card-header>\n\t\t<mat-card-content>\n\t\t\t<mat-tab-group>\n\t\t\t\t<mat-tab label=\"faq\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Pretraga\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-table #table [dataSource]=\"dataSource\" class=\"mat-table\"  matSort>\n\n\t\t\t\t\t\t<!-- Pitanje Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"pitanje\" class=\"sirina\">\n\t\t\t\t\t\t  <mat-header-cell *matHeaderCellDef> Pitanje </mat-header-cell>\n\t\t\t\t\t\t  <mat-cell *matCellDef=\"let po\">{{ po.pitanje }}</mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Odgovor Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"odgovor\" class=\"sirina\">\n\t\t\t\t\t\t  <mat-header-cell *matHeaderCellDef class=\"sirina\"> Odgovor </mat-header-cell>\n\t\t\t\t\t\t  <mat-cell *matCellDef=\"let po\" class=\"sirina\">{{ po.odgovor }}</mat-cell>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<!-- Obriši pitanje Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"obrisi\" class=\"skupi\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"skupi\"> Obriši </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let po\" class=\"skupi\">\n\t\t\t\t\t\t\t\t<button mat-icon-button=\"cancel\" (click)=\"ObrisiPitanje(po)\" class=\"skupi\"><mat-icon class=\"skupi\"> cancel </mat-icon></button>\n\t\t\t\t\t\t\t</mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Izmeni pitanje Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"izmeni\" class=\"skupi\">\n\t\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"skupi\"> Izmeni </mat-header-cell>\n\t\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let po\" class=\"skupi\">\n\t\t\t\t\t\t\t\t\t<button mat-icon-button=\"edit\" (click)=\"IzmeniFAQ(po)\" class=\"skupi\"><mat-icon class=\"skupi\">edit</mat-icon></button>\n\t\t\t\t\t\t\t\t</mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!--  Neka podešavanja za tabelu  -->\n\t\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\t\t  </mat-table>\n\n\t\t\t\t\t  <mat-paginator #paginator\n                 \t\t[pageSize]=\"5\"\n                 \t\t[pageSizeOptions]=\"[5, 10, 20]\"\n                 \t\t[showFirstLastButtons]=\"true\">\n\t\t\t\t\t\t</mat-paginator>\n\t\t\t\t\t</mat-tab>\n\t\t\t  </mat-tab-group><br>\n\t\t\t  <h2>Dodavanje pitanja i odgovora</h2>\n\t\t\t  <form (ngSubmit)=\"DodajFAQ()\"> \t\t\t<!-- FORMA -->\n\t\t\t\t<mat-form-field>\t\t\t\t\t\t\t<!-- Pitanje -->\n\t\t\t\t\t<textarea matInput [formControl]=\"pitanje\" placeholder=\"Upišite pitanje\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"10\" required></textarea>\n\t\t\t\t\t<mat-error *ngIf=\"pitanje.invalid\">{{ greskaPitanje() }}</mat-error><br/><br/>\n\t\t\t\t</mat-form-field><br/>\n\t\t\t\t<div id=\"editor\">\t\t\t\t\t\t\t<!-- Odgovor - editor -->\n\t\t\t\t\t<p>Upišite odgovor*</p>\n\t\t\t\t\t<app-ngx-editor [placeholder]=\"'Unesite tekst ovde...'\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" [ngModelOptions]=\"{standalone: true}\" height=\"300px\" minHeight=\"200px\"></app-ngx-editor>\n\t\t\t\t</div>\n\t\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\"> \t\t<!-- Dugme Dodaj -->\n\t\t\t\t\tDodaj\n\t\t\t\t</button>\n\t\t\t  </form>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/komponente/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modeli_PitanjeOdgovor__ = __webpack_require__("./src/app/modeli/PitanjeOdgovor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__azuriraj_faq_azuriraj_faq_component__ = __webpack_require__("./src/app/komponente/azuriraj-faq/azuriraj-faq.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FaqComponent = /** @class */ (function () {
    function FaqComponent(adminService, dialog) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.pitanjaIOdgovori = [];
        this.displayedColumns = ['pitanje', 'odgovor', 'obrisi', 'izmeni'];
        this.pitanje = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["k" /* Validators */].pattern("[' 'a-zA-z0-9\?]{1,}")]);
        this.htmlContent = "";
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "300px",
            "minHeight": "0",
            "width": "auto",
            "minWidth": "0",
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "url": "http://localhost:8080/upload/slike/",
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
                ["link", "unlink", "image", "video"],
                ["code"]
            ]
        };
    }
    FaqComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.DajSvaPitanjaIOdgovore().subscribe(function (odgovor) {
            _this.pitanjaIOdgovori = odgovor;
            console.log("Sva pitanja i odgovori:");
            console.log(_this.pitanjaIOdgovori);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatTableDataSource */](_this.pitanjaIOdgovori);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    FaqComponent.prototype.IzmeniFAQ = function (po) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__azuriraj_faq_azuriraj_faq_component__["a" /* AzurirajFaqComponent */], {
            width: '1000px',
            data: {
                po: po
            }
        });
    };
    FaqComponent.prototype.DodajFAQ = function () {
        if (this.pitanje.valid && this.htmlContent.length > 0) {
            var po = new __WEBPACK_IMPORTED_MODULE_1__modeli_PitanjeOdgovor__["a" /* PitanjeOdgovor */]();
            po.pitanje = this.pitanje.value;
            po.odgovor = this.htmlContent;
            this.adminService.DodajFaq(po).subscribe(function (odgovor) {
                console.log(odgovor);
                if (odgovor != -1) {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                        type: 'success',
                        title: 'Uspešno dodato pitanje FAQ!',
                        showConfirmButton: true,
                        timer: 2600
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                        type: 'error',
                        title: 'Nije uspelo dodavanje!',
                        timer: 2600
                    });
                }
            });
        }
    };
    FaqComponent.prototype.ObrisiPitanje = function (po) {
        console.log("Obrisi");
        console.log(po);
        this.adminService.ObrisiPitanje(po).subscribe(function (odgovor) {
            console.log("Odgovor od servera za brisanje pitanja FAQ:");
            console.log(odgovor);
            if (odgovor != -1) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    type: 'success',
                    title: 'Pitanje je obrisano!',
                    showConfirmButton: true,
                    timer: 2600
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    type: 'error',
                    title: 'Pitanje nije uspešno obrisano!',
                    showConfirmButton: true,
                    timer: 2600
                });
            }
        });
    };
    FaqComponent.prototype.greskaPitanje = function () {
        return this.pitanje.hasError("required") ?
            "Morate da unesete pitanje!" :
            this.pitanje.hasError("pattern") ? "Pitanje može da sadrži samo slova i brojeve!" : "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSort */])
    ], FaqComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatPaginator */])
    ], FaqComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatTable */])
    ], FaqComponent.prototype, "table", void 0);
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-faq',
            template: __webpack_require__("./src/app/komponente/faq/faq.component.html"),
            styles: [__webpack_require__("./src/app/komponente/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDialog */]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/komponente/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "mat-toolbar, .mat-toolbar-multiple-rows\r\n{\r\n  height: 52px !important;\r\n  min-height: 52px !important;\r\n}\r\n\r\n.ikonica\r\n{\r\n  padding: 0 14px;\r\n}\r\n\r\n.razdelnik\r\n{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n#logoText\r\n{\r\n  text-decoration: none;\r\n  color: white;\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin-left: 6px;\r\n}\r\n\r\n#adminOlimijada\r\n{\r\n  font-size: 12px;\r\n  background-color: yellow;\r\n  color: black;\r\n}\r\n\r\n#adminOlimijada:hover\r\n{\r\n  background-color: white;\r\n  font-size: 14px;\r\n  -webkit-transition-duration: 0.6s;\r\n          transition-duration: 0.6s;\r\n}\r\n\r\nul, li\r\n{\r\n  border: 0;\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  list-style: none;\r\n}\r\n\r\nhr\r\n{\r\n  margin-left: -38px;\r\n  color: darkgrey;\r\n}\r\n\r\n.linkDugme\r\n{\r\n  text-decoration: none;\r\n  color: cadetblue;\r\n}\r\n\r\n.faksDugme\r\n{\r\n  font-size: 96%;\r\n}\r\n\r\n.sidebaroviKontejner\r\n{\r\n  top: 52px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  position: absolute;\r\n  background: none;\r\n}\r\n\r\n.buttonMeni {\r\n  width: 100%;\r\n  text-align: left;\r\n  padding-top: 6px;\r\n  padding-bottom: 6px;\r\n}\r\n\r\nmat-sidenav\r\n{\r\n  width: 248px;\r\n}\r\n\r\n.odjava button\r\n{\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/komponente/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n\n    <mat-toolbar color=\"primary\">\n        <mat-toolbar-row class=\"mat-elevation-z6\">\n\n            <button mat-mini-fab (click)=\"sidenav.toggle()\" *ngIf=\"authService.DaLiJePrijavljen()\">\n                <mat-icon aria-label=\"Dugme za leviSidebarMeni\">menu</mat-icon>\n            </button>\n            <span><a href=\"/\" id=\"logoText\">Olimijada.<span id=\"adminOlimijada\">admin</span></a></span>\n            <span class=\"razdelnik\"></span>\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>apps</mat-icon></button>\n            <mat-menu class=\"faksMeni\" #menu=\"matMenu\" xPosition=\"after\">\n                <a href=\"https://imi.pmf.kg.ac.rs\" class=\"linkDugme\"><button mat-menu-item class=\"faksDugme\">Institut za Informatiku i Matematiku</button></a>\n                <a href=\"https://www.pmf.kg.ac.rs\" class=\"linkDugme\"><button mat-menu-item class=\"faksDugme\">Prirodno-matematički fakultet</button></a>\n            </mat-menu>\n\n            <mat-icon class=\"ikonica\">notifications</mat-icon>\n\n            <button mat-button (click)=\"Odjava()\" *ngIf=\"authService.DaLiJePrijavljen()\">\n                <span class=\"ikonica\">Odjava</span>\n            </button>\n\n        </mat-toolbar-row>\n    </mat-toolbar>\n</div>\n\n\n\n<div>\n    <mat-sidenav-container class=\"sidebaroviKontejner\">\n\n    <mat-sidenav #sidenav mode=\"side\" class=\"leviSidebar\" class=\"mat-elevation-z6\">\n        <nav>\n            <button mat-button routerLink=\"/\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                <mat-icon>home</mat-icon>\n                <span style=\"margin-left: 6px;\">Početna</span>\n            </button>\n            <button mat-button routerLink=\"/turniri\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                <mat-icon>extension</mat-icon>\n                <span style=\"margin-left: 6px;\">Turniri</span>\n            </button>\n            <button mat-button routerLink=\"/igre\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                <mat-icon>videogame_asset</mat-icon>\n                <span style=\"margin-left: 6px;\">Igre</span>\n\t\t\t</button>\n\t\t\t<button mat-button routerLink=\"/prikazKorisnika\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n\t\t\t\t<mat-icon>supervisor_account</mat-icon>\n\t\t\t\t<span style=\"margin-left: 6px;\">Korisnici</span>\n\t\t\t</button>\n            <button mat-button routerLink=\"/dodajAdmina\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                <mat-icon>face</mat-icon>\n                <span style=\"margin-left: 6px;\">Administratori</span>\n\t\t\t</button>\n\t\t\t<button mat-button routerLink=\"/faq\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                <mat-icon>public</mat-icon>\n                <span style=\"margin-left: 6px;\">FAQ</span>\n            </button>\n            <button mat-button routerLink=\"/slanjeMejla\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                <mat-icon>mail_outline</mat-icon>\n                 <span style=\"margin-left: 6px;\">demo:Slanje mejla</span>\n            </button>\n            <button mat-button routerLink=\"/slanjeMejla\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                  <mat-icon>bug_report</mat-icon>\n                  <span style=\"margin-left: 6px;\">demo:Botovi</span>\n            </button>\n            <button mat-button routerLink=\"/slanjeMejla\" class=\"buttonMeni\" (click)=\"ZatvoriUslovnoSidebar();\">\n                  <mat-icon>message</mat-icon>\n                  <span style=\"margin-left: 6px;\">demo:Poruke</span> <!---- misli se na poruke iz kontakt forme ---->\n            </button>\n\n            <!--<div class=\"odjava\" *ngIf=\"authService.DaLiJePrijavljen()\">\n              <button mat-button class=\"odjava\" (click)=\"Odjava();\">\n                <mat-icon class=\"ikonica\">highlight_off</mat-icon>\n                <span class=\"ikonica\">odjava</span>\n              </button>\n            </div>-->\n        </nav>\n    </mat-sidenav>\n\n        <mat-sidenav #desniSidenav [mode]=\"mode.value\" position=\"end\">\n\t\t    \t<app-prijava></app-prijava>\n        </mat-sidenav>\n\n        <mat-sidenav-content>\n            <router-outlet></router-outlet>\n        </mat-sidenav-content>\n\n    </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servisi_auth_service__ = __webpack_require__("./src/app/servisi/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
    function HeaderComponent(authService, adminService) {
        this.authService = authService;
        this.adminService = adminService;
        this.mode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('over');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].serverUrl);
        if (this.authService.DaLiJePrijavljen()) {
            if (window.innerWidth < 900) {
                this.myNav.close();
            }
            else {
                this.myNav.open();
            }
        }
        else {
            this.myNav.close();
        }
    };
    HeaderComponent.prototype.ResponsiveSidenav = function () {
        if (this.authService.DaLiJePrijavljen() == false || window.innerWidth < 900) {
            this.myNav.close();
            console.log('close');
        }
        else {
            this.myNav.open();
            console.log('open');
        }
    };
    HeaderComponent.prototype.Odjava = function () {
        this.authService.Odjavi();
        //this.nakonOdjave.emit(true);
        window.location.replace('/');
    };
    HeaderComponent.prototype.ZatvoriUslovnoSidebar = function () {
        if (window.innerWidth < 900) {
            this.myNav.close();
            console.log('close');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "prijavljen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatSidenav */])
    ], HeaderComponent.prototype, "myNav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "ResponsiveSidenav", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/komponente/header/header.component.html"),
            styles: [__webpack_require__("./src/app/komponente/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__servisi_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__["a" /* AdminService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/komponente/igre/igre.component.css":
/***/ (function(module, exports) {

module.exports = ".divZaIgre\r\n{\r\n    width: 96%;\r\n    display: table;\r\n    margin: 0 auto;\r\n    margin-top: 18px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/komponente/igre/igre.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"divZaIgre\">\r\n<mat-accordion>\r\n\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <h3>Kreiraj novu igru</h3>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <app-kreiranje-igara></app-kreiranje-igara>\r\n  </mat-expansion-panel>\r\n\r\n\r\n\r\n  <mat-expansion-panel (opened)=\"true\" [expanded]=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <h3>Spisak igara</h3>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <app-prikaz-igara></app-prikaz-igara>\r\n  </mat-expansion-panel>\r\n\r\n</mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/komponente/igre/igre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IgreComponent; });
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

var IgreComponent = /** @class */ (function () {
    function IgreComponent() {
    }
    IgreComponent.prototype.ngOnInit = function () {
    };
    IgreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-igre',
            template: __webpack_require__("./src/app/komponente/igre/igre.component.html"),
            styles: [__webpack_require__("./src/app/komponente/igre/igre.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IgreComponent);
    return IgreComponent;
}());



/***/ }),

/***/ "./src/app/komponente/kreiranje-igara/kreiranje-igara.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n#fab-upload, #icon-upload {\r\n\twidth: 40px;\r\n\theight: 40px;\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite datoteku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.nazivIgreVecPostoji\r\n{\r\n\tcolor: red;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/kreiranje-igara/kreiranje-igara.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"DodajIgru()\">\t\t\t<!-- FORMA -->\n\t<mat-form-field> \t\t\t\t\t<!-- Naziv Igre -->\n\t\t<input matInput [formControl]=\"naziv\" placeholder=\"Naziv Igre\" [ngClass]=\"{ 'nazivIgreVecPostoji' : postojiUnetaIgra == true}\" required>\n\t\t<mat-error *ngIf=\"naziv.invalid\">{{ greskaNazivIgre() }}</mat-error>\n\t</mat-form-field>\n\n\t<app-ngx-editor [placeholder]=\"'Unesite tekst ovde...'\" [spellcheck]=\"true\" [(ngModel)]=\"htmlContent\" [ngModelOptions]=\"{standalone: true}\" height=\"300px\" minHeight=\"200px\"></app-ngx-editor>\n\n\t\t\t\t\t<!-- upload fajla sa pravilima -->\n\t<input type=\"file\" style=\"display: none\" name=\"fajlUpload\" id=\"fajlUpload\" class=\"fajlUpload\" #fajlUpload (change)=\"PostaviFajl($event)\" accept=\"image/*\" />\n\t<button mat-mini-fab (click)=\"fajlUpload.click()\" id=\"fab-upload\" style=\"background-color: purple;\">\n\t\t<mat-icon id=\"icon-upload\">file_upload</mat-icon>\n\t</button>\n\t<span style=\"width: auto; width: 100px; color: red;\" *ngIf=\"fajlZaUpload == null\">\n\t\tNiste odabrali fajl\n\t</span>\n\t<span style=\"width: auto; width: 100px;\" *ngIf=\"fajlZaUpload != null\">\n\t\t{{ fajlZaUpload.name }}\n\t</span>\n\t<mat-icon class=\"ikonica\" *ngIf=\"uspesno\" style=\"color:green\">done</mat-icon>\n\t<mat-icon class=\"ikonica\" *ngIf=\"neuspesno\" style=\"color: red\">clear</mat-icon>\n\n\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\tKreiraj igru\n\t</button>\n</form>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
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
    function KreiranjeIgaraComponent(adminService, pravilaService, snackBar) {
        this.adminService = adminService;
        this.pravilaService = pravilaService;
        this.snackBar = snackBar;
        this.htmlContent = "";
        this.editorConfig = {
            "editable": true,
            "spellcheck": true,
            "height": "300px",
            "minHeight": "0",
            "width": "auto",
            "minWidth": "0",
            "translate": "yes",
            "enableToolbar": true,
            "showToolbar": true,
            "url": "http://localhost:8080/upload/slike/",
            "placeholder": "Enter text here...",
            "imageEndPoint": "",
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
                ["link", "unlink", "image", "video"],
                ["code"]
            ]
        };
        // kontrole za unos potrebnih podataka
        this.naziv = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* Validators */].pattern("[' 'a-zA-z0-9]{1,}")]);
    }
    KreiranjeIgaraComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, { duration: 2000 });
    };
    KreiranjeIgaraComponent.prototype.ngOnInit = function () {
        this.nijeOdabranFajl = false;
        this.fajlZaUpload = null;
        this.uspesno = false;
        this.neuspesno = false;
        this.postojiUnetaIgra = false;
    };
    // dodavanje NOVE igre
    KreiranjeIgaraComponent.prototype.DodajIgru = function () {
        var _this = this;
        // ako je izabran fajl sa pravilima
        // i unet je pravilan naziv za igru
        if (this.naziv.valid == true && this.fajlZaUpload != null) {
            var igra_1 = new __WEBPACK_IMPORTED_MODULE_4__modeli_Igra__["a" /* Igra */](); // nova igra
            var igre = []; // niz igara - za proveru postojnja nove igre
            // uzimamo iz baze sve igre sa unetim imenom
            this.pravilaService.ProveriNazivIgre(this.naziv.value).subscribe(function (odgovor) {
                igre = odgovor;
                if (igre.length == 0) {
                    igra_1.fajlSlika = _this.fajlZaUpload.name;
                    igra_1.naziv = _this.naziv.value;
                    _this.postojiUnetaIgra = false;
                    // prosledjujemo servisu objekat Igra - kao novu igru i fajl koji smo ucitali
                    _this.pravilaService.DodajIgru(igra_1, _this.htmlContent, _this.fajlZaUpload).subscribe(function (odgovor) {
                        if (odgovor == 1) {
                            _this.uspesno = true;
                            // this.neuspesno = false;
                            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                                type: 'success',
                                title: 'Igra je uspešno kreirana!',
                                showConfirmButton: false,
                                timer: 2600
                            });
                            //this.openSnackBar('Igra je uspešno kreirana!', '');
                        }
                        else {
                            _this.neuspesno = true;
                            // this.uspesno = false;
                            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                                type: 'error',
                                title: 'Igra nije uspešno kreirana!'
                            });
                            //this.openSnackBar('Greška: Igra nije kreirana!', '');
                        }
                    });
                }
                else {
                    _this.neuspesno = true;
                    // this.uspesno = false;
                    _this.postojiUnetaIgra = true; // postoji igra sa unetim nazivom
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                        type: 'error',
                        title: 'Igra ' + _this.naziv.value + ' već postoji!'
                    });
                    //this.openSnackBar("Igra sa nazivom " + this.naziv.value + " već postoji!", '');
                }
            });
        }
        else {
            if (this.fajlZaUpload == null) {
                this.nijeOdabranFajl = true;
                if (this.fajlZaUpload) 
                // kada se klikne dugme za dodavanje fajla sa pravilima
                // jer vec pise greska "Niste odabrali fajl"
                {
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
                        type: 'error',
                        title: 'GREŠKA: Nije odabran fajl!',
                    });
                }
                // this.openSnackBar('GREŠKA: Nije odabran fajl!', '');
            }
        }
    };
    KreiranjeIgaraComponent.prototype.PostaviFajl = function (event) {
        // console.log(event);
        var files = event.target.files;
        if (files.length > 0) {
            this.fajlZaUpload = files[0];
        }
    };
    // vraćamo poruku ako korisnik nije uneo ništa u polje za naziv igre
    // i ukoliko nije uneo samo slova i brojeve
    KreiranjeIgaraComponent.prototype.greskaNazivIgre = function () {
        return this.naziv.hasError("required") ?
            "Morate da unesete naziv igre!" :
            this.naziv.hasError("pattern") ? "Naziv igre može da sadrži samo slova i brojeve!" : "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('fajlUpload'),
        __metadata("design:type", Object)
    ], KreiranjeIgaraComponent.prototype, "fajl", void 0);
    KreiranjeIgaraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kreiranje-igara',
            template: __webpack_require__("./src/app/komponente/kreiranje-igara/kreiranje-igara.component.html"),
            styles: [__webpack_require__("./src/app/komponente/kreiranje-igara/kreiranje-igara.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__servisi_pravila_service__["a" /* PravilaService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSnackBar */]])
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

/***/ "./src/app/komponente/potvrda/potvrda.component.css":
/***/ (function(module, exports) {

module.exports = "button\r\n{\r\n\twidth: 49%;\r\n}"

/***/ }),

/***/ "./src/app/komponente/potvrda/potvrda.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"potvrdaWrapper\">\n\t\t<p style=\"text-align: center\">\n\t\t\t{{ poruka }}\n\t\t</p>\n\t\t<button mat-button (click)=\"NaKlikDa()\">\n\t\t\tDa\n\t\t</button>\n\t\t<button mat-button (click)=\"NaKlikNe()\">\n\t\t\tNe\n\t\t</button>\n</div>"

/***/ }),

/***/ "./src/app/komponente/potvrda/potvrda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PotvrdaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PotvrdaComponent = /** @class */ (function () {
    function PotvrdaComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PotvrdaComponent.prototype.ngOnInit = function () {
        this.poruka = this.data.poruka;
    };
    PotvrdaComponent.prototype.NaKlikNe = function () {
        this.dialogRef.close(-1);
    };
    PotvrdaComponent.prototype.NaKlikDa = function () {
        this.dialogRef.close(1);
    };
    PotvrdaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-potvrda',
            template: __webpack_require__("./src/app/komponente/potvrda/potvrda.component.html"),
            styles: [__webpack_require__("./src/app/komponente/potvrda/potvrda.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */], Object])
    ], PotvrdaComponent);
    return PotvrdaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prijava/prijava.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field, button, .div-greska {\r\n\twidth: 90%;\r\n\tfont-size: 96%;\r\n\tmargin-top: 10px;\r\n\tmargin-left: 5%;\r\n}\r\n\r\n.div-greska {\r\n\tcolor: red;\r\n\tfont-size: 90%;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.kartica {\r\n  max-width: 400px;\r\n}\r\n\r\n.prijavaWrapper {\r\n  margin-top: 7%;\r\n  display: table;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/komponente/prijava/prijava.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"prijavaWrapper\">\n    <mat-card class=\"kartica\">\n\n      <h1 style=\"text-align: center; width: 100% \">Prijavite se</h1>\n\n        <mat-card-content>\n          <form  (ngSubmit)=\"PrijaviAdmina()\">\n            <mat-form-field>\n              <input matInput placeholder=\"Korisničko ime\" [formControl]=\"username\" required>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput type=\"password\" placeholder=\"Lozinka\" [formControl]=\"password\" required>\n            </mat-form-field>\n\n            <button mat-raised-button type=\"submit\" color=\"primary\">\n              Prijavite se\n            </button>\n\n            <div *ngIf=\"pogresno\" class=\"div-greska\">\n              Pogrešno korisničko ime i/ili lozinka\n            </div>\n          </form>\n        </mat-card-content>\n    </mat-card>\n\n\n</div>\n"

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
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    PrijavaComponent.prototype.ngOnInit = function () {
        this.pogresno = false;
    };
    PrijavaComponent.prototype.PrijaviAdmina = function () {
        var _this = this;
        if (this.password.valid && this.username.valid) {
            console.log('submitovano');
            var admin = new __WEBPACK_IMPORTED_MODULE_3__modeli_Admin__["a" /* Admin */]();
            admin.username = this.username.value;
            admin.password = this.password.value;
            var odgovor;
            this.adminService.PrijaviAdmina(admin).subscribe(function (odg) {
                console.log(odg);
                if (odg.status === 1) {
                    _this.authService.Prijavi(odg);
                    // redirekcija na pocetnu stranu kada se uloguje
                    _this.naSubmit.emit(true);
                    window.location.replace('/pocetna');
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

/***/ "./src/app/komponente/prikaz-admina/prikaz-admina.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.tabGrupa\r\n{\r\n\twidth: 1000px;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.example-container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tmax-height: 500px;\r\n\tmin-width: 300px;\r\n  }\r\n\r\n.mat-table {\r\n\toverflow: auto;\r\n\tmax-height: 500px;\r\n  }\r\n\r\n.sirina\r\n  {\r\n\t  width: 200px;\r\n  }\r\n\r\n.dugmePrikazMeceva\r\n  {\r\n\t  background-color: cyan;\r\n\t  border-radius: 4px;\r\n  }"

/***/ }),

/***/ "./src/app/komponente/prikaz-admina/prikaz-admina.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\t<mat-card class=\"kartica\">\n    <mat-card-header>\n      <div mat-card-avatar>\n        <mat-icon aria-label=\"Profil\" class=\"profilIkonicaBox\">face</mat-icon>\n      </div>\n      <mat-card-title>Administratori</mat-card-title>\n\t</mat-card-header>\n\t<mat-card-content>\n\t\t<mat-tab-group>\n\t\t\t<div *ngIf=\"daLiJeGlavniAdmin\">\n\t\t\t<mat-tab label=\" Prikaz aministratori\">\n\n\t\t\t</mat-tab>\n\t\t\t</div>\n\t\t\t\n\t\t\t<mat-tab label=\"Dodavanje administratora\">\n\t\t\t\t<app-registracija></app-registracija>\n\t\t\t</mat-tab>\n\t\t</mat-tab-group>\n\t</mat-card-content>\n\t</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/komponente/prikaz-admina/prikaz-admina.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrikazAdminaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrikazAdminaComponent = /** @class */ (function () {
    function PrikazAdminaComponent(adminService) {
        this.adminService = adminService;
    }
    PrikazAdminaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.DaliJeGlavniAdmin().subscribe(function (daLiJeGlavniAdmin) {
            console.log(daLiJeGlavniAdmin);
            if (daLiJeGlavniAdmin == 1) {
                _this.daLiJeGlavniAdmin = true;
            }
            else {
                _this.daLiJeGlavniAdmin = false;
            }
        });
    };
    PrikazAdminaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prikaz-admina',
            template: __webpack_require__("./src/app/komponente/prikaz-admina/prikaz-admina.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prikaz-admina/prikaz-admina.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */]])
    ], PrikazAdminaComponent);
    return PrikazAdminaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prikaz-igara/prikaz-igara.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.div-greska\r\n{\r\n\tcolor: red;\r\n}\r\n\r\n.unos\r\n{\r\n\twidth: 33%;\r\n}\r\n\r\n.inli\r\n{\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.lapo\r\n{\r\n\twidth: 45%;\r\n}\r\n\r\n#proba\r\n{\r\n\t\r\n\tpadding-right: 70px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-igara/prikaz-igara.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t\t<mat-form-field>\n\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Pretraga\">\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-table #table [dataSource]=\"dataSource\"  matSort>\n\n\t\t\t\t<!-- Naziv igre Column -->\n\t\t\t\t<ng-container matColumnDef=\"nazivIgre\" class=\"sirina\">\n\t\t\t\t  <mat-header-cell *matHeaderCellDef> Igra </mat-header-cell>\n\t\t\t\t  <mat-cell *matCellDef=\"let igra\"> {{igra.naziv}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Dugme za brisanje igre -->\n\t\t\t\t<ng-container matColumnDef=\"obrisiIgru\" class=\"sirina\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef></mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let igra\"><button mat-button (click)=\"ObrisiIgru(igra.id,igra.naziv)\"><mat-icon>cancel</mat-icon></button></mat-cell>\n\t\t\t\t  </ng-container>\n\n\n\n\t\t\t\t<!--  Neka podesavanja za tabelu  -->\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t  </mat-table>\n\t\t\t  <mat-paginator #paginator\n\t\t\t\t [pageSize]=\"5\"\n\t\t\t\t [pageSizeOptions]=\"[5, 10, 20]\"\n\t\t\t\t [showFirstLastButtons]=\"true\">\n\t\t\t\t</mat-paginator>\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-igara/prikaz-igara.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrikazIgaraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__potvrda_potvrda_component__ = __webpack_require__("./src/app/komponente/potvrda/potvrda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PrikazIgaraComponent = /** @class */ (function () {
    function PrikazIgaraComponent(adminService, dialog) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.displayedColumns = ['nazivIgre', 'obrisiIgru'];
    }
    PrikazIgaraComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PrikazIgaraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.DajSveIgre().subscribe(function (igre) {
            _this.igre = igre;
            //console.log("front");
            console.log(_this.igre);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTableDataSource */](_this.igre);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    PrikazIgaraComponent.prototype.ObrisiIgru = function (idIgre, nazivIgre) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__potvrda_potvrda_component__["a" /* PotvrdaComponent */], {
            width: '400px',
            data: {
                poruka: "Da li ste sigurno da želite da obrišete igru " + nazivIgre + "?"
            }
        });
        dialogRef.afterClosed().subscribe(function (odgovor) {
            console.log(odgovor);
            if (odgovor == 1) {
                _this.adminService.ObrisiIgru(idIgre).subscribe(function (odg) {
                    var poruka;
                    if (odg == 1) {
                        _this.igre = _this.igre.filter(function (igra) { return igra.id != idIgre; });
                        poruka = "Bot je obrisan!";
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                            type: 'success',
                            title: 'Igra je uspešno obrisana!',
                            showConfirmButton: false,
                            timer: 2600
                        });
                    }
                    else {
                        console.log("Nastala je greska");
                        poruka = "Nastala je greška";
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                            type: 'error',
                            title: 'GREŠKA: Igra nije obrisana!'
                        });
                    }
                    //window.location.reload();
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSort */])
    ], PrikazIgaraComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatPaginator */])
    ], PrikazIgaraComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatTable */])
    ], PrikazIgaraComponent.prototype, "table", void 0);
    PrikazIgaraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prikaz-igara',
            template: __webpack_require__("./src/app/komponente/prikaz-igara/prikaz-igara.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prikaz-igara/prikaz-igara.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]])
    ], PrikazIgaraComponent);
    return PrikazIgaraComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prikaz-korisnika/prikaz-korisnika.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n  display: table;\r\n  margin: 0 auto;\r\n  padding: 26px;\r\n  width: 90%;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    padding-top: 18px;\r\n    width: 96%;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.div-greska\r\n{\r\n\tcolor: red;\r\n}\r\n\r\n.unos\r\n{\r\n\twidth: 33%;\r\n}\r\n\r\n.inli\r\n{\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-korisnika/prikaz-korisnika.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\t<mat-card class=\"kartica\">\n\n\t\t<mat-card-header>\n\t\t\t<div mat-card-avatar>\n\t\t\t  <mat-icon aria-label=\"Profil\" class=\"profilIkonicaBox\">supervisor_account</mat-icon>\n\t\t\t</div>\n\t\t\t<mat-card-title>Korisnici</mat-card-title>\n\t\t  </mat-card-header>\n\n\t\t  <mat-card-content>\n\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Pretraga\">\n\t\t\t</mat-form-field>\n\n\t\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t\t<!-- Username Column -->\n\t\t\t\t<ng-container matColumnDef=\"korisnickoIme\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Korisničko ime </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let korisnik\">{{korisnik.username}}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Email Column -->\n\t\t\t\t<ng-container matColumnDef=\"email\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> E-mail adresa </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let korisnik\">{{korisnik.email}}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Ime Column -->\n\t\t\t\t<ng-container matColumnDef=\"ime\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Ime </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let korisnik\">{{korisnik.ime}}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Prezime Column -->\n\t\t\t\t<ng-container matColumnDef=\"prezime\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Prezime </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let korisnik\">{{korisnik.prezime}}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Datum registracije Column -->\n\t\t\t\t<ng-container matColumnDef=\"datumRegistracije\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Datum registracije </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let korisnik\">{{korisnik.datumRegistracije * 1000 | date:\"dd.MM.yyyy\"}}</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Ban Column -->\n\t\t\t\t<ng-container matColumnDef=\"ban\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef></mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let korisnik\"><button mat-button (click)=\"OtvoriBanDialog(korisnik)\">Zabrana igranja</button></mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- PODESAVANJE TABELE -->\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n\t\t\t</mat-table>\n\n\t\t\t<mat-paginator #paginator\n                [pageSize]=\"5\"\n                [pageSizeOptions]=\"[5, 10, 20]\"\n                [showFirstLastButtons]=\"true\">\n\t\t\t</mat-paginator>\n\t\t\t  \n\t\t  </mat-card-content>\n\n\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-korisnika/prikaz-korisnika.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrikazKorisnikaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__banovanje_banovanje_component__ = __webpack_require__("./src/app/komponente/banovanje/banovanje.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrikazKorisnikaComponent = /** @class */ (function () {
    function PrikazKorisnikaComponent(adminService, dialog
        //public dialogRef: MatDialogRef<PrikazKorisnikaComponent>,
    ) {
        this.adminService = adminService;
        this.dialog = dialog;
        this.displayedColumns = ['korisnickoIme', 'email', 'ime', 'prezime', 'datumRegistracije', 'ban'];
        this.korisnici = [];
    }
    PrikazKorisnikaComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PrikazKorisnikaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.DajSveKorisnike().subscribe(function (korisnici) {
            _this.korisnici = korisnici;
            console.log(korisnici);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](_this.korisnici);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    PrikazKorisnikaComponent.prototype.OtvoriBanDialog = function (korisnik) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__banovanje_banovanje_component__["a" /* BanovanjeComponent */], {
            width: '300px',
            data: {
                korisnik: korisnik
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginator */])
    ], PrikazKorisnikaComponent.prototype, "paginator", void 0);
    PrikazKorisnikaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prikaz-korisnika',
            template: __webpack_require__("./src/app/komponente/prikaz-korisnika/prikaz-korisnika.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prikaz-korisnika/prikaz-korisnika.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]
            //public dialogRef: MatDialogRef<PrikazKorisnikaComponent>,
        ])
    ], PrikazKorisnikaComponent);
    return PrikazKorisnikaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.tabGrupa\r\n{\r\n\twidth: 1000px;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.example-container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tmax-height: 500px;\r\n\tmin-width: 300px;\r\n  }\r\n\r\n.mat-table {\r\n\toverflow: auto;\r\n\tmax-height: 500px;\r\n  }\r\n\r\n.sirina\r\n  {\r\n\t  width: 200px;\r\n  }\r\n\r\n#nazivTurnira\r\n  {\r\n\t  color: blue;\r\n  }"

/***/ }),

/***/ "./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"pocetnaWrapper\">\n\t<mat-card class=\"kartica\">\n    <mat-card-header>\n      <div mat-card-avatar>\n        <mat-icon aria-label=\"Profil\" class=\"profilIkonicaBox\">explore</mat-icon>\n      </div>\n      <mat-card-title>Svi mečevi sa turnira <span id=\"nazivTurnira\">{{ selektovanTurnir.nazivTurnira }}</span></mat-card-title>\n    </mat-card-header>\n\t\t<mat-card-content>\n\t\t\t<mat-tab-group>\n\t\t\t\t<mat-tab label=\"Turniri\">\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Pretraga\">\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<mat-table #table [dataSource]=\"dataSource\"  matSort>\n\n\t\t\t\t\t\t<!-- Korisnik 1 Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"korisnik1\" class=\"sirina\">\n\t\t\t\t\t\t  <mat-header-cell *matHeaderCellDef> Prvi korisnik </mat-header-cell>\n\t\t\t\t\t\t  <mat-cell *matCellDef=\"let mec\">{{ mec.korisnik1 }}</mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Korisnik 2 Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"korisnik2\" class=\"sirina\">\n\t\t\t\t\t\t  <mat-header-cell *matHeaderCellDef class=\"sirina\"> Drugi korisnik </mat-header-cell>\n\t\t\t\t\t\t  <mat-cell *matCellDef=\"let mec\" class=\"sirina\">{{ mec.korisnik2 }}</mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Početak meča Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"datumvremePocetka\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Početak meča </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let mec\">{{ mec.datumVremePocetka*1000 | date: 'dd.MM.yyyy' }} {{ mec.datumVremePocetka*1000 | date:' HH:mm' }}</mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t<!-- Rezultat Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"rezultat\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"sirina\"> Rezultat </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell class=\"sirina\" *matCellDef=\"let mec\">{{ mec.rezultat1 + \":\" + mec.rezultat2 }}</mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t<!--  Neka podešavanja za tabelu  -->\n\t\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\t\t  </mat-table>\n\n\t\t\t\t\t  <mat-paginator #paginator\n                 \t\t[pageSize]=\"5\"\n                 \t\t[pageSizeOptions]=\"[5, 10, 20]\"\n                 \t\t[showFirstLastButtons]=\"true\">\n  \t\t\t\t\t  </mat-paginator>\n\t\t\t\t</mat-tab>\n\t\t\t  </mat-tab-group>\n\t\t</mat-card-content>\n\t</mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrikazMecevaZaTurnirComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var PrikazMecevaZaTurnirComponent = /** @class */ (function () {
    function PrikazMecevaZaTurnirComponent(dialogRef, data, adminService, snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.displayedColumns = ['korisnik1', 'korisnik2', 'datumvremePocetka', 'rezultat'];
        this.mecevi = [];
    }
    PrikazMecevaZaTurnirComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PrikazMecevaZaTurnirComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selektovanTurnir = this.data.selektovanTurnir;
        console.log("Izabran turni za prikaz meceva:");
        console.log(this.selektovanTurnir);
        // uzimamo sve meceve za selektovani turnir iz baze
        this.adminService.DajSveMeceveZaIDTurnira(this.selektovanTurnir.id).subscribe(function (odgovor) {
            // mecevi - niz objekata tipa MeceZaPrikaz...
            console.log("Odgovor za prikaz meceva od servera: ");
            console.log(odgovor);
            // ukoliko je vraćen odgovarajući odgovor od servera
            if (odgovor != -1) {
                _this.mecevi = odgovor;
                _this.mecevi.forEach(function (mec) {
                    // ako meč tek treba da se igra
                    if (mec.datumVremePocetka * 1000 + mec.trajanje > Date.now()) {
                        // kako meč nije počeo setujemo odg. rezultat
                        mec.rezultat1 = 0;
                        mec.rezultat2 = 0;
                    }
                    // meč je završen prikaži rezultate
                });
                _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](_this.mecevi);
                _this.dataSource.sort = _this.sort;
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSort */])
    ], PrikazMecevaZaTurnirComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginator */])
    ], PrikazMecevaZaTurnirComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatTable */])
    ], PrikazMecevaZaTurnirComponent.prototype, "table", void 0);
    PrikazMecevaZaTurnirComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prikaz-meceva-za-turnir',
            template: __webpack_require__("./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatSnackBar */]])
    ], PrikazMecevaZaTurnirComponent);
    return PrikazMecevaZaTurnirComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prikaz-prijava/prikaz-prijava.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.tabGrupa\r\n{\r\n\twidth: 1000px;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.example-container {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: column;\r\n\t        flex-direction: column;\r\n\tmax-height: 500px;\r\n\tmin-width: 300px;\r\n  }\r\n\r\n.mat-table {\r\n\toverflow: auto;\r\n\tmax-height: 500px;\r\n  }\r\n\r\n.sirina\r\n  {\r\n\t  width: 200px;\r\n  }\r\n\r\n.dugmePrikazMeceva\r\n  {\r\n\t  background-color: cyan;\r\n\t  border-radius: 4px;\r\n  }"

/***/ }),

/***/ "./src/app/komponente/prikaz-prijava/prikaz-prijava.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-form-field>\n\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Pretraga\">\n</mat-form-field>\n\n<mat-table #table [dataSource]=\"dataSource\">\n\n\t<!-- Korisnik Column -->\n\t<ng-container matColumnDef=\"korisnik\" class=\"sirina\">\n\t  <mat-header-cell *matHeaderCellDef> Korisnik </mat-header-cell>\n\t  <mat-cell *matCellDef=\"let prijave\"> {{prijave.usernameKorisnika}} </mat-cell>\n\t</ng-container>\n\n\t<!-- Bot Column -->\n\t<ng-container matColumnDef=\"bot\" class=\"sirina\">\n\t\t<mat-header-cell *matHeaderCellDef> Bot </mat-header-cell>\n\t\t<mat-cell *matCellDef=\"let prijave\"> {{prijave.nazivFajla}} </mat-cell>\n\t  </ng-container>\n\n\t  <!-- Datum i vreme prijave Column -->\n\t<ng-container matColumnDef=\"datumVremePrijave\" class=\"sirina\">\n\t\t<mat-header-cell *matHeaderCellDef> Vreme prijave </mat-header-cell>\n\t\t<mat-cell *matCellDef=\"let prijave\"> {{prijave.datumVremePrijave*1000 | date:'dd.MM.yyyy HH:mm'}}h </mat-cell>\n\t  </ng-container>\n\n\t<!--  Neka podesavanja za tabelu  -->\n\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n  <mat-paginator #paginator\n\t [pageSize]=\"5\"\n\t [pageSizeOptions]=\"[5, 10, 20]\"\n\t [showFirstLastButtons]=\"true\">\n\t</mat-paginator>"

/***/ }),

/***/ "./src/app/komponente/prikaz-prijava/prikaz-prijava.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrikazPrijavaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var PrikazPrijavaComponent = /** @class */ (function () {
    function PrikazPrijavaComponent(adminService, data) {
        this.adminService = adminService;
        this.data = data;
        this.displayedColumns = ['korisnik', 'bot', 'datumVremePrijave'];
    }
    PrikazPrijavaComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PrikazPrijavaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.turnir = this.data.turnir;
        this.adminService.PrikaziPrijaveZaTurnir(this.turnir.id).subscribe(function (prijave) {
            console.log(prijave);
            _this.prijave = prijave;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](_this.prijave);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSort */])
    ], PrikazPrijavaComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginator */])
    ], PrikazPrijavaComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatTable */])
    ], PrikazPrijavaComponent.prototype, "table", void 0);
    PrikazPrijavaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prikaz-prijava',
            template: __webpack_require__("./src/app/komponente/prikaz-prijava/prikaz-prijava.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prikaz-prijava/prikaz-prijava.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servisi_admin_service__["a" /* AdminService */], Object])
    ], PrikazPrijavaComponent);
    return PrikazPrijavaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/prikaz-turnira/prikaz-turnira.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n  max-width: 1048px;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n  display: table;\r\n  margin: 0 auto;\r\n  padding: 26px;\r\n}\r\n\r\n.dugmePrikazMeceva\r\n{\r\n  background-color: cyan;\r\n  border-radius: 4px;\r\n}\r\n\r\n.pretraga\r\n{\r\n  width: 100%;\r\n}\r\n\r\nmat-header-cell, mat-cell\r\n{\r\n  text-align: center;\r\n}\r\n\r\n.mobile-label\r\n{\r\n  display: none;\r\n}\r\n\r\n.mat-row:hover\r\n{\r\n  background-color: lightgray;\r\n  -webkit-transition-duration: 0.6s;\r\n          transition-duration: 0.6s;\r\n}\r\n\r\n.dugmeResponsive\r\n{\r\n  width: 100%;\r\n  /*text-align: center;*/\r\n  background-color: red;\r\n}\r\n\r\n.meceviPrijave\r\n{\r\n  padding-left: 6px;\r\n  padding-right: 6px;\r\n  width: 70px;\r\n  min-width: 70px;\r\n  max-width: 70px;\r\n}\r\n\r\n@media(max-width: 901px) {\r\n\r\n  mat-header-cell, mat-cell\r\n  {\r\n    text-align: left;\r\n  }\r\n\r\n  .mobile-label {\r\n    width: 120px;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    float: left;\r\n  }\r\n\r\n  .mat-header-row {\r\n    display: none;\r\n  }\r\n\r\n  .mat-row {\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: start;\r\n    padding: 8px 24px;\r\n  }\r\n\r\n  .dugmeResponsive\r\n  {\r\n    display: inline;\r\n    width: 100%;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    margin-top: 8px;\r\n    float: left;\r\n  }\r\n\r\n  .neresponsiveDugme\r\n  {\r\n    display: none;\r\n  }\r\n\r\n  .mat-row\r\n  {\r\n    padding: 8px;\r\n    margin: 0;\r\n    height: auto!important;\r\n    min-height: auto!important;\r\n    max-height: auto!important;\r\n  }\r\n\r\n  .dugmeResponsive, mat-cell\r\n  {\r\n    width: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-turnira/prikaz-turnira.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t\t\t<mat-tab-group>\n\t\t\t\t<mat-tab label=\"Turniri\">\n\n\t\t\t\t\t<mat-form-field class=\"pretraga\">\n\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Pretraga\">\n\t\t\t\t\t</mat-form-field>\n\n\n          <div class=\"responsive_table\">\n\t\t\t\t\t<mat-table #table [dataSource]=\"dataSource\"  matSort>\n\n\t\t\t\t\t\t<!-- Naziv turnira Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"Turnir\" class=\"sirina\">\n\t\t\t\t\t\t  <mat-header-cell *matHeaderCellDef> Turnir </mat-header-cell>\n              <mat-cell *matCellDef=\"let turnir\"><span class=\"mobile-label\">Turnir: </span> {{turnir.nazivTurnira}} </mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Naziv igre Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"Igra\" class=\"sirina\">\n\t\t\t\t\t\t  <mat-header-cell *matHeaderCellDef class=\"sirina\"> Igra </mat-header-cell>\n\t\t\t\t\t\t  <mat-cell *matCellDef=\"let turnir\" class=\"sirina\"><span class=\"mobile-label\">Igra: </span> {{turnir.nazivIgre}} </mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Pocetak prijava Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"pocetakPrijava\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Pocetak prijava </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\"><span class=\"mobile-label\">Početak prijava: </span> {{turnir.pocetakPrijava*1000 | date:'dd.MM.yyyy HH:mm'}}h </mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t  <!-- Kraj prijava Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"krajPrijava\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Kraj prijava </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\"><span class=\"mobile-label\">Kraj prijava: </span> {{turnir.krajPrijava*1000 | date:'dd.MM.yyyy HH:mm'}}h </mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t  <!-- Pocetak turnira Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"pocetakTurnira\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Pocetak turnira </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\"><span class=\"mobile-label\">Početak turnira: </span> {{turnir.datumVremePocetka*1000 | date:'dd.MM.yyyy HH:mm'}}h </mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t  <!-- Kraj Turnira Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"krajTurnira\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Kraj turnira </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\"><span class=\"mobile-label\">Kraj turnira: </span> {{turnir.datumVremeZavrsetka*1000 | date:'dd.MM.yyyy HH:mm'}}h </mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t  <!-- Otkazivanje turnira Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"otkazivanje\" class=\"sirina smanji\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"smanji\"> Otkazi </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\" class=\"smanji\">\n\t\t\t\t\t\t\t\t<button mat-icon-button (click)=\"ObrisiTurnir(turnir)\" class=\"smanji\">\n\t\t\t\t\t\t\t\t\t<mat-icon class=\"smanji\"> cancel </mat-icon>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t  <!-- Azuriranje turnira Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"azuriranje\" class=\"sirina smanji\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"smanji\">Ažuriraj</mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\" class=\"smanji\">\n\t\t\t\t\t\t\t\t<button mat-icon-button=\"edit\" (click)=\"AzurirajTurnir(turnir)\" class=\"smanji\">\n\t\t\t\t\t\t\t\t\t<mat-icon class=\"smanji\">edit</mat-icon>\n\t\t\t\t\t\t\t\t</button>\n              </mat-cell>\n\t\t\t\t\t\t  </ng-container>\n\n\t\t\t\t\t\t  <!-- Prikaz meceva Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"prikaziMeceve\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Prikaži mečeve </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\"> <button mat-button (click)=\"PrikaziMeceve(turnir)\" class=\"meceviPrijave\">Mečevi</button></mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Prikaz prijava Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"prikaziPrijave\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Prikaži prijave </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\"> <button mat-button (click)=\"PrikaziPrijave(turnir)\" class=\"meceviPrijave\">Prijave</button></mat-cell>\n\t\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t\t<!--\n\t\t\t\t\t\tKreiranje meceva Column\n\t\t\t\t\t\t<ng-container matColumnDef=\"kreirajMeceve\" class=\"sirina\">\n\t\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Prikaži mečeve </mat-header-cell>\n\t\t\t\t\t\t\t<mat-cell *matCellDef=\"let turnir\"> <button mat-button (click)=\"KreirajMeceve(turnir)\">Kreiraj mečeve</button></mat-cell>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t-->\n\t\t\t\t\t\t<!--  Neka podesavanja za tabelu  -->\n\t\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\t\t  </mat-table>\n\n\n\n\t\t\t\t\t  <mat-paginator #paginator\n                 \t\t[pageSize]=\"5\"\n                 \t\t[pageSizeOptions]=\"[5, 10, 20]\"\n                 \t\t[showFirstLastButtons]=\"true\">\n  \t\t\t\t\t  </mat-paginator>\n          </div>\n\t\t\t\t</mat-tab>\n\n\n\n\n\t\t\t\t<!--  Tab sa google kalendarom  -->\n        <mat-tab label=\"Kalendar\">\n          <iframe src=\"https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=8ihdb6i7dulfeblbml65h8q9mo%40group.calendar.google.com&amp;color=%23333333&amp;ctz=Europe%2FBelgrade\" frameborder=\"0\" scrolling=\"no\" style=\"border-width:0; width: 100%;\"></iframe>\n        </mat-tab>\n\n\n\t\t\t  </mat-tab-group>\n"

/***/ }),

/***/ "./src/app/komponente/prikaz-turnira/prikaz-turnira.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrikazTurniraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__azuriraj_turnir_azuriraj_turnir_component__ = __webpack_require__("./src/app/komponente/azuriraj-turnir/azuriraj-turnir.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prikaz_meceva_za_turnir_prikaz_meceva_za_turnir_component__ = __webpack_require__("./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prikaz_prijava_prikaz_prijava_component__ = __webpack_require__("./src/app/komponente/prikaz-prijava/prikaz-prijava.component.ts");
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
    function PrikazTurniraComponent(adminService, snackBar, dialog) {
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.turniri = [];
        this.mecevi = [];
        this.displayedColumns = ['Turnir', 'Igra', 'pocetakPrijava', 'krajPrijava', 'pocetakTurnira', 'krajTurnira', 'otkazivanje', 'azuriranje', 'prikaziMeceve', 'prikaziPrijave' /*, 'kreirajMeceve'*/];
    }
    PrikazTurniraComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    PrikazTurniraComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PrikazTurniraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.DajSveTurnire().subscribe(function (turniri) {
            _this.turniri = turniri;
            //console.log("front");
            console.log(_this.turniri);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatTableDataSource */](_this.turniri);
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        });
    };
    PrikazTurniraComponent.prototype.ObrisiTurnir = function (turnir) {
        console.log(turnir.id);
        if ((turnir.datumVremePocetka * 1000) > Date.now()) {
            this.adminService.OtkaziTurnir(turnir.id).subscribe();
            this.table.renderRows();
            //this.openSnackBar('Turnir uspešno otkazan!', '');
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                type: 'success',
                title: 'Turnir je uspešno otkazan!',
                showConfirmButton: false,
                timer: 2600
            });
        }
        else if ((turnir.datumVremeZavrsetka * 1000) < Date.now()) {
            //this.openSnackBar('GREŠKA: Turnir je završen!', '');
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                type: 'error',
                title: 'Turnir je završen!'
            });
        }
        else {
            //this.openSnackBar('GREŠKA: Turnir je u toku!', '');
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                type: 'error',
                title: 'GREŠKA: Turnir je u toku!'
            });
        }
    };
    PrikazTurniraComponent.prototype.AzurirajTurnir = function (turnir) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__azuriraj_turnir_azuriraj_turnir_component__["a" /* AzurirajTurnirComponent */], {
            width: '1000px',
            data: {
                turnir: turnir
            }
        });
    };
    // funkcija koja treba da prikaže sve mečeve za izabrani turnir
    PrikazTurniraComponent.prototype.PrikaziMeceve = function (turnir) {
        // otvaramo prozor, gde nam se prikazuju svi mečevi
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__prikaz_meceva_za_turnir_prikaz_meceva_za_turnir_component__["a" /* PrikazMecevaZaTurnirComponent */], {
            width: '800px',
            data: // šaljemo izabrani turnir za prikaz mečeva
            {
                selektovanTurnir: turnir
            }
        });
    };
    PrikazTurniraComponent.prototype.KreirajMeceve = function (turnir) {
        this.adminService.KreirajMeceve(turnir.id).subscribe(function (odg) {
            if (odg == -1) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    type: 'error',
                    title: 'Došlo je do greške!'
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    type: 'success',
                    title: 'Mečevi su kreirani!',
                    showConfirmButton: false,
                    timer: 2600
                });
            }
        });
    };
    PrikazTurniraComponent.prototype.PrikaziPrijave = function (turnir) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__prikaz_prijava_prikaz_prijava_component__["a" /* PrikazPrijavaComponent */], {
            width: '600px',
            data: {
                turnir: turnir
            }
        });
    };
    PrikazTurniraComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSort */])
    ], PrikazTurniraComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatPaginator */])
    ], PrikazTurniraComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatTable */])
    ], PrikazTurniraComponent.prototype, "table", void 0);
    PrikazTurniraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prikaz-turnira',
            template: __webpack_require__("./src/app/komponente/prikaz-turnira/prikaz-turnira.component.html"),
            styles: [__webpack_require__("./src/app/komponente/prikaz-turnira/prikaz-turnira.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */]])
    ], PrikazTurniraComponent);
    return PrikazTurniraComponent;
}());



/***/ }),

/***/ "./src/app/komponente/registracija/registracija.component.css":
/***/ (function(module, exports) {

module.exports = "mat-form-field, button {\r\n\twidth: 90%;\r\n\tfont-size: 96%;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/registracija/registracija.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pocetnaWrapper\">\n\n\t<mat-card class=\"kartica\">\n    <mat-card-header>\n      <div mat-card-avatar>\n        <mat-icon aria-label=\"Profil\" class=\"profilIkonicaBox\">face</mat-icon>\n      </div>\n      <mat-card-title>Dodavanje administratora</mat-card-title>\n    </mat-card-header>\n\n    <mat-card-content>\n\n      <form (ngSubmit)=\"RegistracijaAdmina()\">\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" [formControl]=\"email\" required>\n          <mat-error *ngIf=\"email.invalid\">\n            {{ GreskaMail() }}\n          </mat-error>\n        </mat-form-field>\n\n\n        <mat-form-field>\n          <input matInput placeholder=\"Korisničko ime\" [formControl]=\"username\" required>\n          <mat-error *ngIf=\"zauzeto\">\n            Korisnicko ime je zauzeto\n          </mat-error>\n        </mat-form-field>\n\n\n        <mat-form-field>\n            <input matInput type=\"password\" placeholder=\"Lozinka\" [formControl]=\"password\" (keyup)=\"PoklapanjePassworda()\" required>\n            <mat-hint align=\"start\">\n              Minimalno 8 karaktera\n            </mat-hint>\n        </mat-form-field>\n\n        <button mat-raised-button type=\"submit\" color=\"primary\">\n          Dodaj admina\n        </button>\n      </form>\n    </mat-card-content>\n\n\t</mat-card>\n\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
    function RegistracijaComponent(korisnikService, router, authService, snackBar) {
        this.korisnikService = korisnikService;
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].email]);
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(8)]);
        this.passwordPonovo = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(8)]);
    }
    RegistracijaComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
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
            /*
                        this.korisnikService.RegistrujKorisnika(korisnik).subscribe(odg =>
                        {
                            console.log(odg.status);
                            if (odg.status === "ok")
                            {
                                // ako se uspesno registrovao
                      this.openSnackBar('Uspešno ste dodali novog admina!', '');
                      swal({
                      type: 'success',
                      title: 'Uspešno ste dodali novog admina!',
                      showConfirmButton: false,
                      timer: 2600
                    });
                            }
                            else if (odg.status === "postoji")
                            {
                                // ispisi da je zauzeto ime (nece da radi ngIf u mat-error-u)
                      this.openSnackBar('GREŠKA: Već postoji admin sa tim imenom!', '');
                      swal({
                      type: 'error',
                      title: 'GREŠKA: Već postoji admin sa tim korisničkim imenom!'
                    });
                            }
                            else
                            {
                                // otvori neki prozor koji ce da obavesti da je doslo do greske
                      //this.openSnackBar('GREŠKA: Nije moguće dodati admina!', '');
                      swal({
                      type: 'GREŠKA: Nije moguće dodati admina!',
                      title: 'Turnir je uspešno kreiran!'
                      });
                            }
                        });
            */
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
            __WEBPACK_IMPORTED_MODULE_4__servisi_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatSnackBar */]])
    ], RegistracijaComponent);
    return RegistracijaComponent;
}());



/***/ }),

/***/ "./src/app/komponente/turniri/turniri.component.css":
/***/ (function(module, exports) {

module.exports = ".kartica\r\n{\r\n    max-width: 1048px;\r\n}\r\n\r\n.kartica-header-slika\r\n{\r\n    background-image: url('https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2017/04/29/10/beer.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.pocetnaWrapper\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    padding: 26px;\r\n}\r\n\r\n.mat-card-title\r\n{\r\n    font-size: 160%;\r\n}\r\n\r\n.mat-icon\r\n{\r\n    width: 100px;\r\n}\r\n\r\n#karticaHeaderKorisnik\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#headerKorisnika\r\n{\r\n    display:block;\r\n    height: 312px;\r\n    width: 100%;\r\n    background-image: url('http://www.fullhdwpp.com/wp-content/uploads/programming-and-code-13_www.FullHDWpp.com_.jpg?x69613');\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.pomocniDivHeaderKorisnika\r\n{\r\n    padding: 26px;\r\n}\r\n\r\n#slikaKorisnika\r\n{\r\n    height: 128px;\r\n    width: 128px;\r\n    border: solid 3px #0288D1;\r\n    border-radius: 50%;\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip-list\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-chip\r\n{\r\n    max-width: 512px;\r\n    text-align: center;\r\n    text-size: 26px;\r\n}\r\n\r\n.redUBoksu\r\n{\r\n    padding-top: 18px;\r\n}\r\n\r\ngoogle-chart\r\n{\r\n    width: 100%;\r\n}\r\n\r\n.divUspeh\r\n{\r\n    display: table;\r\n    table-layout: fixed; /*euqal column width*/\r\n    width: 100%;\r\n}\r\n\r\n.celija\r\n{\r\n    display: table-cell;\r\n}\r\n\r\n.celija:hover\r\n{\r\n    background-color: #f0f0f0;\r\n\r\n    -webkit-transition-duration: 0.6s;\r\n\r\n            transition-duration: 0.6s;\r\n}\r\n\r\n.sadrzajCelije\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n    min-width: 312px;\r\n    min-height: 256px;\r\n    text-align: center;\r\n}\r\n\r\n.sadrzajCelije > h4\r\n{\r\n    font-size: 300%;\r\n}\r\n\r\n@media (max-width: 986px) { /*breakpoint*/\r\n    .celija {\r\n        display: block;\r\n    }\r\n}\r\n\r\nmat-form-field, button {\r\n    width: 100%;\r\n    font-size: 96%;\r\n    margin-top: 10px;\r\n\r\n}\r\n\r\n.fajlUpload::-webkit-file-upload-button {\r\n    visibility: hidden;\r\n}\r\n\r\n.fajlUpload::before\r\n{\r\n    content: 'Izaberite sliku';\r\n    background: -webkit-linear-gradient(top, #03A9F4, #03A9F4);\r\n    border-radius: 10px;\r\n    padding: 5px 8px;\r\n    color: white;\r\n    -webkit-user-select: none;\r\n    cursor: pointer;\r\n    font-size: 10pt;\r\n}\r\n\r\n.div-greska\r\n{\r\n\tcolor: red;\r\n}\r\n\r\n.unos\r\n{\r\n\twidth: 33%;\r\n}\r\n\r\n.inli\r\n{\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.lapo\r\n{\r\n\twidth: 45%;\r\n}\r\n\r\n#proba\r\n{\r\n\r\n\tpadding-right: 70px;\r\n}\r\n\r\n@media (max-width: 1000px)\r\n{\r\n  mat-card-content, form, div, mat-form-field, input, mat-option, mat-datepicker-toggle, mat-datepicker\r\n  {\r\n    display: inline;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/komponente/turniri/turniri.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t\t<form (ngSubmit)=\"DodajTurnir()\" >\n\t\t\t\t<div class=\"inli\">\n\n\t\t\t\t<mat-form-field class=\"lapo\" id=\"proba\">\t\t\t\t<!--Unosenje naziva turnira-->\n\t\t\t\t\t<input matInput placeholder=\"Naziv turnira\"  [formControl]=\"naziv\" required>\n\t\t\t\t\t<mat-error *ngIf=\"naziv.invalid\">{{ greskaNazivTurnira() }}</mat-error>\n\t\t\t\t</mat-form-field>\n\n\n\n\t\t\t\t<mat-form-field class=\"lapo\">\t\t\t\t<!--Biranje tipa turnira Kup/Liga-->\n\t\t\t\t\t<mat-select placeholder=\"Izaberite tip turnira (liga/kup)\" [formControl]=\"odabraniTipTurnira\" name=\"tipTurnira\"  required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let tipTurnira of tipoviTurnira\" [value]=\"tipTurnira.id\">\n\t\t\t\t\t\t\t{{tipTurnira.naziv}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t</div>\n\n\n\n\t\t\t\t<mat-form-field>\t\t\t\t<!--Biranje igre-->\n\t\t\t\t\t<mat-select placeholder=\"Izaberite igru\" [formControl]=\"odabranaIgra\" name=\"tipIgre\" required >\n\t\t\t\t\t\t<mat-option *ngFor=\"let igra of igre\" [value]=\"igra.id\">\n\t\t\t\t\t\t\t{{igra.naziv}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t<p style=\"font-weight:bold\">Vreme prijava na turnir</p>\n\n\t\t\t\t<!--///////////////////////         PRIJAVE POCETAK          //////////////////////////////[(ngModel)]=\"datumPocetkaPrijava\"-->\n\t\t\t\t<div class=\"inli\">\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Datum pocekta prijave-->\n\t\t\t\t\t<input matInput [min]=\"minDatum\" [matDatepicker]=\"pickerPocetakPrijava\" placeholder=\"Datum početka prijava\" [formControl]=\"datumPocetkaPrijava\" name=\"prijavePoc\" required>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerPocetakPrijava\" ></mat-datepicker-toggle>\n          <mat-datepicker #pickerPocetakPrijava disabled=\"false\"></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Sati pocetka prijava-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme početka prijava (sati)\" [formControl]=\"pocetakPrijavaSati\" name=\"prijavePocSati\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let sat of sati\" [value]=\"sat\">\n\t\t\t\t\t\t\t{{sat + \" h\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Minuti pocetka prijava-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme početka prijava (minuti)\" [formControl]=\"pocetakPrijavaMinuti\" name=\"prijavePocMinuti\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let minut of minuti\" [value]=\"minut\">\n\t\t\t\t\t\t\t{{minut + \" min\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t\t<!--///////////////////////         PRIJAVE ZAVRSETAK          //////////////////////////////-->\n\t\t\t\t<div class=\"inli\">\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Datum zavrsetka prijave-->\n\t\t\t\t\t<input matInput [min]=\"minDatum\" [matDatepicker]=\"pickerZavrsetakPrijava\" placeholder=\"Datum zavrsetka prijava\" [formControl]=\"datumZavrsetkaPrijava\" name=\"prijaveZav\" required>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerZavrsetakPrijava\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #pickerZavrsetakPrijava disabled=\"false\"></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Sati zavrsetka prijava-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme zavrsetka prijava (sati)\" [formControl]=\"zavrsetakPrijavaSati\" name=\"prijaveZavSati\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let sat of sati\" [value]=\"sat\">\n\t\t\t\t\t\t\t{{sat + \" h\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Minuti zavrsetka prijava-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme zavrsetka prijava (minuti)\" [formControl]=\"zavrsetakPrijavaMinuti\" name=\"prijaveZavMinuti\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let minut of minuti\" [value]=\"minut\">\n\t\t\t\t\t\t\t{{minut + \" min\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\n\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t<p style=\"font-weight:bold\">Vreme trajanja turnira</p>\n\n\t\t\t\t<!--///////////////////////         TURNIR POCETAK          //////////////////////////////-->\n\t\t\t\t<div class=\"inli\">\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Datum pocekta turnira-->\n\t\t\t\t\t<input matInput [min]=\"minDatum\" [matDatepicker]=\"pickerPocetakTurnira\" placeholder=\"Datum početka turnira\" [formControl]=\"datumPocetka\" name=\"prviDatum\" required>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerPocetakTurnira\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #pickerPocetakTurnira disabled=\"false\"></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Sati pocetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme početka turnira (sati)\" [formControl]=\"pocetakTurniraSati\" name=\"pocSati\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let sat of sati\" [value]=\"sat\">\n\t\t\t\t\t\t\t{{sat + \" h\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Minuti pocetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme početka turnira (minuti)\" [formControl]=\"pocetakTurniraMinuti\" name=\"pocMinuti\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let minut of minuti\" [value]=\"minut\">\n\t\t\t\t\t\t\t{{minut + \" min\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t\t<!--///////////////////////         TURNIR ZAVRSETAK          //////////////////////////////-->\n\t\t\t\t<div class=\"inli\">\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Datum zvrsetka turnira-->\n\t\t\t\t\t<input matInput [min]=\"minDatum\" [matDatepicker]=\"pickerZavrsetakTurnira\" placeholder=\"Datum završetka turnira\" [formControl]=\"datumZavrsetka\" name=\"drugiDatum\" required>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"pickerZavrsetakTurnira\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #pickerZavrsetakTurnira disabled=\"false\"></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Sati zavrsetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme završetka turnira (sati)\" [formControl]=\"zavrsetakTurniraSati\" name=\"zavSati\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let sat of sati\" [value]=\"sat\">\n\t\t\t\t\t\t\t{{sat + \" h\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t\t<mat-form-field class=\"unos\">\t\t\t<!--Minuti zavrsetka turnira-->\n\t\t\t\t\t<mat-select placeholder=\"Vreme završetka turnira (minuti)\" [formControl]=\"zavrsetakTurniraMinuti\" name=\"zavMinuti\" required>\n\t\t\t\t\t\t<mat-option *ngFor=\"let minut of minuti\" [value]=\"minut\">\n\t\t\t\t\t\t\t{{minut + \" min\"}}\n\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t\t<div *ngIf=\"losDatum\" class=\"div-greska\">\n\t\t\t\t\t{{poruka}}\n\t\t\t\t</div>\n\n\t\t\t\t<button mat-raised-button type=\"submit\" color=\"primary\">\n\t\t\t\t\tKreiraj turnir\n\t\t\t\t</button>\n\n\n\n\t\t\t</form>\n"

/***/ }),

/***/ "./src/app/komponente/turniri/turniri.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TurniriComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDateAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__ = __webpack_require__("./src/app/servisi/admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modeli_Turnir__ = __webpack_require__("./src/app/modeli/Turnir.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function TurniriComponent(adminService, snackBar, dataPipe, adapter) {
        this.adminService = adminService;
        this.snackBar = snackBar;
        this.dataPipe = dataPipe;
        this.adapter = adapter;
        this.odabraniTipTurnira = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required); //tip turnira (liga/kup)
        this.naziv = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].pattern("[' 'a-zA-z0-9]{1,}")]); //naziv turnira
        this.odabranaIgra = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required); //igra na turniru(xox,tenis)
        //--------------------------------------------------------------------------------------------------
        this.datumPocetkaPrijava = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //datum pocetka prijave
        this.pocetakPrijavaSati = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme pocetka prijave u satima
        this.pocetakPrijavaMinuti = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme pocetka prijave u minutima
        //------------------------------------------------------------------------------------------------------------
        this.datumZavrsetkaPrijava = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //datum zavrsetka prijave
        this.zavrsetakPrijavaSati = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme zavrsetka prijave u satima
        this.zavrsetakPrijavaMinuti = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme zavrsetka prijave u mintima
        //------------------------------------------------------------------------------------------------------------
        this.datumPocetka = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //datum pocetka turnira
        this.pocetakTurniraSati = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme pocetka turnira u satima
        this.pocetakTurniraMinuti = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme pocetka turnira u minutima
        //------------------------------------------------------------------------------------------------------------
        this.datumZavrsetka = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //datum zavrsetka turnira
        this.zavrsetakTurniraSati = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme zavrsetka turnira u satima
        this.zavrsetakTurniraMinuti = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required]); //vreme zavrsetka turnira u minutima
        //--------------------------------------------------------------------------------------------------------------
        this.minDatum = new Date(); //datum za kontrolu, koji onemogucava da se izabere manji od danasnjeg
        this.poruka = "Lose izabrani datumi"; //poruka koja se salje u slucaju loseg datuma/vremena
        this.losDatum = false; //indikator pravilnosti izabranih datuma
        this.sati = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.minuti = [0, 10, 20, 30, 40, 50];
        this.igre = []; //igre koje se uzimaju iz baze
        this.tipoviTurnira = []; //tipovi turnira koji se uzimaju iz baze
        this._12hUSekundama = 43200;
        this.message = "";
    }
    TurniriComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    TurniriComponent.prototype.french = function () {
        this.adapter.setLocale('sh');
    };
    TurniriComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.DajSveIgre().subscribe(function (igre) { return _this.igre = igre; });
        this.adminService.DajTipoveTurnira().subscribe(function (tipoviTurnira) { return _this.tipoviTurnira = tipoviTurnira; });
        //this.french();
    };
    TurniriComponent.prototype.DodajTurnir = function () {
        if (this.odabraniTipTurnira.valid && this.odabranaIgra.valid && this.naziv.valid &&
            this.datumPocetkaPrijava.valid && this.pocetakPrijavaSati.valid && this.pocetakPrijavaMinuti.valid &&
            this.datumZavrsetkaPrijava.valid && this.zavrsetakPrijavaSati.valid && this.zavrsetakPrijavaMinuti.valid &&
            this.datumPocetka.valid && this.pocetakTurniraSati.valid && this.pocetakTurniraMinuti.valid &&
            this.datumZavrsetka.valid && this.zavrsetakTurniraSati.valid && this.zavrsetakTurniraMinuti.valid) {
            //------------------PRETVARANJE DATUMA U SEKUNDE PO UNIX VREMENU(OD 1.1.1970.)
            this.pocetakPrijavaUSekundama = this.datumPocetkaPrijava.value.getTime() / 1000;
            this.krajPrijavaUSekundama = this.datumZavrsetkaPrijava.value.getTime() / 1000;
            this.pocetakTurniraUSekundama = this.datumPocetka.value.getTime() / 1000;
            this.krajTurniraUSekundama = this.datumZavrsetka.value.getTime() / 1000;
            //------------------DODAVANJE SATI I MINUTA U SEKUNDAMA KOJE JE IZABRAO ADMIN
            this.pocetakPrijavaUSekundama += this.pocetakPrijavaSati.value * 3600 + this.pocetakPrijavaMinuti.value * 60;
            this.krajPrijavaUSekundama += this.zavrsetakPrijavaSati.value * 3600 + this.zavrsetakPrijavaMinuti.value * 60;
            this.pocetakTurniraUSekundama += this.pocetakTurniraSati.value * 3600 + this.pocetakTurniraMinuti.value * 60;
            this.krajTurniraUSekundama += this.zavrsetakTurniraSati.value * 3600 + this.zavrsetakTurniraMinuti.value * 60;
            this.losDatum = false;
            var prvi = new Date(this.pocetakPrijavaUSekundama * 1000);
            var drugi = new Date(this.krajPrijavaUSekundama * 1000);
            var treci = new Date(this.pocetakTurniraUSekundama * 1000);
            var cetvrti = new Date(this.krajTurniraUSekundama * 1000);
            /*console.log("prvi: " + prvi.toLocaleString());						//PROVERA DATUMA
            console.log("drugi: " + drugi.toLocaleString());
            console.log("treci: " + treci.toLocaleString());
            console.log("ctvrti: " + cetvrti.toLocaleString());*/
            if (!(this.pocetakPrijavaUSekundama < this.krajPrijavaUSekundama &&
                this.krajPrijavaUSekundama < this.pocetakTurniraUSekundama &&
                this.pocetakTurniraUSekundama < this.krajTurniraUSekundama)) {
                this.losDatum = true;
            }
            var turnir = new __WEBPACK_IMPORTED_MODULE_3__modeli_Turnir__["a" /* Turnir */](); //objekat tipa turnir
            turnir.idTipaTurnira = this.odabraniTipTurnira.value; //id tipa turnira
            turnir.naziv = this.naziv.value; //naziv turnira
            turnir.idIgre = this.odabranaIgra.value; //id odabrane igre
            turnir.pocetakPrijava = this.pocetakPrijavaUSekundama;
            turnir.krajPrijava = this.krajPrijavaUSekundama;
            turnir.datumVremePocetka = this.pocetakTurniraUSekundama;
            turnir.datumVremeZavrsetka = this.krajTurniraUSekundama;
            var pomMesecTurnir = treci.getMonth() + 1;
            var pomMesecPrijave = prvi.getMonth() + 1;
            this.message = turnir.naziv + " turnir pocinje " + treci.getDate() + "." + pomMesecTurnir + "." + treci.getFullYear() + ". Prijave za turnir pocinju " + prvi.getDate() + "." + pomMesecPrijave + "." + prvi.getFullYear() + ".";
            turnir.porukaZaMail = this.message;
            //console.log(turnir);
            if (!this.losDatum) {
                this.adminService.DodajTurnir(turnir).subscribe();
                //this.openSnackBar('Turnir uspešno kreiran!', '');
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                    type: 'success',
                    title: 'Turnir je uspešno kreiran!',
                    showConfirmButton: false,
                    timer: 2600
                });
            }
            else {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                    type: 'error',
                    title: 'Turnir je nije kreiran!'
                });
                this.openSnackBar('GREŠKA: Turnir nije kreiran!', '');
            }
        }
        else {
        }
    };
    // poruka koja se ispisuje ukoliko naziv turnira nije pravilo unet
    TurniriComponent.prototype.greskaNazivTurnira = function () {
        return this.naziv.hasError("required") ? "Polje za naziv turnira ne može biti prazno!" : this.naziv.hasError("pattern") ? "Polje za naziv turnira može da sadrži samo slova i brojeve!" : "";
    };
    TurniriComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-turniri',
            template: __webpack_require__("./src/app/komponente/turniri/turniri.component.html"),
            styles: [__webpack_require__("./src/app/komponente/turniri/turniri.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servisi_admin_service__["a" /* AdminService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["c" /* DateAdapter */]])
    ], TurniriComponent);
    return TurniriComponent;
}());

//Ovde sam napravio svoj neki dataAdapter koji nasledjuje osobine ovog nejtvnog
//sa nekim osobinama koje nama odgovaraju
var MyDateAdapter = /** @class */ (function (_super) {
    __extends(MyDateAdapter, _super);
    function MyDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyDateAdapter.prototype.getFirstDayOfWeek = function () {
        return 1;
    };
    MyDateAdapter.prototype.format = function (date, displayFormat) {
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + "-" + month + "-" + year;
        }
        else {
            console.log("else");
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + "." + month + "." + year + ".";
            //return date.toDateString();
        }
    };
    MyDateAdapter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MyDateAdapter);
    return MyDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* NativeDateAdapter */]));



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

/***/ "./src/app/modeli/PitanjeOdgovor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PitanjeOdgovor; });
var PitanjeOdgovor = /** @class */ (function () {
    function PitanjeOdgovor() {
    }
    return PitanjeOdgovor;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servisi_auth_guard_service__ = __webpack_require__("./src/app/servisi/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__komponente_email_email_component__ = __webpack_require__("./src/app/komponente/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__komponente_prijava_prijava_component__ = __webpack_require__("./src/app/komponente/prijava/prijava.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__komponente_prikaz_korisnika_prikaz_korisnika_component__ = __webpack_require__("./src/app/komponente/prikaz-korisnika/prikaz-korisnika.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__komponente_prikaz_meceva_za_turnir_prikaz_meceva_za_turnir_component__ = __webpack_require__("./src/app/komponente/prikaz-meceva-za-turnir/prikaz-meceva-za-turnir.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__komponente_faq_faq_component__ = __webpack_require__("./src/app/komponente/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__komponente_prikaz_admina_prikaz_admina_component__ = __webpack_require__("./src/app/komponente/prikaz-admina/prikaz-admina.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__komponente_igre_igre_component__ = __webpack_require__("./src/app/komponente/igre/igre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__kompmonente_za_turnire_za_turnire_component__ = __webpack_require__("./src/app/kompmonente/za-turnire/za-turnire.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/prijava', pathMatch: 'full' },
    { path: 'prijava', component: __WEBPACK_IMPORTED_MODULE_5__komponente_prijava_prijava_component__["a" /* PrijavaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__servisi_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'pocetna', component: __WEBPACK_IMPORTED_MODULE_1__komponente_pocetna_pocetna_component__["a" /* PocetnaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__servisi_auth_guard_service__["a" /* AuthGuardService */]] },
    // { path: 'turniri', component: TurniriComponent, canActivate: [ AuthGuardService ] },
    // { path: 'kreiranje-igara', component:  KreiranjeIgaraComponent, canActivate: [AuthGuardService]},
    { path: 'dodajAdmina', component: __WEBPACK_IMPORTED_MODULE_9__komponente_prikaz_admina_prikaz_admina_component__["a" /* PrikazAdminaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__servisi_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'slanjeMejla', component: __WEBPACK_IMPORTED_MODULE_4__komponente_email_email_component__["a" /* EmailComponent */] },
    // { path: 'prikaz-turnira', component: PrikazTurniraComponent },
    { path: 'prikazKorisnika', component: __WEBPACK_IMPORTED_MODULE_6__komponente_prikaz_korisnika_prikaz_korisnika_component__["a" /* PrikazKorisnikaComponent */] },
    { path: 'prikaz-meceva-za-turnir', component: __WEBPACK_IMPORTED_MODULE_7__komponente_prikaz_meceva_za_turnir_prikaz_meceva_za_turnir_component__["a" /* PrikazMecevaZaTurnirComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_8__komponente_faq_faq_component__["a" /* FaqComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__servisi_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'igre', component: __WEBPACK_IMPORTED_MODULE_10__komponente_igre_igre_component__["a" /* IgreComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__servisi_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'turniri', component: __WEBPACK_IMPORTED_MODULE_11__kompmonente_za_turnire_za_turnire_component__["a" /* ZaTurnireComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__servisi_auth_guard_service__["a" /* AuthGuardService */]] }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_snack_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
//import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material_menu__["a" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__["b" /* MatSidenavModule */],
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
    __WEBPACK_IMPORTED_MODULE_17__angular_material__["d" /* MatNativeDateModule */],
    __WEBPACK_IMPORTED_MODULE_18__angular_material_table__["c" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_19__angular_material_snack_bar__["b" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_material__["f" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_20__angular_material_expansion__["a" /* MatExpansionModule */]
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
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'prijava';
        console.log(url);
        //let url = '/prijava';
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
    AdminService.prototype.DajSveTurnire = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'sviTurniri';
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
    AdminService.prototype.OtkaziTurnir = function (id) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'otkaziTurnir';
        window.location.reload();
        return this.http.post(url, { id: id }, { headers: headers });
    };
    AdminService.prototype.DajTurnirZaId = function (id) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'dajTurnirZaId';
        return this.http.post(url, { id: id }, { headers: headers });
    };
    AdminService.prototype.AzurirajTurnir = function (turnir) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'azurirajTurnir';
        window.location.reload();
        return this.http.post(url, turnir, { headers: headers });
    };
    AdminService.prototype.DajSveKorisnike = function () {
        //const bearerHeader: string = 'Bearer ' + localStorage.getItem('token');
        //let headers = new HttpHeaders().set('authorization',bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'dajSveKorisnike';
        return this.http.post(url, { token: localStorage.getItem('token') });
    };
    AdminService.prototype.BanujKorisnika = function (korisnik) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'banujKorisnika';
        console.log(korisnik);
        return this.http.post(url, korisnik, { headers: headers });
    };
    AdminService.prototype.UkloniBan = function (korisnik) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'ukloniBan';
        return this.http.post(url, korisnik, { headers: headers });
    };
    AdminService.prototype.IzmeniFaq = function (faq) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'izmeniFaq';
        var formData = new FormData();
        formData.append('username', localStorage.getItem('username'));
        formData.append('pitanje', faq.pitanje);
        formData.append('odgovor', faq.odgovor);
        formData.append('id', faq.id.toString());
        return this.http.post(url, formData, { headers: headers });
    };
    AdminService.prototype.DodajFaq = function (faq) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'dodajFaq';
        var formData = new FormData();
        formData.append('username', localStorage.getItem('username'));
        formData.append('pitanje', faq.pitanje);
        formData.append('odgovor', faq.odgovor);
        return this.http.post(url, formData, { headers: headers });
    };
    AdminService.prototype.ObrisiPitanje = function (faq) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'obrisiFaq';
        var formData = new FormData();
        formData.append('username', localStorage.getItem('username'));
        formData.append('id', faq.id.toString());
        return this.http.post(url, formData, { headers: headers });
    };
    // vraca odgovarajuci upit za prikazivanje svih meceva izabranog turnira i svih potrebnih informacija za mec
    AdminService.prototype.DajSveMeceveZaIDTurnira = function (idTurnira) {
        // pravimo odg. zaglavlje
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        // pravimo url na koji zelimo da uzmemo sve meceve
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'meceviZaSelektovaniTurnir';
        var formData = new FormData();
        formData.append('username', localStorage.getItem('username'));
        formData.append('idTurnira', idTurnira.toString());
        // saljemo GET zahtev serveru za niz objekata tipa MecZaPrikaz
        return this.http.post(url, formData, { headers: headers });
    };
    // Jelenina metoda
    AdminService.prototype.KreirajMeceve = function (idTurnira) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'kreirajMeceve';
        return this.http.post(url, { idTurnira: idTurnira }, { headers: headers });
    };
    AdminService.prototype.DajSvaPitanjaIOdgovore = function () {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'svaPitanjaIOdgovori';
        return this.http.get(url, { headers: headers });
    };
    AdminService.prototype.ObrisiIgru = function (idIgre) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'obrisiIgru';
        return this.http.post(url, { idIgre: idIgre }, { headers: headers });
    };
    AdminService.prototype.PrikaziPrijaveZaTurnir = function (idTurnira) {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'dajPrijaveZaTurnir';
        return this.http.post(url, { idTurnira: idTurnira }, { headers: headers });
    };
    AdminService.prototype.DaliJeGlavniAdmin = function () {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'daLiJeGlavniAdmin';
        return this.http.post(url, { token: localStorage.getItem('token') });
    };
    AdminService.prototype.DajSveAdmine = function () {
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serverUrl + 'dajSveAdmine';
        return this.http.post(url, { token: localStorage.getItem('token') });
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
        if (url !== '/prijava') {
            return this.ProveriDaLiJePrijavljen();
        }
        else {
            return this.ProveriDaLiJeOdjavljen();
        }
        //return this.authService.DaLiJePrijavljen();
    };
    AuthGuardService.prototype.ProveriDaLiJeOdjavljen = function () {
        var prijavljen = this.authService.DaLiJePrijavljen();
        if (prijavljen) {
            console.log('Guard: prijavljen');
            this.router.navigate(['/pocetna']);
            return false;
        }
        else {
            console.log('Guard: nije prijavljen');
            return true;
        }
    };
    AuthGuardService.prototype.ProveriDaLiJePrijavljen = function () {
        var prijavljen = this.authService.DaLiJePrijavljen();
        if (prijavljen) {
            console.log('Guard: prijavljen');
            return true;
        }
        else {
            console.log('Guard: nije prijavljen');
            this.router.navigate(['/prijava']);
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
        this.router.navigate(['/prijava']);
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



//import { userInfo } from 'os';
var PravilaService = /** @class */ (function () {
    function PravilaService(http) {
        this.http = http;
    }
    // primamo objekat tipa Igra sa nazivom igre i nazivom fajla
    // kao i fajl koji smo učitali
    PravilaService.prototype.DodajIgru = function (igra, tekstEditor, fajlZaUpload) {
        // url servera
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].serverUrl + 'dodajIgru';
        // moramo biti ulogovani
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        // pravimo formu
        var formData = new FormData();
        formData.append('file', fajlZaUpload, fajlZaUpload.name); // učitan fajl
        formData.append('fileName', fajlZaUpload.name); // saljemo posebno ime fajla
        formData.append('username', localStorage.getItem('username')); // ko je ulogovan
        formData.append('naziv', igra.naziv); // naziv igre
        formData.append('tekstEditor', tekstEditor);
        console.log(tekstEditor);
        return this.http.post(url, formData, { headers: headers });
    };
    PravilaService.prototype.ProveriNazivIgre = function (naziv) {
        //console.log("pravila serv->provera->"+naziv);
        var url = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].serverUrl + 'proveriNazivIgre';
        // moramo biti ulogovani
        var bearerHeader = 'Bearer ' + localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('authorization', bearerHeader);
        var formData = new FormData();
        formData.append('nazivIgre', naziv);
        formData.append('username', localStorage.getItem('username'));
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
    serverUrl: 'http://localhost:8081/' //ovo admin je da bi gadjale admin rute na backu
    //serverUrl: 'http://24.135.189.175:8081/'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
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