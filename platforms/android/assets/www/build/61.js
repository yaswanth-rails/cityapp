webpackJsonp([61],{

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlPageModule", function() { return SlPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sl__ = __webpack_require__(1210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlPageModule = (function () {
    function SlPageModule() {
    }
    SlPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sl__["a" /* SlPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sl__["a" /* SlPage */]),
            ],
        })
    ], SlPageModule);
    return SlPageModule;
}());

//# sourceMappingURL=sl.module.js.map

/***/ }),

/***/ 1210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlPage; });
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
var SlPage = (function () {
    function SlPage(navCtrl, popoverCtrl, navParams, userService, modelcontroller) {
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
    SlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SlPage');
    };
    SlPage.prototype.loadData = function () {
        var _this = this;
        this.userService.getSLList().then(function (data) {
            _this.List = data;
            console.log(_this.List);
        });
    };
    SlPage.prototype.openPopover = function (myEvent) {
        //this.navctrl.setRoot(CancionPopoverPage,{event})
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__concion_popover_concion_popover__["a" /* CancionPopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sl',template:/*ion-inline-start:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/sl/sl.html"*/'\n\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-buttons end>\n     <a ion-button icon-only (click)="openPopover($event)">\n      <ion-icon name="more"></ion-icon>\n    </a>\n    </ion-buttons>\n    <ion-title>SL LIST</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!--<ion-list>\n    <ion-item *ngFor="let place of List"\n      color="white" no-lines>\n      <br>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'name\') }}</h2>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'roleName\') }}</h2>    \n    </ion-item>\n</ion-list>\n-->\n<ion-content padding #container>\n\n  <ion-list>\n  <ion-item *ngFor="let place of List"  color="white" no-lines>\n    <ion-avatar item-start>\n      \n    </ion-avatar>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'name\') }}</h2 >\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'roleName\') }}</h2>    \n  </ion-item>\n</ion-list>\n  <!--<ion-list>\n    <ion-item *ngFor="let place of List"\n      color="white" no-lines>\n      <br>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'name\') }}</h2>\n       <h2 class="bold" ion-text color="primary">{{ place.get(\'roleName\') }}</h2>    \n    </ion-item>\n  </ion-list>-->\n\n  <ion-infinite-scroll>\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/sl/sl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], SlPage);
    return SlPage;
}());

//# sourceMappingURL=sl.js.map

/***/ })

});
//# sourceMappingURL=61.js.map