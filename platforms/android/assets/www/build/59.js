webpackJsonp([59],{

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubitemPageModule", function() { return SubitemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subitem__ = __webpack_require__(1212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubitemPageModule = (function () {
    function SubitemPageModule() {
    }
    SubitemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subitem__["a" /* SubitemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subitem__["a" /* SubitemPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__subitem__["a" /* SubitemPage */]
            ]
        })
    ], SubitemPageModule);
    return SubitemPageModule;
}());

//# sourceMappingURL=subitem.module.js.map

/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);


var BasePage = (function () {
    function BasePage(injector) {
        this.loadingCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]);
        this.toastCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]);
        this.navCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]);
        this.alertCtrl = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]);
        this.navParams = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]);
        this.translate = injector.get(__WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]);
        var menu = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]);
        menu.swipeEnable(this.enableMenuSwipe());
    }
    BasePage.prototype.showLoadingView = function () {
        var _this = this;
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isContentViewVisible = false;
        this.isLoadingViewVisible = true;
        return new Promise(function (resolve) {
            _this.translate.get('LOADING').subscribe(function (loadingText) {
                _this.loader = _this.loadingCtrl.create({
                    content: "<p class=\"bold\">" + loadingText + "</p>"
                });
                _this.loader.present();
                resolve();
            });
        });
    };
    BasePage.prototype.dismissLoadingView = function () {
        if (this.loader) {
            this.loader.dismiss().catch(function (e) { return console.log('ERROR CATCH: LoadingController dismiss', e); });
        }
    };
    BasePage.prototype.showContentView = function () {
        this.isErrorViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = true;
        this.dismissLoadingView();
    };
    BasePage.prototype.showEmptyView = function () {
        this.isErrorViewVisible = false;
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = true;
        this.dismissLoadingView();
    };
    BasePage.prototype.showErrorView = function () {
        this.isLoadingViewVisible = false;
        this.isContentViewVisible = false;
        this.isEmptyViewVisible = false;
        this.isErrorViewVisible = true;
        this.dismissLoadingView();
    };
    BasePage.prototype.onRefreshComplete = function (data) {
        if (data === void 0) { data = null; }
        if (this.refresher) {
            this.refresher.complete();
        }
        if (this.infiniteScroll) {
            this.infiniteScroll.complete();
            if (data && data.length === 0) {
                this.infiniteScroll.enable(false);
            }
            else {
                this.infiniteScroll.enable(true);
            }
        }
    };
    BasePage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    BasePage.prototype.showConfirm = function (message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.translate.get(['OK', 'CANCEL']).subscribe(function (values) {
                var confirm = _this.alertCtrl.create({
                    title: '',
                    message: message,
                    buttons: [{
                            text: values.CANCEL,
                            handler: function () {
                                reject();
                            }
                        }, {
                            text: values.OK,
                            handler: function () {
                                resolve(true);
                            }
                        }]
                });
                confirm.present();
            });
        });
    };
    BasePage.prototype.navigateTo = function (page, params) {
        if (params === void 0) { params = {}; }
        this.navCtrl.push(page, params);
    };
    BasePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BasePage.prototype.getTrans = function (key) {
        return this.translate.get(key).toPromise();
    };
    return BasePage;
}());

//# sourceMappingURL=base-page.js.map

/***/ }),

/***/ 1212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubitemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_page_base_page__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concion_popover_concion_popover__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(255);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubitemPage = (function (_super) {
    __extends(SubitemPage, _super);
    function SubitemPage(injector, popoverCtrl) {
        var _this = _super.call(this, injector) || this;
        _this.popoverCtrl = popoverCtrl;
        _this.stats = {
            places: 0,
            jobslist: 0,
            // updatelist:0,
            salelist: 0,
        };
        return _this;
    }
    SubitemPage.prototype.enableMenuSwipe = function () {
        return true;
    };
    SubitemPage.prototype.ionViewDidLoad = function () {
    };
    SubitemPage.prototype.goToPlaces = function () {
        this.navigateTo('AddPlacePage');
    };
    SubitemPage.prototype.goToAddHomeService = function () {
        this.navigateTo('AddHomeServiceListPage');
    };
    SubitemPage.prototype.goToAddJobsList = function () {
        this.navigateTo('AddJobsListPage');
    };
    SubitemPage.prototype.goToAddUpdateList = function () {
        this.navigateTo('AddUpdateListPage');
    };
    SubitemPage.prototype.goToAddSaleList = function () {
        this.navigateTo('AddSaleListPage');
    };
    SubitemPage.prototype.openPopover = function (myEvent) {
        //this.navctrl.setRoot(CancionPopoverPage,{event})
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__concion_popover_concion_popover__["a" /* CancionPopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SubitemPage.prototype.goToAddRentList = function () {
        this.navigateTo('AddRentListPage');
    };
    SubitemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-subitem',template:/*ion-inline-start:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/subitem/subitem.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n     <ion-buttons end>\n     <a ion-button icon-only (click)="openPopover($event)">\n      <ion-icon name="more"></ion-icon>\n    </a>\n    </ion-buttons>\n    <ion-title>Add List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--<ion-content padding #container>\n\n\n  <ion-list>\n    <ion-item  color="dark"   (click)="goToPlaces()">\n      <ion-avatar item-left>\n        <h2><ion-icon name="create" color="primary"> Add Place </ion-icon></h2>\n        \n       \n      </ion-avatar>\n  \n    </ion-item>\n </ion-list>\n\n   <ion-list>\n    <ion-item   color="dark"  (click)="goToAddHomeService()">\n      <ion-avatar item-left>\n        <h2> <ion-icon name="create" color="primary"> Add Home Service  </ion-icon></h2>\n       \n      </ion-avatar>\n  \n    </ion-item>\n  </ion-list>\n\n   <ion-list>\n    <ion-item  color="dark" no-lines  (click)="goToAddJobsList()">\n      <ion-avatar item-left>\n        <h2> <ion-icon name="create" color="primary" > Add Jobs List </ion-icon></h2>     \n                     \n      </ion-avatar>\n\n  \n    </ion-item>\n  </ion-list>\n\n   <ion-list>\n    <ion-item  color="dark" no-lines  (click)="goToAddOffersList()">\n      <ion-avatar item-left>\n        <h2> <ion-icon name="create" color="primary"> Add Offers List</ion-icon></h2>\n                       \n\n\n       \n      </ion-avatar>\n  \n    </ion-item>\n  </ion-list>\n\n   <ion-list>\n    <ion-item  color="dark" no-lines  (click)="goToAddUpdateList()">\n      <ion-avatar item-left>\n        <h2><ion-icon name="create" color="primary"> Add Update List</ion-icon></h2>\n                          \n      </ion-avatar>\n  \n    </ion-item>\n  </ion-list>\n\n    <ion-list>\n    <ion-item    color="dark" no-lines (click)="goToAddSaleList()">\n      <ion-avatar item-left>\n        <h2> <ion-icon name="create" color="primary"> Add Sale List</ion-icon></h2>\n                    \n\n       \n      </ion-avatar>\n  \n    </ion-item>\n  </ion-list>\n\n\n</ion-content>-->\n<ion-content class="grid-basic-page">\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col>\n           <ion-avatar item-left (click)="goToPlaces()">\n         <ion-icon name="md-locate" color="primary"></ion-icon>\n        <p class="saletext"> Add Place List </p>\n        </ion-avatar>\n       </ion-col>\n       <ion-col>\n         <ion-avatar item-left (click)="goToAddHomeService()">\n         <ion-icon  class="Manicon" name="md-man" color="primary"></ion-icon>\n         <p class="saletext">Add Home Service </p>\n        </ion-avatar>\n      </ion-col>\n       </ion-row>\n      </ion-grid>\n\n\n\n    <ion-grid>\n       <ion-row>\n\n       <ion-col>\n      <ion-avatar item-left  (click)="goToAddJobsList()">\n       <ion-icon name="md-briefcase" color="primary"></ion-icon>\n\n       <p class="saletext">Add Jobs List </p>\n       \n      </ion-avatar>\n      </ion-col>\n\n       <ion-col>\n    <ion-avatar item-left (click)="goToAddUpdateList()">\n    <ion-icon name="md-paper" color="primary"></ion-icon>\n\n       <p class="saletext">Add News List</p>\n       \n      </ion-avatar>\n   \n      </ion-col>\n       </ion-row>\n  </ion-grid>\n\n\n\n    <ion-grid>\n       <ion-row>\n\n  <ion-col>\n      <ion-avatar item-left (click)="goToAddRentList()">\n      <ion-icon name="md-home" color="primary"></ion-icon>\n\n      <p class="saletext">Add Rent List </p>\n      </ion-avatar>\n      </ion-col>\n\n      <ion-col>\n      <ion-avatar item-left (click)="goToAddSaleList()">\n      <ion-icon name="md-basket" color="primary"></ion-icon>\n\n      <p class="saletext"> Add Sale List </p>\n       \n      </ion-avatar>\n  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/subitem/subitem.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["k" /* trigger */])('staggerIn', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* transition */])('* => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 0, transform: "translate3d(0,10px,0)" }), { optional: true }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["f" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* stagger */])('100ms', [Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* style */])({ opacity: 1, transform: "translate3d(0,0,0)" }))]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* PopoverController */]])
    ], SubitemPage);
    return SubitemPage;
}(__WEBPACK_IMPORTED_MODULE_2__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=subitem.js.map

/***/ })

});
//# sourceMappingURL=59.js.map