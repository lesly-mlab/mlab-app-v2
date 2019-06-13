webpackJsonp([22],{

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnovationPageModule", function() { return InnovationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__innovation__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InnovationPageModule = /** @class */ (function () {
    function InnovationPageModule() {
    }
    InnovationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__innovation__["a" /* InnovationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__innovation__["a" /* InnovationPage */]),
            ],
        })
    ], InnovationPageModule);
    return InnovationPageModule;
}());

//# sourceMappingURL=innovation.module.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnovationPage; });
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
 * Generated class for the InnovationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InnovationPage = /** @class */ (function () {
    function InnovationPage(navCtrl, navParams, innAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.innAppBrowser = innAppBrowser;
        this.innovation = navParams.get('innovation');
    }
    InnovationPage.prototype.ionViewDidLoad = function () {
    };
    InnovationPage.prototype.showLink = function (link) {
        this.innAppBrowser.create(link);
    };
    InnovationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-innovation',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/innovation/innovation.html"*/'<!--\n  Generated template for the InnovationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Innovation Management</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <div class="header">\n      <div id="img-holder">\n        <img id="profile" [ngStyle]="{\'background-image\': \'url(\' + innovation.image + \')\'}"/>\n        <div id="shader"></div>\n      </div>\n    \n      <div class="links">\n          <button (click)="showLink(innovation.website)" color="dark" ion-button clear icon-only [disabled]="!innovation.website"><ion-icon name="md-globe"></ion-icon></button>\n          <button (click)="showLink(innovation.android)" color="dark" ion-button clear icon-only [disabled]="!innovation.android"><ion-icon name="logo-android"></ion-icon></button>\n          <button (click)="showLink(innovation.ios)" color="dark" ion-button clear icon-only [disabled]="!innovation.ios"><ion-icon name="logo-apple"></ion-icon></button>\n        </div>\n      <div padding>\n    \n            <h2>{{innovation.title}}</h2>\n    <p class="description">{{innovation.description}}</p>\n  </div>\n  </div>\n  </ion-content>\n  '/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/innovation/innovation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], InnovationPage);
    return InnovationPage;
}());

//# sourceMappingURL=innovation.js.map

/***/ })

});
//# sourceMappingURL=22.js.map