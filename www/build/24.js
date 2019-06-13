webpackJsonp([24],{

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfographicCodetribePageModule", function() { return InfographicCodetribePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infographic_codetribe__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InfographicCodetribePageModule = /** @class */ (function () {
    function InfographicCodetribePageModule() {
    }
    InfographicCodetribePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__infographic_codetribe__["a" /* InfographicCodetribePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infographic_codetribe__["a" /* InfographicCodetribePage */]),
                __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartModule"]
            ],
        })
    ], InfographicCodetribePageModule);
    return InfographicCodetribePageModule;
}());

//# sourceMappingURL=infographic-codetribe.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfographicCodetribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_values__ = __webpack_require__(469);
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
 * Generated class for the InfographicCodetribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfographicCodetribePage = /** @class */ (function () {
    function InfographicCodetribePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data1 = {};
        this.data2 = {};
        this.options = {
            legend: {
                display: false
            }
        };
        this.students = navParams.get('students');
    }
    InfographicCodetribePage.prototype.ionViewDidLoad = function () {
        // let chart = new CanvasJS.Chart("chartContainer", {
        //   animationEnabled: true,
        //   data: [{
        //     type: "pie",
        //     startAngle: 0,
        //     yValueFormatString: "##0\"%\"",
        //     indexLabel: "{label} {y}",
        //     dataPoints: [
        //       { y: (this.students.female / this.students.total) * 100, label: "Startup" },
        //       { y: (this.students.male / this.students.total) * 100, label: "Full Time" }
        //     ]
        //   }]
        // });
        // chart.render();
        // chart = new CanvasJS.Chart("chartContainer2", {
        //   animationEnabled: true,
        //   data: [{
        //     type: "pie",
        //     startAngle: 0,
        //     yValueFormatString: "##0\"%\"",
        //     // indexLabel: "{label} {y}",
        //     dataPoints: [
        //       { y: (this.students.male / this.students.total) * 100, label: "Male" },
        //       { y: (this.students.female / this.students.total) * 100, label: "Female" },
        //       { y: (this.students.other / this.students.total) * 100, label: "Other" }
        //     ]
        //   }]
        // });
        // chart.render();
        var total = this.students.employment.startups + this.students.employment.jobs;
        // if (total > 0) {
        // chart = new CanvasJS.Chart("chartContainer3", {
        //   animationEnabled: true,
        //   data: [{
        //     type: "pie",
        //     startAngle: 0,
        //     yValueFormatString: "##0\"%\"",
        //     indexLabel: "{label} {y}",
        //     dataPoints: [
        //       { y: (this.students.employment.startups / total) * 100, label: "Startups" },
        //       { y: (this.students.employment.jobs / total) * 100, label: "Jobs" }
        //     ]
        //   }]
        // });
        // } else {
        //     chart = new CanvasJS.Chart("chartContainer3", {
        //       animationEnabled: true,
        //       data: [{
        //         type: "pie",
        //         startAngle: 0,
        //         yValueFormatString: "##0\"%\"",
        //         indexLabel: "{label} {y}",
        //         dataPoints: [
        //           { y: 0, label: "Startups" },
        //           { y: 0, label: "Jobs" }
        //         ]
        //       }]
        //     });
        // }
        // chart.render();
        this.data1 = {
            datasets: [
                {
                    data: [Math.round((this.students.male / this.students.total) * 100),
                        Math.round((this.students.female / this.students.total) * 100),
                        Math.round((this.students.other / this.students.total) * 100)],
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
                    data: [Math.round((this.students.female / this.students.total) * 100),
                        Math.round((this.students.male / this.students.total) * 100),
                        Math.round((this.students.other / this.students.total) * 100)],
                    backgroundColor: [
                        '#14676b',
                        '#072f30',
                        '#95d83d'
                    ]
                }
            ],
            labels: ['Male', 'Female', 'Other']
        };
    };
    InfographicCodetribePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.findCanvases();
        }, 200);
    };
    InfographicCodetribePage.prototype.findCanvases = function () {
        var canvases = document.getElementsByTagName("canvas");
        for (var i = 0; i < canvases.length; i++) {
            var canvas = canvases[i];
            this.removeWatermarks(canvas);
        }
    };
    InfographicCodetribePage.prototype.removeWatermarks = function (canvas) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "White";
        ctx.fillRect(0, 190, canvas.width, 10);
    };
    InfographicCodetribePage.prototype.ionViewDidLeave = function () {
        clearInterval(this.interval);
    };
    InfographicCodetribePage.prototype.showViewStudents = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__app_app_values__["a" /* data */].profile)
            return __WEBPACK_IMPORTED_MODULE_2__app_app_values__["a" /* data */].profile['roleId'] == '1774522c1c6e0b65';
        return false;
    };
    InfographicCodetribePage.prototype.viewStudents = function () {
        this.navCtrl.push('CodetribesPage');
    };
    InfographicCodetribePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-infographic-codetribe',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/infographic-codetribe/infographic-codetribe.html"*/'<!--\n  Generated template for the InfographicCodetribePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Skills Development</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <!-- <h4>Codetribers Trained</h4> -->\n    <div class="holder">\n      <div class="box fifth">\n        <span class="title">Developers Trained</span>\n        <span class="value">{{students.total}}</span>\n        <i class="fa fa-user-friends" aria-hidden="true"></i>\n      </div>\n    </div>\n    <div class="holder">\n      <div class="box first">\n        <span class="title">Current</span>\n        <span class="value">{{students.total}}</span>\n        <i class="fa fa-graduation-cap" aria-hidden="true"></i>\n      </div>\n  \n      <div class="box second">\n        <span class="title">Alumni</span>\n        <span class="value">0</span>\n        <!-- <i class="fa fa-rocket" aria-hidden="true"></i> -->\n      </div>\n    </div>\n  \n\n  \n    <chart type="pie" [data]="data2" [options]="options"></chart>\n      <!-- <div id="chartContainer" style="height: 200px; width: 100%; margin-top: 20px; pointer-events: none"></div> -->\n      <!-- <div id="chartContainer2" style="height: 200px; width: 100%; margin-top: 20px; pointer-events: none"></div> -->\n\n      <h4>Employment</h4>\n      <div class="holder">\n        <!-- <div class="box first">\n          <span class="title">Startups</span>\n          <span class="value">{{students.employment.startups}}</span>\n          <i class="fa fa-rocket" aria-hidden="true"></i>\n        </div> -->\n    \n        <div class="box second">\n          <span class="title">Employment</span>\n          <span class="value">{{students.employment.jobs}}</span>\n          <i class="fa fa-laptop-code" aria-hidden="true"></i>\n        </div>\n      </div>\n\n      <chart type="pie" [data]="data1" [options]="options"></chart>\n      <!-- <div id="chartContainer" style="height: 200px; width: 100%; margin-top: 20px; pointer-events: none"></div> -->\n\n      <!-- <div id="chartContainer3" style="height: 200px; width: 100%; margin-top: 20px; pointer-events: none"></div> -->\n</ion-content>\n\n<ion-footer padding *ngIf="showViewStudents()">\n  <button ion-button block color="primary-dark" (click)="viewStudents()">View Students</button>\n</ion-footer>'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/infographic-codetribe/infographic-codetribe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], InfographicCodetribePage);
    return InfographicCodetribePage;
}());

//# sourceMappingURL=infographic-codetribe.js.map

/***/ })

});
//# sourceMappingURL=24.js.map