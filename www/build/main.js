webpackJsonp([28],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dpd_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(dpdService) {
        this.dpdService = dpdService;
    }
    UserService.prototype.setPush = function (token) {
        var _this = this;
        return this.dpdService.currentUser().then(function (user) {
            return _this.dpdService.put('users', user.id, { pushId: token });
        });
    };
    UserService.prototype.logout = function () {
        return this.dpdService.logout();
    };
    UserService.prototype.login = function (email, password) {
        return this.dpdService.login(email, password);
    };
    UserService.prototype.signup = function (email, password) {
        var _this = this;
        return this.dpdService.signup(email, password).then(function () {
            return _this.dpdService.login(email, password);
        });
    };
    UserService.prototype.profile = function (uuid) {
        if (uuid) {
            return this.dpdService.item('users', uuid);
        }
        else {
            return this.dpdService.currentUser();
        }
    };
    UserService.prototype.changePassword = function (oldPassword, newPassword) {
        var _this = this;
        return this.dpdService.currentUser().then(function (user) {
            return _this.login(user.username, oldPassword).then(function () {
                return _this.dpdService.put('users', user.id, { password: newPassword });
            });
        });
    };
    UserService.prototype.setProfile = function (profile) {
        var _this = this;
        return this.dpdService.currentUser().then(function (user) {
            return _this.dpdService.put('users', user['id'], profile);
        });
    };
    UserService.prototype.currentUser = function () {
        return this.dpdService.currentUser();
    };
    UserService.prototype.passwordReset = function (email) {
        return this.dpdService.post('resetpassword', { email: email });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dpd_service__["a" /* DPDService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		541,
		27
	],
	"../pages/cats/cats.module": [
		542,
		26
	],
	"../pages/change-password/change-password.module": [
		543,
		10
	],
	"../pages/codetribes/codetribes.module": [
		544,
		9
	],
	"../pages/edit-profile/edit-profile.module": [
		545,
		25
	],
	"../pages/forgot-password/forgot-password.module": [
		546,
		8
	],
	"../pages/home/home.module": [
		547,
		7
	],
	"../pages/infographic-codetribe/infographic-codetribe.module": [
		548,
		24
	],
	"../pages/infographic-enterprise/infographic-enterprise.module": [
		549,
		23
	],
	"../pages/innovation/innovation.module": [
		550,
		22
	],
	"../pages/innovations/innovations.module": [
		551,
		6
	],
	"../pages/loading/loading.module": [
		552,
		21
	],
	"../pages/login/login.module": [
		553,
		20
	],
	"../pages/member/member.module": [
		554,
		19
	],
	"../pages/members/members.module": [
		555,
		5
	],
	"../pages/notifications/notifications.module": [
		556,
		0
	],
	"../pages/profile/profile.module": [
		557,
		4
	],
	"../pages/reports/reports.module": [
		558,
		3
	],
	"../pages/settings/settings.module": [
		559,
		18
	],
	"../pages/share/share.module": [
		560,
		2
	],
	"../pages/slides/slides.module": [
		561,
		17
	],
	"../pages/social-feed/social-feed.module": [
		562,
		16
	],
	"../pages/startup/startup.module": [
		563,
		15
	],
	"../pages/startups/startups.module": [
		564,
		1
	],
	"../pages/tabs/tabs.module": [
		565,
		14
	],
	"../pages/twitterfeeds/twitterfeeds.module": [
		566,
		13
	],
	"../pages/youtube-play/youtube-play.module": [
		567,
		12
	],
	"../pages/youtubefeeds/youtubefeeds.module": [
		568,
		11
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 197;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dpd_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberService = /** @class */ (function () {
    function MemberService(dpdService) {
        this.dpdService = dpdService;
    }
    MemberService.prototype.startups = function () {
        return this.dpdService.get('organizations', { startup: true, $sort: { name: 1 } });
    };
    MemberService.prototype.featured = function () {
        return this.dpdService.get('organizations', { startup: true, featured: true, $sort: { name: 1 }, $limit: 6 });
    };
    MemberService.prototype.members = function (organizationId) {
        return this.dpdService.get('users', { organizationId: organizationId });
    };
    MemberService.prototype.students = function () {
        return this.dpdService.get('users', { roleId: 'ab22c044d429d886', $sort: { name: 1 } });
    };
    MemberService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dpd_service__["a" /* DPDService */]])
    ], MemberService);
    return MemberService;
}());

//# sourceMappingURL=member-service.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dpd_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsService = /** @class */ (function () {
    function ReportsService(dpdService, http) {
        this.dpdService = dpdService;
        this.http = http;
    }
    ReportsService.prototype.reports = function () {
        var _this = this;
        return this.dpdService.currentUser().then(function (user) {
            return _this.dpdService.get('reports', {
                organizationId: user.organizationId,
                $sort: { created: -1 }
            });
        });
    };
    ReportsService.prototype.bookmark = function (report) {
        // return this.dpdService.post()
    };
    ReportsService.prototype.share = function (reportId, emails) {
        return this.dpdService.post('share', { emails: emails, reportId: reportId });
    };
    ReportsService.prototype.stats = function () {
        return this.http.get('https://app.mlab.co.za/stats').toPromise().then(function (data) {
            return data.json();
        });
        // return this.dpdService.get('stats')
    };
    ReportsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dpd_service__["a" /* DPDService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ReportsService);
    return ReportsService;
}());

//# sourceMappingURL=reports-service.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = {
    loggedIn: false,
    profile: {}
};
//# sourceMappingURL=app.values.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InnovationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dpd_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InnovationService = /** @class */ (function () {
    function InnovationService(dpdService) {
        this.dpdService = dpdService;
    }
    InnovationService.prototype.innovations = function () {
        return this.dpdService.get('innovations');
    };
    InnovationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dpd_service__["a" /* DPDService */]])
    ], InnovationService);
    return InnovationService;
}());

//# sourceMappingURL=innovation-service.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialfeedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { IonicPage, NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the SocialfeedServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SocialfeedServiceProvider = /** @class */ (function () {
    function SocialfeedServiceProvider(http) {
        this.http = http;
        // constructor(public http: HttpClient) {
        //   console.log('Hello SocialfeedServiceProvider Provider');
        // }
        // tslint:disable-next-line:no-inferrable-types
        this.channelId = 'UCn7NMZOakw4N6pQ-tQ9nkMQ';
        // tslint:disable-next-line:no-inferrable-types
        this.maxRes = '5';
        // tslint:disable-next-line:no-inferrable-types
        this.googleToken = 'AIzaSyAlgBKSHbU5ANHTjG_QMxcO0U5X3gS1ucs';
        this.search = 'mLabSAStudio';
        this.posts = [];
    }
    SocialfeedServiceProvider.prototype.getVideos = function () {
        // tslint:disable-next-line:max-line-length
        var url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAlgBKSHbU5ANHTjG_QMxcO0U5X3gS1ucs&channelId=UCn7NMZOakw4N6pQ-tQ9nkMQ&part=snippet,id&order=date&maxResults=50'; // + '&q=' + this.search + '&type=video&order=date&maxResults=' + this.maxRes;
        //   this.http.get(url).subscribe(data => {this.posts = this.posts.push({list: data});
        //   // tslint:disable-next-line:align
        //   console.log(this.posts);
        // });
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (response) {
            return response.json();
        }));
    };
    SocialfeedServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
        // @Injectable({
        //   providedIn: 'root'
        // });
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SocialfeedServiceProvider);
    return SocialfeedServiceProvider;
}());

// youtubefeeds(){
//   this.navCtrl.push('YoutubefeedsPage')
// }
// currentUser(){
//   return this.dpdService.currentUser()
// }
//# sourceMappingURL=socialfeed-service.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(481);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_dpd_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_reports_service__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_member_service__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_chartjs__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_innovation_service__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_native_file_opener__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_socialfeed_service_socialfeed_service__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















// import { SociaialfeedsProvider } from '../providers/sociaialfeeds/sociaialfeeds';
// import { SociaifeedServiceProvider } from '../providers/sociaifeed-service/sociaifeed-service';
// import { SocialfeedServiceProvider } from '../providers/socialfeed-service/socialfeed-service';
// import { RouterModule, Routes } from '@angular/core/core';
// const appRoutes: Routes = [
//   { path: 'youtubefeedspage', component: YoutubefeedsPage}]
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cats/cats.module#CatsPageModule', name: 'CatsPage', segment: 'cats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/codetribes/codetribes.module#CodetribesPageModule', name: 'CodetribesPage', segment: 'codetribes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infographic-codetribe/infographic-codetribe.module#InfographicCodetribePageModule', name: 'InfographicCodetribePage', segment: 'infographic-codetribe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infographic-enterprise/infographic-enterprise.module#InfographicEnterprisePageModule', name: 'InfographicEnterprisePage', segment: 'infographic-enterprise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/innovation/innovation.module#InnovationPageModule', name: 'InnovationPage', segment: 'innovation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/innovations/innovations.module#InnovationsPageModule', name: 'InnovationsPage', segment: 'innovations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loading/loading.module#LoadingPageModule', name: 'LoadingPage', segment: 'loading', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member/member.module#MemberPageModule', name: 'MemberPage', segment: 'member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/members/members.module#MembersPageModule', name: 'MembersPage', segment: 'members', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsPageModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/share/share.module#SharePageModule', name: 'SharePage', segment: 'share', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/social-feed/social-feed.module#SocialFeedPageModule', name: 'SocialFeedPage', segment: 'social-feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/startup/startup.module#StartupPageModule', name: 'StartupPage', segment: 'startup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/startups/startups.module#StartupsPageModule', name: 'StartupsPage', segment: 'startups', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/twitterfeeds/twitterfeeds.module#TwitterfeedsPageModule', name: 'TwitterfeedsPage', segment: 'twitterfeeds', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtube-play/youtube-play.module#YoutubePlayPageModule', name: 'YoutubePlayPage', segment: 'youtube-play', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtubefeeds/youtubefeeds.module#YoutubefeedsPageModule', name: 'YoutubefeedsPage', segment: 'youtubefeeds', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angular2_chartjs__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["b" /* HttpModule */],
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_7__services_dpd_service__["a" /* DPDService */],
                __WEBPACK_IMPORTED_MODULE_8__services_reports_service__["a" /* ReportsService */],
                __WEBPACK_IMPORTED_MODULE_9__services_member_service__["a" /* MemberService */],
                __WEBPACK_IMPORTED_MODULE_14__services_innovation_service__["a" /* InnovationService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_18__node_modules_ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_19__providers_socialfeed_service_socialfeed_service__["a" /* SocialfeedServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 199,
	"./ar-dz": 200,
	"./ar-dz.js": 200,
	"./ar-kw": 201,
	"./ar-kw.js": 201,
	"./ar-ly": 202,
	"./ar-ly.js": 202,
	"./ar-ma": 203,
	"./ar-ma.js": 203,
	"./ar-sa": 204,
	"./ar-sa.js": 204,
	"./ar-tn": 205,
	"./ar-tn.js": 205,
	"./ar.js": 199,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bm": 209,
	"./bm.js": 209,
	"./bn": 210,
	"./bn.js": 210,
	"./bo": 211,
	"./bo.js": 211,
	"./br": 212,
	"./br.js": 212,
	"./bs": 213,
	"./bs.js": 213,
	"./ca": 214,
	"./ca.js": 214,
	"./cs": 215,
	"./cs.js": 215,
	"./cv": 216,
	"./cv.js": 216,
	"./cy": 217,
	"./cy.js": 217,
	"./da": 218,
	"./da.js": 218,
	"./de": 219,
	"./de-at": 220,
	"./de-at.js": 220,
	"./de-ch": 221,
	"./de-ch.js": 221,
	"./de.js": 219,
	"./dv": 222,
	"./dv.js": 222,
	"./el": 223,
	"./el.js": 223,
	"./en-SG": 224,
	"./en-SG.js": 224,
	"./en-au": 225,
	"./en-au.js": 225,
	"./en-ca": 226,
	"./en-ca.js": 226,
	"./en-gb": 227,
	"./en-gb.js": 227,
	"./en-ie": 228,
	"./en-ie.js": 228,
	"./en-il": 229,
	"./en-il.js": 229,
	"./en-nz": 230,
	"./en-nz.js": 230,
	"./eo": 231,
	"./eo.js": 231,
	"./es": 232,
	"./es-do": 233,
	"./es-do.js": 233,
	"./es-us": 234,
	"./es-us.js": 234,
	"./es.js": 232,
	"./et": 235,
	"./et.js": 235,
	"./eu": 236,
	"./eu.js": 236,
	"./fa": 237,
	"./fa.js": 237,
	"./fi": 238,
	"./fi.js": 238,
	"./fo": 239,
	"./fo.js": 239,
	"./fr": 240,
	"./fr-ca": 241,
	"./fr-ca.js": 241,
	"./fr-ch": 242,
	"./fr-ch.js": 242,
	"./fr.js": 240,
	"./fy": 243,
	"./fy.js": 243,
	"./ga": 244,
	"./ga.js": 244,
	"./gd": 245,
	"./gd.js": 245,
	"./gl": 246,
	"./gl.js": 246,
	"./gom-latn": 247,
	"./gom-latn.js": 247,
	"./gu": 248,
	"./gu.js": 248,
	"./he": 249,
	"./he.js": 249,
	"./hi": 250,
	"./hi.js": 250,
	"./hr": 251,
	"./hr.js": 251,
	"./hu": 252,
	"./hu.js": 252,
	"./hy-am": 253,
	"./hy-am.js": 253,
	"./id": 254,
	"./id.js": 254,
	"./is": 255,
	"./is.js": 255,
	"./it": 256,
	"./it-ch": 257,
	"./it-ch.js": 257,
	"./it.js": 256,
	"./ja": 258,
	"./ja.js": 258,
	"./jv": 259,
	"./jv.js": 259,
	"./ka": 260,
	"./ka.js": 260,
	"./kk": 261,
	"./kk.js": 261,
	"./km": 262,
	"./km.js": 262,
	"./kn": 263,
	"./kn.js": 263,
	"./ko": 264,
	"./ko.js": 264,
	"./ku": 265,
	"./ku.js": 265,
	"./ky": 266,
	"./ky.js": 266,
	"./lb": 267,
	"./lb.js": 267,
	"./lo": 268,
	"./lo.js": 268,
	"./lt": 269,
	"./lt.js": 269,
	"./lv": 270,
	"./lv.js": 270,
	"./me": 271,
	"./me.js": 271,
	"./mi": 272,
	"./mi.js": 272,
	"./mk": 273,
	"./mk.js": 273,
	"./ml": 274,
	"./ml.js": 274,
	"./mn": 275,
	"./mn.js": 275,
	"./mr": 276,
	"./mr.js": 276,
	"./ms": 277,
	"./ms-my": 278,
	"./ms-my.js": 278,
	"./ms.js": 277,
	"./mt": 279,
	"./mt.js": 279,
	"./my": 280,
	"./my.js": 280,
	"./nb": 281,
	"./nb.js": 281,
	"./ne": 282,
	"./ne.js": 282,
	"./nl": 283,
	"./nl-be": 284,
	"./nl-be.js": 284,
	"./nl.js": 283,
	"./nn": 285,
	"./nn.js": 285,
	"./pa-in": 286,
	"./pa-in.js": 286,
	"./pl": 287,
	"./pl.js": 287,
	"./pt": 288,
	"./pt-br": 289,
	"./pt-br.js": 289,
	"./pt.js": 288,
	"./ro": 290,
	"./ro.js": 290,
	"./ru": 291,
	"./ru.js": 291,
	"./sd": 292,
	"./sd.js": 292,
	"./se": 293,
	"./se.js": 293,
	"./si": 294,
	"./si.js": 294,
	"./sk": 295,
	"./sk.js": 295,
	"./sl": 296,
	"./sl.js": 296,
	"./sq": 297,
	"./sq.js": 297,
	"./sr": 298,
	"./sr-cyrl": 299,
	"./sr-cyrl.js": 299,
	"./sr.js": 298,
	"./ss": 300,
	"./ss.js": 300,
	"./sv": 301,
	"./sv.js": 301,
	"./sw": 302,
	"./sw.js": 302,
	"./ta": 303,
	"./ta.js": 303,
	"./te": 304,
	"./te.js": 304,
	"./tet": 305,
	"./tet.js": 305,
	"./tg": 306,
	"./tg.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./ug-cn": 314,
	"./ug-cn.js": 314,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 502;

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DPDService; });
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


var DPDService = /** @class */ (function () {
    function DPDService(platform) {
        platform.ready().then(function () {
            dpd.setBaseUrl('https://app.mlab.co.za');
        });
    }
    DPDService.prototype.login = function (username, password) {
        return new Promise(function (resolve, reject) {
            dpd.users.login({
                username: username,
                password: password
            }, function (data, error) {
                if (error) {
                    if (error.message == "bad credentials") {
                        error.message = "You've entered an invalid password";
                    }
                    reject(error);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    DPDService.prototype.signup = function (username, password, extra) {
        return new Promise(function (resolve, reject) {
            var obj = { username: username, password: password };
            if (extra != null) {
                Object.assign(obj, extra);
            }
            dpd.users.post(obj, function (data, err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    DPDService.prototype.currentUser = function () {
        return new Promise(function (resolve, reject) {
            dpd.users.me(function (data, err) {
                if (err) {
                    reject(null);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    DPDService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            dpd.users.logout(function (result, error) {
                resolve(result);
            });
        });
    };
    DPDService.prototype.item = function (collection, id) {
        return new Promise(function (resolve, reject) {
            dpd[collection].get(id, function (result, err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    DPDService.prototype.get = function (collection, query) {
        return new Promise(function (resolve, reject) {
            if (query) {
                dpd[collection].get(query, function (result, err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            }
            else {
                dpd[collection].get(function (result, err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            }
        });
    };
    DPDService.prototype.postWithId = function (collection, id, obj) {
        return new Promise(function (resolve, reject) {
            dpd[collection].post(id, obj, function (result, err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    DPDService.prototype.post = function (collection, obj) {
        return new Promise(function (resolve, reject) {
            dpd[collection].post(obj, function (result, err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    DPDService.prototype.put = function (collection, id, obj) {
        return new Promise(function (resolve, reject) {
            dpd[collection].put(id, obj, function (result, err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    DPDService.prototype.delete = function (collection, query) {
        return new Promise(function (resolve, reject) {
            dpd[collection].del(query, function (result, err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    DPDService.prototype.listen = function (message, callback) {
        dpd.on(message, callback);
    };
    DPDService.prototype.stopListening = function (message) {
        dpd.off(message);
    };
    DPDService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], DPDService);
    return DPDService;
}());

//# sourceMappingURL=dpd-service.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_values__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, alertController, userService, events) {
        var _this = this;
        this.alertController = alertController;
        this.userService = userService;
        this.events = events;
        this.rootPage = 'LoadingPage';
        this.loggedIn = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.userService.currentUser().then(function (profile) {
                console.log(profile);
                if (profile) {
                    if (profile.active) {
                        _this.loggedIn = true;
                        __WEBPACK_IMPORTED_MODULE_5__app_values__["a" /* data */].profile = profile;
                        _this.nav.setRoot('ReportsPage');
                    }
                    else {
                        _this.nav.setRoot('SlidesPage');
                        _this.userService.logout();
                    }
                }
                else {
                    _this.rootPage = 'SlidesPage';
                }
            }).catch(function (err) {
                console.log(err);
                _this.rootPage = 'SlidesPage';
            });
        });
        this.events.subscribe('loggedIn', function () {
            _this.loggedIn = true;
        });
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        this.alertController.create({
            title: 'Logout',
            message: 'Are you sure you  want to logout?',
            buttons: [{
                    text: 'Yes',
                    handler: function () {
                        __WEBPACK_IMPORTED_MODULE_5__app_values__["a" /* data */].profile = {};
                        _this.loggedIn = false;
                        _this.userService.logout();
                        _this.nav.setRoot('HomePage');
                    }
                }, 'No']
        }).present();
    };
    MyApp.prototype.social = function () {
        this.nav.push('SocialFeedPage');
    };
    MyApp.prototype.about = function () {
        this.nav.push('AboutPage');
    };
    MyApp.prototype.members = function () {
        this.nav.push('StartupsPage');
    };
    MyApp.prototype.profile = function () {
        this.nav.push('ProfilePage');
    };
    MyApp.prototype.notifications = function () {
        this.nav.push('NotificationsPage');
    };
    MyApp.prototype.programmes = function () {
        this.nav.push('HomePage', { loggedIn: true });
    };
    MyApp.prototype.bookmarks = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/app/app.html"*/'<ion-menu [content]="content" type="overlay" class="menu" *ngIf="loggedIn" type="push">\n    <ion-content class="menu-background">\n        <div class="profile-image"> \n          <img src="assets/imgs/mlab-logo.png" />\n        </div>\n        <div class="menu-item my-profile" (click)="profile()" menuClose>\n            <ion-icon name="person"></ion-icon>\n            <span>Profile</span>\n          </div>\n\n        <div class="menu-item my-settings" (click)="members()" menuClose>\n            <ion-icon name="people"></ion-icon>\n            <span>Startups</span>\n          </div>\n\n        <div class="menu-item my-emojis" (click)="programmes()" menuClose>\n          <ion-icon name="jet"></ion-icon>\n          \n          <span>Programmes</span>\n        </div>\n\n        <div class="menu-item social" (click)="social()" menuClose>\n          <ion-icon name="paper"></ion-icon>\n          <span>Social Feed</span>\n        </div>\n\n        <div class="menu-item my-settings" (click)="notifications()" menuClose>\n          <ion-icon name="notifications"></ion-icon>\n          <span>Notifications</span>\n        </div>\n\n  \n        <div class="menu-item logout" (click)="logout()" menuClose>\n          <ion-icon name="exit"></ion-icon>\n          <span>Logout</span>\n        </div>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[476]);
//# sourceMappingURL=main.js.map