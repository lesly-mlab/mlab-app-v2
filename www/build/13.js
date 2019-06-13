webpackJsonp([13],{

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterfeedsPageModule", function() { return TwitterfeedsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twitterfeeds__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TwitterfeedsPageModule = /** @class */ (function () {
    function TwitterfeedsPageModule() {
    }
    TwitterfeedsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__twitterfeeds__["a" /* TwitterfeedsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__twitterfeeds__["a" /* TwitterfeedsPage */]),
            ],
        })
    ], TwitterfeedsPageModule);
    return TwitterfeedsPageModule;
}());

//# sourceMappingURL=twitterfeeds.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterfeedsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
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
 * Generated class for the TwitterfeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TwitterfeedsPage = /** @class */ (function () {
    function TwitterfeedsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TwitterfeedsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TwitterfeedsPage');
    };
    TwitterfeedsPage.prototype.ngAfterViewInit = function () {
        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + "://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, "script", "twitter-wjs");
    };
    TwitterfeedsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-twitterfeeds',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/twitterfeeds/twitterfeeds.html"*/'<!--\n  Generated template for the SocialFeedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Twitter Feeds</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<a class="twitter-timeline" href="https://twitter.com/mlabsa?ref_src=twsrc%5Etfw">Tweets by mlabsa</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> \n</ion-content>\n\n<!-- <ion-content padding>\n  <a class="twitter-timeline options" href="https://twitter.com/mlabsa?ref_src=twsrc%5Etfw"><ion-icon name="logo-twitter"></ion-icon></a> \n  <a class="twitter-timeline options" href="https://twitter.com/mlabsa?ref_src=twsrc%5Etfw"><ion-icon name="logo-twitter"></ion-icon></a>  \n</ion-content>  -->\n\n\n'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/twitterfeeds/twitterfeeds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], TwitterfeedsPage);
    return TwitterfeedsPage;
}());

//# sourceMappingURL=twitterfeeds.js.map

/***/ })

});
//# sourceMappingURL=13.js.map