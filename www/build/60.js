webpackJsonp([60],{

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoPageModule", function() { return SoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__so__ = __webpack_require__(1211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SoPageModule = (function () {
    function SoPageModule() {
    }
    SoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__so__["a" /* SoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__so__["a" /* SoPage */]),
            ],
        })
    ], SoPageModule);
    return SoPageModule;
}());

//# sourceMappingURL=so.module.js.map

/***/ }),

/***/ 1211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concion_popover_concion_popover__ = __webpack_require__(632);
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
 * Generated class for the SlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoPage = (function () {
    function SoPage(navCtrl, popoverCtrl, navParams, userService, modelcontroller) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.modelcontroller = modelcontroller;
        this.List = [];
        this.stats = {
            reviews: 0,
            places: 0,
            favorites: 0
        };
        this.loadData();
    }
    SoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlPage');
    };
    SoPage.prototype.loadData = function () {
        var _this = this;
        this.userService.getSOList().then(function (data) {
            _this.List = data;
            console.log(_this.List);
        });
    };
    SoPage.prototype.openPopover = function (myEvent) {
        //this.navctrl.setRoot(CancionPopoverPage,{event})
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__concion_popover_concion_popover__["a" /* CancionPopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-so',template:/*ion-inline-start:"/Users/Nagu/Desktop/Backup--nearme/22-09-2018/NearmeApp/src/pages/so/so.html"*/'\n\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-buttons end>\n     <a ion-button icon-only (click)="openPopover($event)">\n      <ion-icon name="more"></ion-icon>\n    </a>\n    </ion-buttons>\n    <ion-title>SO LIST</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!--<ion-list>\n    <ion-item *ngFor="let place of List"\n      color="white" no-lines>\n      <br>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'name\') }}</h2>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'roleName\') }}</h2>    \n    </ion-item>\n</ion-list>\n-->\n<ion-content padding #container>\n\n  <ion-list>\n  <ion-item *ngFor="let place of List"  color="white" no-lines>\n    <ion-avatar item-start>\n      \n    </ion-avatar>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'name\') }}</h2>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'roleName\') }}</h2>    \n  </ion-item>\n</ion-list>\n\n\n\n  <!--<ion-list>\n    <ion-item *ngFor="let place of List"\n      color="white" no-lines>\n      <br>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'name\') }}</h2>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'roleName\') }}</h2>    \n    </ion-item>\n  </ion-list>-->\n\n  <ion-infinite-scroll>\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/Nagu/Desktop/Backup--nearme/22-09-2018/NearmeApp/src/pages/so/so.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], SoPage);
    return SoPage;
}());

//# sourceMappingURL=so.js.map

/***/ })

});
//# sourceMappingURL=60.js.map