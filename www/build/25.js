webpackJsonp([25],{

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(872);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(147);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, alertController, userService, navParams, formmBuilder, loadingCntrl) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.userService = userService;
        this.navParams = navParams;
        this.formmBuilder = formmBuilder;
        this.loadingCntrl = loadingCntrl;
        this.form = formmBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            about: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            dob: ['', []],
            ethnicityId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            genderId: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]]
        });
        this.profile = navParams.get('profile');
        if (this.profile.gender) {
            this.profile.gender = this.profile.gender.id;
        }
        if (this.profile.ethnicity) {
            this.profile.ethnicity = this.profile.ethnicity.id;
        }
        this.form.patchValue(this.profile);
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.save = function () {
        var _this = this;
        console.log(this.form.value);
        if (this.form.valid) {
            this.loadingCntrl.create({
                content: "saving profile",
                dismissOnPageChange: true
            }).present();
            this.promise = this.userService.setProfile(this.form.value).then(function (profileUpdate) {
                _this.profile = profileUpdate;
                console.log(profileUpdate);
                _this.navCtrl.pop();
            });
        }
        else {
            this.alertController.create({
                title: 'Error',
                message: "Please fill all fields correctly",
                buttons: ['Ok']
            }).present();
        }
    };
    EditProfilePage.prototype.changePassword = function () {
        this.navCtrl.push('ChangePasswordPage');
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n      <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="form"> \n      <ion-list>\n        <ion-item>\n          <ion-label floating>Name<br><span class="error" *ngIf="form.get(\'name\').hasError(\'required\') && form.get(\'name\').touched">Please enter a valid name</span></ion-label>\n          <ion-input type="text" formControlName="name"></ion-input>\n        </ion-item>\n            \n        <ion-item>\n          <ion-label floating>Email<br><span class="error" *ngIf="form.get(\'username\').hasError(\'username\') && form.get(\'username\').touched">Please enter a valid email</span></ion-label>\n          <ion-input type="text" formControlName="username"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Cellphone Number <br><span class="error" *ngIf="form.get(\'phone\').hasError(\'required\') && form.get(\'phone\').touched">Please enter a valid cellphone number</span></ion-label>\n            <ion-input type="number" formControlName="phone"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label floating>About <br><span class="error" *ngIf="form.get(\'about\').hasError(\'required\') && form.get(\'about\').touched">Please enter someting about you</span></ion-label>\n              <ion-input type="text" formControlName="about"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>\n                Gender\n              </ion-label>\n              <ion-select formControlName="genderId">\n                <ion-option value="9e257a067ae27ab8">Male</ion-option>\n                <ion-option value="9e2aa7c5a3a4d8c1">Female</ion-option>\n                <ion-option value="d64f3ddb30f899be">Other</ion-option>\n              </ion-select>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>Date Of Birth</ion-label>\n              <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="DD MMM YYYY" formControlName="dob" ></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n              <ion-label floating>Ethnicity</ion-label>\n              <ion-select formControlName="ethnicityId">\n                  <ion-option value="544ea664c5f359af">African</ion-option>\n                  <ion-option value="c4c58e871d029b38">Caucasian</ion-option>\n                  <ion-option value="bdb6f5b0acaed8f6">Indian</ion-option>\n                  <ion-option value="94a191d01e3d19e4">Coloured</ion-option>\n                  <ion-option value="f902ea9b82f2a891">Asian</ion-option>\n                  <ion-option value="bf78c15a70055a29">Other</ion-option>\n              </ion-select>\n             \n            </ion-item>\n\n            \n      </ion-list>\n    </form>\n</ion-content>\n<ion-footer padding no-border>\n    <button style="margin-bottom: 10px" ion-button color="danger" block outline (click)="changePassword()">Change Password</button>\n    <button ion-button block (click)="save()">Save</button>\n  </ion-footer>\n<!-- <loader progress="Updating.." [promise]="promise"></loader> -->\n'/*ion-inline-end:"/home/codetribe/Documents/Angular-Projects/mlab-app-v2/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=25.js.map