webpackJsonp([11],{

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubefeedsPageModule", function() { return YoutubefeedsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__youtubefeeds__ = __webpack_require__(896);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YoutubefeedsPageModule = /** @class */ (function () {
    function YoutubefeedsPageModule() {
    }
    YoutubefeedsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__youtubefeeds__["a" /* YoutubefeedsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__youtubefeeds__["a" /* YoutubefeedsPage */]),
            ],
        })
    ], YoutubefeedsPageModule);
    return YoutubefeedsPageModule;
}());

//# sourceMappingURL=youtubefeeds.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubefeedsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_socialfeed_service_socialfeed_service__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubefeedsPage = /** @class */ (function () {
    function YoutubefeedsPage(navCtrl, SocialfeedService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.SocialfeedService = SocialfeedService;
        this.navParams = navParams;
        this.videos = [];
        console.log('Getting videos');
        this.SocialfeedService.getVideos().subscribe(function (data) {
            console.log(data);
            _this.videos = data.items;
        });
    }
    YoutubefeedsPage.prototype.viewVideo = function (video) {
        this.navCtrl.push('YoutubePlayPage', { video: video });
    };
    YoutubefeedsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-youtubefeeds',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/youtubefeeds/youtubefeeds.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Youtube Feeds</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card *ngFor = "let video of videos" (click)="viewVideo(video)">\n  <img [src] = "video.snippet.thumbnails.high.url" />\n    <ion-card-content>\n      <ion-card-title>\n        {{video.snippet.title}}\n      </ion-card-title>\n      <p>{{video.snippet.description}}</p>\n      <!-- <iframe  [src] ="video.id.videoId" width="560" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/youtubefeeds/youtubefeeds.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_socialfeed_service_socialfeed_service__["a" /* SocialfeedServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], YoutubefeedsPage);
    return YoutubefeedsPage;
}());

;
//# sourceMappingURL=youtubefeeds.js.map

/***/ })

});
//# sourceMappingURL=11.js.map