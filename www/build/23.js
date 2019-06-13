webpackJsonp([23],{

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfographicEnterprisePageModule", function() { return InfographicEnterprisePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infographic_enterprise__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InfographicEnterprisePageModule = /** @class */ (function () {
    function InfographicEnterprisePageModule() {
    }
    InfographicEnterprisePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__infographic_enterprise__["a" /* InfographicEnterprisePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infographic_enterprise__["a" /* InfographicEnterprisePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartModule"]
            ],
        })
    ], InfographicEnterprisePageModule);
    return InfographicEnterprisePageModule;
}());

//# sourceMappingURL=infographic-enterprise.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicEnterprisePage; });
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
 * Generated class for the InfographicEnterprisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfographicEnterprisePage = /** @class */ (function () {
    function InfographicEnterprisePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data1 = {};
        this.data2 = {};
        this.options = {
            legend: {
                display: false
            }
        };
        this.startups = navParams.get('startups');
    }
    InfographicEnterprisePage.prototype.ionViewDidLoad = function () {
        var total = this.startups.male + this.startups.female + this.startups.other;
        // let chart = new CanvasJS.Chart("chartContainer", {
        //   animationEnabled: true,
        //   // title: {
        //   //   text: "Basic Column Chart in Angular"
        //   // },
        //   data: [{
        //     type: "column",
        //     dataPoints: [
        //       { y: this.startups.male, label: "Male" },
        //       { y: this.startups.female, label: "Female" },
        //       { y: this.startups.other, label: "Other" },
        //     ]
        //   }]
        // });
        // chart.render();
        // let chart = new CanvasJS.Chart("chartContainer", {
        //   animationEnabled: true,
        //   // title: {
        //   //   text: "Desktop Search Engine Market Share - 2016"
        //   // },
        //   data: [{
        //     type: "doughnut",
        //     startAngle: 240,
        //     // yValueFormatString: "##0\"%\"",
        //     // indexLabel: "{label} {y}",
        //     dataPoints: [
        //       { y: (this.startups.male / total) * 100 },
        //       { y: (this.startups.female / total) * 100 },
        //       { y: (this.startups.other / total) * 100 }
        //     ]
        //   }]
        // });
        // chart.render();
        // chart = new CanvasJS.Chart("chartContainer2", {
        //   type: "line",
        //   data: {
        //     datasets: [
        //       {
        //         data: [Math.round((this.startups.male / total) * 100),
        //           Math.round((this.startups.female / total) * 100),
        //           Math.round((this.startups.other / total) * 100)]
        //       }
        //     ],
        //     labels: ['One', 'Two', 'Three']
        //   }
        // })
        this.data1 = {
            datasets: [
                {
                    data: [Math.round((this.startups.male / total) * 100),
                        Math.round((this.startups.female / total) * 100),
                        Math.round((this.startups.other / total) * 100)],
                    backgroundColor: [
                        '#14676b',
                        '#072f30',
                        '#95d83d'
                    ]
                }
            ],
            labels: ['Male', 'Female', 'Other']
        };
        this.data2 = {
            datasets: [
                {
                    data: [Math.round((this.startups.male / total) * 100),
                        Math.round((this.startups.female / total) * 100),
                        Math.round((this.startups.other / total) * 100)],
                    backgroundColor: [
                        '#14676b',
                        '#072f30',
                        '#95d83d'
                    ]
                }
            ],
            labels: ['Male', 'Female', 'Other']
        };
        // chart = new CanvasJS.Chart("chartContainer2", {
        //   animationEnabled: true,
        //   // title: {
        //   //   text: "Desktop Search Engine Market Share - 2016"
        //   // },
        //   data: [{
        //     type: "doughnut",
        //     startAngle: 240,
        //     // yValueFormatString: "##0\"%\"",
        //     // indexLabel: "{label} {y}",
        //     datasets: [{
        //       data: [(this.startups.male / total) * 100,
        //         (this.startups.female / total) * 100,
        //         (this.startups.other / total) * 100],
        //         backgroundColor: [
        //           'rgba(0, 0, 0, 1)',
        //                 'rgba(1, 0, 0, 1)',
        //                 'rgba(0, 1, 0, 1)',
        //         ]
        //     }
        //     ],
        //     // dataPoints: [
        //     //   { y: (this.startups.male / total) * 100 },
        //     //   { y: (this.startups.female / total) * 100 },
        //     //   { y: (this.startups.other / total) * 100 }
        //     // ],
        //   }]
        // });
        // chart.render();
        // chart = new CanvasJS.Chart("chartContainer3", {
        //   animationEnabled: true,
        //   // title: {
        //   //   text: "Desktop Search Engine Market Share - 2016"
        //   // },
        //   data: [{
        //     type: "pie",
        //     startAngle: 240,
        //     yValueFormatString: "##0\"%\"",
        //     indexLabel: "{label} {y}",
        //     dataPoints: [
        //       {y: 70, label: "Male"},
        //       {y: 20, label: "Female"},
        //       {y: 10, label: "Other"}
        //     ]
        //   }]
        // });
        // chart.render();
        // chart = new CanvasJS.Chart("chartContainer4", {
        //   animationEnabled: true,
        //   // title: {
        //   //   text: "Desktop Search Engine Market Share - 2016"
        //   // },
        //   data: [{
        //     type: "pie",
        //     startAngle: 240,
        //     yValueFormatString: "##0\"%\"",
        //     indexLabel: "{label} {y}",
        //     dataPoints: [
        //       { y: this.startups.jobs.fulltime.male, label: "Male" },
        //       { y: this.startups.jobs.fulltime.female, label: "Female" },
        //       { y: this.startups.jobs.fulltime.other, label: "Other" }
        //     ]
        //   }]
        // });
        // chart.render();
    };
    InfographicEnterprisePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.findCanvases();
        }, 200);
    };
    InfographicEnterprisePage.prototype.ionViewDidLeave = function () {
        clearInterval(this.interval);
    };
    InfographicEnterprisePage.prototype.viewStartups = function () {
        this.navCtrl.push('StartupsPage');
    };
    InfographicEnterprisePage.prototype.findCanvases = function () {
        var canvases = document.getElementsByTagName("canvas");
        for (var i = 0; i < canvases.length; i++) {
            var canvas = canvases[i];
            this.removeWatermarks(canvas);
        }
    };
    InfographicEnterprisePage.prototype.removeWatermarks = function (canvas) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "White";
        ctx.fillRect(0, 190, canvas.width, 10);
    };
    InfographicEnterprisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-infographic-enterprise',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/infographic-enterprise/infographic-enterprise.html"*/'<!--\n  Generated template for the InfographicEnterprisePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Enterprise Development</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4>Startups</h4>\n  <div class="holder">\n    <div class="box first" (click)="viewStartups(\'current\')">\n      <span class="title">Current</span>\n      <span class="value">{{startups.current}}</span>\n      <i class="fa fa-rocket" aria-hidden="true"></i>\n    </div>\n\n    <div class="box second" (click)="viewStartups(\'alumni\')">\n      <span class="title">Alumni</span>\n      <span class="value">{{startups.alumni}}</span>\n      <i class="fa fa-graduation-cap" aria-hidden="true"></i>\n    </div>\n  </div>\n\n  <div class="holder">\n  <div class="box fifth">\n    <span class="title">Founders</span>\n    <span class="value">6</span>\n    <i class="fa fa-user-friends" aria-hidden="true"></i>\n  </div>\n</div>\n\n<div class="holder" style="margin-top: 20px">\n  <div class="box male">\n    <span class="title">Male</span>\n    <span class="value">60%</span>\n    <i class="fa fa-male" aria-hidden="true"></i>\n  </div>\n\n  <div class="box female">\n    <span class="title">Female</span>\n    <span class="value">40%</span>\n    <i class="fa fa-female" aria-hidden="true"></i>\n  </div>\n</div>\n\n<div class="holder">\n  <div class="box fifth">\n    <span class="title">Total Jobs</span>\n    <span class="value">6</span>\n    <i class="fa fa-user-friends" aria-hidden="true"></i>\n  </div>\n</div>\n\n  <div class="holder" style="margin-top: 20px">\n      <div class="box first">\n        <span class="title">Full Time</span>\n        <span class="value">{{startups.youth}}%</span>\n        <i class="fa fa-child" aria-hidden="true"></i>\n      </div>\n  \n      <div class="box second">\n        <span class="title">Part Time</span>\n        <span class="value">{{startups.black}}%</span>\n        <i class="fa fa-user-friends" aria-hidden="true"></i>\n      </div>\n    </div>\n\n    <ion-row>\n      <ion-col col-6>\n          <chart type="pie" [data]="data1" [options]="options"></chart>\n      </ion-col>\n      <ion-col col-6>\n          <chart type="pie" [data]="data2" [options]="options"></chart>\n      </ion-col>\n    </ion-row>\n    <!-- <div class="holder">\n      \n      <div class="box">\n          <chart type="pie" [data]="data1"></chart>\n      </div>\n\n      <div class="box">\n        <chart type="pie" [data]="data2"></chart>\n      </div>\n    </div> -->\n\n\n    <h4>Funds</h4>\n    <div class="holder">\n      <div class="box first">\n        <span class="title">Revenue</span>\n        <span class="value">R1.05m</span>\n        <i class="fa fa-dollar-sign" aria-hidden="true"></i>\n      </div>\n  \n      <div class="box second">\n        <span class="title">Leveraged</span>\n        <span class="value">R4.5m</span>\n        <i class="fa fa-hand-holding-usd" aria-hidden="true"></i>\n      </div>\n    </div>\n\n    <!-- <div id="chartContainer3" style="height: 200px; width: 100%; margin-top: 20px; pointer-events: none"></div>\n\n    <h4>Jobs - Part Time</h4>\n    <div class="holder">\n      <div class="box third">\n        <span class="title">Youth</span>\n        <span class="value">{{startups.jobs.parttime.youth}}%</span>\n        <i class="fa fa-child" aria-hidden="true"></i>\n      </div>\n  \n      <div class="box fourth">\n        <span class="title">Black</span>\n        <span class="value">{{startups.jobs.parttime.black}}%</span>\n        <i class="fa fa-user-friends" aria-hidden="true"></i>\n      </div>\n    </div>\n\n    <div id="chartContainer4" style="height: 200px; width: 100%; margin-top: 20px; pointer-events: none"></div> -->\n  </ion-content>\n\n  <ion-footer padding>\n    <button ion-button block color="primary-dark" (click)="viewStartups()">View Startups</button>\n  </ion-footer>'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/infographic-enterprise/infographic-enterprise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InfographicEnterprisePage);
    return InfographicEnterprisePage;
}());

//# sourceMappingURL=infographic-enterprise.js.map

/***/ })

});
//# sourceMappingURL=23.js.map