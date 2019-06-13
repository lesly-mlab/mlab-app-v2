webpackJsonp([16],{

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialFeedPageModule", function() { return SocialFeedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social_feed__ = __webpack_require__(890);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { YoutubefeedsPage} from '../youtubefeeds/youtubefeeds';
var SocialFeedPageModule = /** @class */ (function () {
    function SocialFeedPageModule() {
    }
    SocialFeedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__social_feed__["a" /* SocialFeedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social_feed__["a" /* SocialFeedPage */]),
            ],
        })
    ], SocialFeedPageModule);
    return SocialFeedPageModule;
}());

//# sourceMappingURL=social-feed.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialFeedPage; });
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


var SocialFeedPage = /** @class */ (function () {
    function SocialFeedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad SocialFeedPage');
    // }
    SocialFeedPage.prototype.navigate = function () {
        //console.log("kkkkkkk");
        this.navCtrl.push('YoutubefeedsPage');
        //this.navCtrl.push(YoutubefeedsPage);
    };
    SocialFeedPage.prototype.youtubefeeds = function () {
        this.navCtrl.push('YoutubefeedsPage');
    };
    SocialFeedPage.prototype.twitterfeeds = function () {
        this.navCtrl.push('TwitterfeedsPage');
    };
    SocialFeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-social-feed',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/social-feed/social-feed.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Social Media</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-xs-12 col-sm-6 col-md-2>\n          <button ion-button (click)="twitterfeeds()" class="twitter-timeline options" ><ion-icon name="logo-twitter"></ion-icon></button>\n      </ion-col>\n      <ion-col col-xs-12 col-sm-6 col-md-2>\n          <button ion-button (click)="youtubefeeds()" class="twitter-timeline options_2" ><ion-icon name="logo-youtube"></ion-icon></button>  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n   \n   \n</ion-content> \n\n'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/social-feed/social-feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], SocialFeedPage);
    return SocialFeedPage;
}());

//# sourceMappingURL=social-feed.js.map

/***/ })

});
//# sourceMappingURL=16.js.map