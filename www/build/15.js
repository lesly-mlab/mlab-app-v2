webpackJsonp([15],{

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupPageModule", function() { return StartupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startup__ = __webpack_require__(891);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StartupPageModule = /** @class */ (function () {
    function StartupPageModule() {
    }
    StartupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__startup__["a" /* StartupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__startup__["a" /* StartupPage */]),
            ],
        })
    ], StartupPageModule);
    return StartupPageModule;
}());

//# sourceMappingURL=startup.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StartupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StartupPage = /** @class */ (function () {
    function StartupPage(navCtrl, navParams, innAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.innAppBrowser = innAppBrowser;
        this.membersPage = 'MembersPage';
        this.startup = navParams.get('startup');
    }
    StartupPage.prototype.ionViewDidLoad = function () {
    };
    StartupPage.prototype.members = function () {
        this.navCtrl.push('MembersPage', { startup: this.startup });
    };
    StartupPage.prototype.showLink = function (link) {
        this.innAppBrowser.create(link);
    };
    StartupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-startup',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/startup/startup.html"*/'<!--\n  Generated template for the StartupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Startup Profile</ion-title>\n    <!-- <ion-buttons end>\n      <button ion-button icon-only [navPush]="membersPage" [navParams]="{startup: startup}"><ion-icon name="people"></ion-icon></button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="header">\n    <div id="img-holder">\n      <img id="profile" [ngStyle]="{\'background-image\': \'url(\' + startup.cover + \')\'}"/>\n      <div id="shader"></div>\n    </div>\n\n    <div class="links">\n        <button (click)="showLink(startup.website)" color="dark" ion-button clear icon-only [disabled]="!startup.website"><ion-icon name="md-globe"></ion-icon></button>\n        <button (click)="showLink(startup.android)" color="dark" ion-button clear icon-only [disabled]="!startup.android"><ion-icon name="logo-android"></ion-icon></button>\n        <button (click)="showLink(startup.ios)" color="dark" ion-button clear icon-only [disabled]="!startup.ios"><ion-icon name="logo-apple"></ion-icon></button>\n      </div>\n    <div padding>\n\n          <h2>{{startup.name}}<span class="location">{{startup.locationName}}</span></h2>\n  <!-- <p class="description">\n    Phone: {{startup.phone}}<br/>\n    Email: <a href="mailto:{{startup.email}}">{{startup.email}}</a>\n  </p> -->\n  <p class="description">{{startup.description}}</p>\n</div>\n</div>\n</ion-content>\n\n<ion-footer no-border padding>\n    <button ion-button block outline [navPush]="membersPage" [navParams]="{startup: startup}">Members</button>\n  </ion-footer>\n'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/startup/startup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], StartupPage);
    return StartupPage;
}());

//# sourceMappingURL=startup.js.map

/***/ })

});
//# sourceMappingURL=15.js.map