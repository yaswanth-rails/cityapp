webpackJsonp([63],{

/***/ 1073:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_local_storage__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_preference__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_window_ref__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_installation__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_image_loader__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// import { BackgroundGeolocation1 } from '../providers/backgroiund-geolocation';









var MyApp = (function () {
    function MyApp(platform, renderer, 
        // private backgroundGeolocation:BackgroundGeolocation1,
        events, storage, translate, toastCtrl, preference, statusBar, splashScreen, googleAnalytics, windowRef, installationService, imageLoaderConfig, alertCtrl, userService, headerColor) {
        this.platform = platform;
        this.renderer = renderer;
        this.events = events;
        this.storage = storage;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.preference = preference;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.googleAnalytics = googleAnalytics;
        this.windowRef = windowRef;
        this.installationService = installationService;
        this.imageLoaderConfig = imageLoaderConfig;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.headerColor = headerColor;
        this.rootPage = 'HomePage';
        this.initializeApp();
    }
    MyApp.prototype.onMenuOpened = function () {
        this.events.publish('onMenuOpened');
    };
    MyApp.prototype.onMenuClosed = function () {
        this.events.publish('onMenuClosed');
    };
    MyApp.prototype.buildMenu = function () {
        var _this = this;
        var trans = ['HOME', 'POSTS', 'CATEGORIES', 'JOBS', 'SALE', 'RENT', 'CITYUPDATE', 'HOMESERVICE', 'MAP', 'MAP1', 'GOOGLESERVE', 'MY_FAVORITES',
            'SETTINGS', 'LOGIN', 'LOGOUT', 'LOGGED_OUT', 'PROFILE', 'ADDITEM', 'SLPAGE', 'SOPAGE'];
        this.translate.get(trans).subscribe(function (values) {
            _this.trans = values;
            _this.pages = [
                { title: values.HOME, icon: 'home', component: 'HomePage' },
                { title: values.CATEGORIES, icon: 'pricetag', component: 'CategoriesPage' },
                { title: values.JOBS, icon: 'briefcase', component: 'JobsPage' },
                { title: values.GOOGLESERVE, icon: 'briefcase', component: 'GooglemapPage' },
                { title: values.SALE, icon: 'md-basket', component: 'SalePage' },
                { title: values.RENT, icon: 'briefcase', component: 'RentPage' },
                { title: values.CITYUPDATE, icon: 'clipboard', component: 'CityUpdatePage' },
                { title: values.HOMESERVICE, icon: 'man', component: 'HomeServicePage' },
                { title: values.MAP, icon: 'map', component: 'MapPage' },
                { title: values.MAP1, icon: 'map', component: 'MapPage1' },
                // { title: values.ADD_PLACE, icon: 'create', component: 'AddPlacePage' },
                // { title: values.ADD, icon: 'create', component: 'AddSaleListPage' },
                { title: values.POSTS, icon: 'notifications', component: 'PostListPage' },
                { title: values.MY_FAVORITES, icon: 'heart', component: 'FavoritesPage' },
                { title: values.ADDITEM, icon: 'create', component: 'SubitemPage' },
                { title: values.SLPAGE, icon: 'create', component: 'SlPage' },
                { title: values.SOPAGE, icon: 'create', component: 'SoPage' },
            ];
            if (__WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser()) {
                // this.pages.push({ title: values.PROFILE, icon: 'contact', component: 'ProfilePage' })
                _this.pages.push({ title: values.LOGOUT, icon: 'exit', component: null });
            }
            else {
                _this.pages.push({ title: values.LOGIN, icon: 'log-in', component: 'SignInPage' });
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.setupLocalStorage();
        this.setupParse();
        this.setupEvents();
        this.setupImageLoader();
        // this.backgroundGeolocation.startTracking();
        this.user = __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser();
        this.fetchUser();
        this.platform.ready().then(function () {
            _this.setupStatusBar();
            _this.setupGoogleAnalytics();
            _this.setupPush();
            _this.setupAndroidHeaderColor();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.fetchUser = function () {
        this.user = __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser();
        if (this.user)
            this.user.fetch();
    };
    MyApp.prototype.setupImageLoader = function () {
        this.imageLoaderConfig.enableSpinner(false);
        this.imageLoaderConfig.setFallbackUrl('assets/img/placeholder1.png');
        this.imageLoaderConfig.enableFallbackAsPlaceholder(true);
        this.imageLoaderConfig.setBackgroundSize('cover');
        this.imageLoaderConfig.setConcurrency(20);
    };
    MyApp.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    MyApp.prototype.setupLocalStorage = function () {
        var _this = this;
        this.translate.setDefaultLang(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_LANG);
        this.storage.lang.then(function (val) {
            var lang = val || __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_LANG;
            _this.translate.use(lang);
            _this.storage.lang = lang;
            _this.preference.lang = lang;
            _this.storage.skipIntroPage.then(function (skipIntroPage) {
                if (!skipIntroPage)
                    _this.rootPage = 'WalkthroughPage';
            }).catch(function (e) { return console.log(e); });
            _this.buildMenu();
        }).catch(function (e) { return console.log(e); });
        this.storage.unit.then(function (val) {
            var unit = val || __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].DEFAULT_UNIT;
            _this.storage.unit = unit;
            _this.preference.unit = unit;
        }).catch(function (e) { return console.log(e); });
    };
    MyApp.prototype.setupEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function (user) {
            _this.user = user;
            _this.buildMenu();
            _this.fetchUser();
            _this.updateInstallation();
        });
        this.events.subscribe('user:logout', function () {
            _this.onLogOut();
        });
        this.events.subscribe('lang:change', function () {
            _this.buildMenu();
        });
    };
    MyApp.prototype.setupParse = function () {
        __WEBPACK_IMPORTED_MODULE_6_parse___default.a.serverURL = __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].SERVER_URL;
        __WEBPACK_IMPORTED_MODULE_6_parse___default.a.initialize(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].APP_ID);
        __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getInstance();
    };
    MyApp.prototype.setupStatusBar = function () {
        if (this.platform.is('ios')) {
            this.statusBar.overlaysWebView(true);
            this.statusBar.styleDefault();
        }
        else {
            this.statusBar.backgroundColorByHexString(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR);
        }
    };
    MyApp.prototype.setupAndroidHeaderColor = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR && this.platform.is('android')) {
            this.headerColor.tint(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].HEADER_COLOR);
        }
    };
    MyApp.prototype.setupGoogleAnalytics = function () {
        if (__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].TRACKING_ID) {
            this.googleAnalytics.startTrackerWithId(__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */].TRACKING_ID);
            this.googleAnalytics.trackEvent('', 'App opened');
            this.googleAnalytics.debugMode();
            this.googleAnalytics.enableUncaughtExceptionReporting(true);
        }
    };
    MyApp.prototype.setupPush = function () {
        this.objWindow = this.windowRef.nativeWindow;
        if (this.objWindow.ParsePushPlugin) {
            this.objWindow.ParsePushPlugin.on('receivePN', function (pn) {
                console.log('[receivePn] Push notification:' + JSON.stringify(pn));
            });
            this.objWindow.ParsePushPlugin.on('openPN', function (pn) {
                console.log('Notification:' + JSON.stringify(pn));
            });
            this.updateInstallation();
        }
    };
    MyApp.prototype.updateInstallation = function () {
        var _this = this;
        if (this.objWindow.ParsePushPlugin) {
            var user_1 = null;
            if (this.user) {
                user_1 = {
                    __type: 'Pointer',
                    className: '_User',
                    objectId: this.user.id
                };
            }
            this.objWindow.ParsePushPlugin.getInstallationObjectId(function (id) {
                _this.installationService.save(id, { user: user_1 }).subscribe(function (data) {
                    console.log('Installation updated', data);
                }, function (err) { return console.warn(err); });
            });
        }
    };
    MyApp.prototype.showNotification = function (notification) {
        var _this = this;
        this.translate.get(['NOTIFICATION', 'OK']).subscribe(function (str) {
            _this.showAlert(str.NOTIFICATION, notification.alert, str.OK);
        });
    };
    MyApp.prototype.showAlert = function (title, message, okText) {
        if (title === void 0) { title = ''; }
        if (message === void 0) { message = ''; }
        if (okText === void 0) { okText = 'OK'; }
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [okText],
        });
        alert.present();
    };
    MyApp.prototype.openPage = function (page) {
        if ((page.component === 'FavoritesPage' || page.component === 'AddPlacePage' || page.component === 'AddSaleListPage' || page.component === 'SignInPage') && !__WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.nav.push('SignInPage');
        }
        else if (page.component === null && __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.onLogOut();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.openSL = function () {
        this.nav.push('SlPage');
    };
    MyApp.prototype.openSO = function () {
        this.nav.push('SoPage');
    };
    MyApp.prototype.showToast = function (message) {
        if (message === void 0) { message = ''; }
        var alert = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        alert.present();
    };
    MyApp.prototype.onLogOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userService.logout()];
                    case 1:
                        _a.sent();
                        this.user = null;
                        this.nav.setRoot('HomePage');
                        this.translate.get('LOGGED_OUT').subscribe(function (str) { return _this.showToast(str); });
                        this.buildMenu();
                        this.updateInstallation();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar class="menu-toolbar" color="light">\n      <ion-item class="transparent" no-lines *ngIf="user">\n        <ion-avatar item-start>\n          <img-loader useImg (load)="onImageLoad($event)"\n            fallback="assets/img/avatar.png"\n            [src]="user.photo?.url()">\n          </img-loader>\n        </ion-avatar>\n        <span class="text-medium bold" ion-text color="light">{{ user.name }}</span>\n      </ion-item>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button class="bold" color="light" menuClose text-uppercase no-lines ion-item detail-none\n        *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-start color="primary"></ion-icon>\n        <p ion-text color="primary">\n          {{ p.title }}\n        </p>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n'/*ion-inline-end:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_local_storage__["a" /* LocalStorage */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_11__providers_preference__["a" /* Preference */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_12__providers_window_ref__["a" /* WindowRef */],
            __WEBPACK_IMPORTED_MODULE_13__providers_installation__["a" /* Installation */],
            __WEBPACK_IMPORTED_MODULE_14_ionic_image_loader__["a" /* ImageLoaderConfig */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_service__["a" /* User */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_header_color__["a" /* HeaderColor */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Slide = (function (_super) {
    __extends(Slide, _super);
    function Slide() {
        return _super.call(this, 'SliderImage') || this;
    }
    Slide_1 = Slide;
    Slide.prototype.load = function () {
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(Slide_1);
            query.equalTo('isActive', true);
            query.ascending('sort');
            query.include('place.category');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Slide.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "sort", {
        get: function () {
            return this.get('sort');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "url", {
        get: function () {
            return this.get('url');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Slide.prototype, "isActive", {
        get: function () {
            return this.get('isActive');
        },
        enumerable: true,
        configurable: true
    });
    Slide.prototype.toString = function () {
        return this.image.url();
    };
    Slide = Slide_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Slide);
    return Slide;
    var Slide_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('SliderImage', Slide);
//# sourceMappingURL=slide.js.map

/***/ }),

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundGeolocation1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geofence__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__geofence_service__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BackgroundGeolocation1 = (function () {
    function BackgroundGeolocation1(zone, backgroundGeolocation, geolocation, geofence) {
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.geofence = geofence;
        this.lat = 0;
        this.lng = 0;
        this.fencedata = [];
        this.fence = [];
        geofence.initialize().then(
        // resolved promise does not return a value
        function () { return console.log('Geofence Plugin Ready'); }, function (err) { return console.log(err); });
    }
    //what we have:?
    //1.current location(watching rotate),geofences. 
    //what we do?
    //1.
    BackgroundGeolocation1.prototype.addGeofence = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5__geofence_service__["a" /* GeoList */].load().then(function (data) {
            _this.fencedata = data;
            for (var i = 0; i < _this.fencedata.length; i++) {
                _this.fence.push({
                    id: _this.fencedata[i].id,
                    latitude: _this.fencedata[i].location.latitude,
                    longitude: _this.fencedata[i].location.longitude,
                    radius: _this.fencedata[i].radius,
                    transitionType: 1,
                    notification: {
                        id: 1,
                        title: _this.fencedata[i].title,
                        text: _this.fencedata[i].message,
                        openAppOnClick: true //open app when notification is tapped
                    }
                });
            }
        });
    };
    BackgroundGeolocation1.prototype.getFenceTracking = function () {
        this.geofence.addOrUpdate(this.fence).then(function () { return console.log('Geofence added'); }, function (err) { return console.log('Geofence failed to add' + err); });
        this.geofence.getWatched().then(function (fence) {
            var geofence = JSON.parse(fence);
            return geofence;
        });
    };
    BackgroundGeolocation1.prototype.startTracking = function () {
        // Background Tracking
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            startForeground: false,
            debug: true,
            interval: 2000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            _this.getFenceTracking();
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            _this.addGeofence();
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        });
    };
    BackgroundGeolocation1.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    BackgroundGeolocation1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geofence__["a" /* Geofence */]])
    ], BackgroundGeolocation1);
    return BackgroundGeolocation1;
}());

//# sourceMappingURL=backgroiund-geolocation.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.call(this, '_User') || this;
    }
    User_1 = User;
    User.getInstance = function () {
        return this;
    };
    User.getCurrentUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current();
    };
    User.prototype.isLoggedInViaFacebook = function () {
        return this.authData;
    };
    User.prototype.create = function (data) {
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            var user = new User_1();
            user.signUp(data).then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.prototype.signIn = function (data) {
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            var user = new User_1;
            user.username = data.username;
            user.password = data.password;
            user.logIn().then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.logOut().then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.prototype.recoverPassword = function (email) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.requestPasswordReset(email).then(function (success) {
                resolve(success);
            }, function (error) {
                reject(error);
            });
        });
    };
    User.prototype.getSLList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('roleName', 'SL');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    User.prototype.getSOList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('roleName', 'SO');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    User.prototype.find = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('username', data.username);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    User.prototype.loginWithFacebook = function (authData) {
        return new Promise(function (resolve, reject) {
            var user = new User_1;
            user._linkWith('facebook', authData)
                .then(function (user) { return resolve(user); }, function (error) { return reject(error); });
        });
    };
    User.prototype.isFacebookLinked = function () {
        return __WEBPACK_IMPORTED_MODULE_1_parse___default.a.FacebookUtils.isLinked(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
    };
    User.prototype.linkFacebook = function (authData) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.FacebookUtils.link(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current(), authData, {
                success: function (res) { return resolve(res); }, error: function (err) { return reject(err); }
            });
        });
    };
    User.prototype.unlinkFacebook = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.FacebookUtils.unlink(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current(), {
                success: function (res) { return resolve(res); }, error: function (err) { return reject(err); }
            });
        });
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.get('name');
        },
        set: function (val) {
            this.set('name', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this.get('email');
        },
        set: function (val) {
            this.set('email', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "username", {
        get: function () {
            return this.get('username');
        },
        set: function (val) {
            this.set('username', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.get('password');
        },
        set: function (val) {
            this.set('password', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "photo", {
        get: function () {
            return this.get('photo');
        },
        set: function (val) {
            this.set('photo', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "roleName", {
        get: function () {
            return this.get('roleName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "authData", {
        get: function () {
            return this.get('authData');
        },
        set: function (val) {
            this.set('authData', val);
        },
        enumerable: true,
        configurable: true
    });
    User = User_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
    var User_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.User));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('_User', User);
//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorage = (function () {
    function LocalStorage(storage) {
        this.storage = storage;
    }
    Object.defineProperty(LocalStorage.prototype, "skipIntroPage", {
        get: function () {
            return this.storage.get('skipIntroPage');
        },
        set: function (val) {
            this.storage.set('skipIntroPage', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "unit", {
        get: function () {
            return this.storage.get('unit');
        },
        set: function (val) {
            this.storage.set('unit', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "mapStyle", {
        get: function () {
            return this.storage.get('mapStyle');
        },
        set: function (val) {
            this.storage.set('mapStyle', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "latitude", {
        get: function () {
            return this.storage.get('latitude');
        },
        set: function (val) {
            console.log(val);
            this.storage.set('latitude', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "longitude", {
        get: function () {
            return this.storage.get('longitude');
        },
        set: function (val) {
            console.log(val);
            this.storage.set('longitude', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage.prototype, "lang", {
        get: function () {
            return this.storage.get('lang');
        },
        set: function (val) {
            this.storage.set('lang', val);
        },
        enumerable: true,
        configurable: true
    });
    LocalStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LocalStorage);
    return LocalStorage;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Place; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Place = (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super.call(this, 'Place') || this;
    }
    Place.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    Place.prototype.getGeo = function (location) {
        console.log(location);
        return new Promise(function (resolve, reject) {
            var point2 = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({ latitude: location.coords.latitude, longitude: location.coords.longitude });
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('findGeo', { location: point2 }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.like = function (place) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likePlace', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.isLiked = function (place) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isPlaceLiked', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.isStarred = function (place) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isPlaceStarred', { placeId: place.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Place.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var distance = params.distance || 100;
            var status = params.status || 'Approved';
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (Array.isArray(status)) {
                query.containedIn('status', status);
            }
            else {
                query.equalTo('status', status);
            }
            if (params.category) {
                query.equalTo('category', params.category);
            }
            if (params.isFeatured) {
                query.equalTo('isFeatured', params.isFeatured);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.canonical && params.canonical !== '') {
                query.startsWith('canonical', params.canonical);
            }
            if (params.location) {
                if (Array.isArray(params.location)) {
                    var southwest = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                        latitude: params.location.latitude,
                        longitude: params.location.longitude
                    });
                    if (params.unit && params.unit === 'km') {
                        query.withinKilometers('location', point, distance);
                    }
                    else {
                        query.withinMiles('location', point, distance);
                    }
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.include('category');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Place.prototype.loadFavorites = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Place.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "likeCount", {
        get: function () {
            return this.get('likeCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "category", {
        get: function () {
            return this.get('category');
        },
        set: function (val) {
            this.set('category', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal)
                return 0;
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    Place = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Place);
    return Place;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Place', Place);
//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
    }
    Object.defineProperty(AppConfig, "SERVER_URL", {
        /* Parse Server URL */
        get: function () {
            return 'http://192.168.1.13:1337/parse';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "APP_ID", {
        /* Parse App ID  */
        get: function () {
            return 'myAppId';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "GOOGLE_MAPS_API_KEY", {
        /* Google Maps API Key */
        get: function () {
            return 'AIzaSyCujx28YAGxBBeLVyEqbJqA1EEVQUdM6Jw';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "BANNER_ID", {
        /* AdMob Banner ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "TRACKING_ID", {
        /* Google Analytics Tracking ID  */
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "HEADER_COLOR", {
        /* Header color (only Android Multitask view)  */
        get: function () {
            return '#FF7676';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_UNIT", {
        /* Unit: km or mi  */
        get: function () {
            return 'mi';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConfig, "DEFAULT_LANG", {
        get: function () {
            return 'en';
        },
        enumerable: true,
        configurable: true
    });
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Preference = (function () {
    function Preference() {
    }
    Object.defineProperty(Preference.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        set: function (val) {
            this._unit = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "mapStyle", {
        get: function () {
            return this._mapStyle;
        },
        set: function (val) {
            this._mapStyle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Preference.prototype, "lang", {
        get: function () {
            return this._lang;
        },
        set: function (val) {
            this._lang = val;
        },
        enumerable: true,
        configurable: true
    });
    Preference = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Preference);
    return Preference;
}());

//# sourceMappingURL=preference.js.map

/***/ }),

/***/ 268:
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
webpackEmptyAsyncContext.id = 268;

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-homeservicelist/add-homeservicelist.module": [
		1081,
		14
	],
	"../pages/add-homeservicelistreview/add-homeservicelistreview.module": [
		1082,
		13
	],
	"../pages/add-jobslist/add-jobslist.module": [
		1083,
		12
	],
	"../pages/add-jobslistreview-page/add-jobslistreview.module": [
		1084,
		11
	],
	"../pages/add-place-page/add-place-page.module": [
		1085,
		10
	],
	"../pages/add-rentlist/add-rentlist.module": [
		1086,
		9
	],
	"../pages/add-rentlistreview/add-rentlistreview.module": [
		1087,
		8
	],
	"../pages/add-review-page/add-review-page.module": [
		1088,
		7
	],
	"../pages/add-salelist/add-salelist.module": [
		1089,
		6
	],
	"../pages/add-salelistreview/add-salelistreview.module": [
		1090,
		5
	],
	"../pages/add-updatelist/add-updatelist.module": [
		1091,
		4
	],
	"../pages/add-updatelistreview/add-updatelistreview.module": [
		1092,
		3
	],
	"../pages/categories/categories.module": [
		1093,
		55
	],
	"../pages/change-password/change-password.module": [
		1094,
		54
	],
	"../pages/cityupdate/cityupdate.module": [
		1095,
		53
	],
	"../pages/concion-popover/concion-popover.module": [
		1096,
		62
	],
	"../pages/edit-item/edit-item.module": [
		1097,
		2
	],
	"../pages/edit-profile-page/edit-profile-page.module": [
		1098,
		52
	],
	"../pages/favorite-homeservice/favorite-homeservice.module": [
		1099,
		51
	],
	"../pages/favorite-jobs/favorite-jobs.module": [
		1100,
		50
	],
	"../pages/favorite-news/favorite-news.module": [
		1101,
		49
	],
	"../pages/favorite-place/favorite-place.module": [
		1102,
		48
	],
	"../pages/favorite-rent/favorite-rent.module": [
		1103,
		47
	],
	"../pages/favorite-sale/favorite-sale.module": [
		1104,
		46
	],
	"../pages/favorites-page/favorites-page.module": [
		1105,
		45
	],
	"../pages/forgot-password/forgot-password.module": [
		1106,
		1
	],
	"../pages/googlemap/googlemap.module": [
		1107,
		58
	],
	"../pages/home-page/home-page.module": [
		1108,
		44
	],
	"../pages/homeservice/homeservice.module": [
		1109,
		43
	],
	"../pages/homeservicelist-detail/homeservicelist-detail.module": [
		1110,
		42
	],
	"../pages/homeservicelist/homeservicelist.module": [
		1111,
		41
	],
	"../pages/homeservicelistreview/homeservicelistreview.module": [
		1112,
		40
	],
	"../pages/jobs/jobs.module": [
		1113,
		39
	],
	"../pages/jobslist-detail-page/jobslist-detail-page.module": [
		1114,
		38
	],
	"../pages/jobslist/jobslist.module": [
		1115,
		37
	],
	"../pages/jobslistreview-page/jobslistreview-page.module": [
		1116,
		36
	],
	"../pages/map-page/map-page.module": [
		1117,
		0
	],
	"../pages/map/map.module": [
		1118,
		57
	],
	"../pages/place-detail-page/place-detail-page.module": [
		1119,
		35
	],
	"../pages/places/places.module": [
		1120,
		34
	],
	"../pages/post-list-page/post-list-page.module": [
		1121,
		33
	],
	"../pages/profile-page/profile-page.module": [
		1122,
		32
	],
	"../pages/rent/rent.module": [
		1123,
		31
	],
	"../pages/rentlist-detail/rentlist-detail.module": [
		1124,
		30
	],
	"../pages/rentlist/rentlist.module": [
		1125,
		29
	],
	"../pages/rentlistreview/rentlistreview.module": [
		1126,
		28
	],
	"../pages/reset-page/reset-page.module": [
		1127,
		27
	],
	"../pages/reviews-page/reviews-page.module": [
		1128,
		26
	],
	"../pages/sale/sale.module": [
		1129,
		25
	],
	"../pages/salelist-detail-page/salelist-detail-page.module": [
		1130,
		24
	],
	"../pages/salelist/salelist.module": [
		1131,
		23
	],
	"../pages/salelistreview/salelistreview.module": [
		1132,
		22
	],
	"../pages/search/search.module": [
		1133,
		21
	],
	"../pages/settings-page/settings-page.module": [
		1134,
		20
	],
	"../pages/sign-in-page/sign-in-page.module": [
		1135,
		19
	],
	"../pages/sign-up-page/sign-up-page.module": [
		1136,
		18
	],
	"../pages/sl/sl.module": [
		1137,
		61
	],
	"../pages/so/so.module": [
		1138,
		60
	],
	"../pages/subitem/subitem.module": [
		1139,
		59
	],
	"../pages/updatelist-detail/updatelist-detail.module": [
		1140,
		17
	],
	"../pages/updatelist/updatelist.module": [
		1141,
		16
	],
	"../pages/updatelistreview/updatelistreview.module": [
		1142,
		15
	],
	"../pages/walkthrough-page/walkthrough-page.module": [
		1143,
		56
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
webpackAsyncContext.id = 312;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());

//# sourceMappingURL=window-ref.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Installation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_config__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Installation = (function () {
    function Installation(http) {
        this.http = http;
    }
    Installation.prototype.save = function (id, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('X-Parse-Application-Id', __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].APP_ID);
        var bodyString = JSON.stringify(data);
        var url = __WEBPACK_IMPORTED_MODULE_5__app_app_config__["a" /* AppConfig */].SERVER_URL + "/installations/" + id;
        return this.http.put(url, bodyString, { headers: headers })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error || 'Server error'); });
    };
    Installation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Installation);
    return Installation;
}());

//# sourceMappingURL=installation.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var GeoList = (function (_super) {
    __extends(GeoList, _super);
    function GeoList() {
        return _super.call(this, 'GeoList') || this;
    }
    GeoList.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.find().then(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    Object.defineProperty(GeoList.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoList.prototype, "radius", {
        get: function () {
            return this.get('radius');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoList.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GeoList.prototype, "message", {
        get: function () {
            return this.get('message');
        },
        enumerable: true,
        configurable: true
    });
    GeoList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GeoList);
    return GeoList;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('GeoList', GeoList);
//# sourceMappingURL=geofence-service.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancionPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CancionPopoverPage = (function () {
    function CancionPopoverPage(navCtrl, navParams, events, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.viewCtrl = viewCtrl;
        if (__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.sign = "logout";
        }
        else {
            this.sign = "login";
        }
    }
    CancionPopoverPage.prototype.close1 = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.navCtrl.push('ProfilePage');
        }
        else {
            this.navCtrl.push('SignInPage');
            this.viewCtrl.dismiss();
        }
    };
    CancionPopoverPage.prototype.close2 = function () {
        //this.navCtrl.push('SettingsPage');
        //this.viewCtrl.dismiss();
        this.navCtrl.push('SettingsPage').then(function () {
        });
    };
    CancionPopoverPage.prototype.close3 = function () {
        if (__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* User */].getCurrentUser()) {
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* User */].logOut();
            //     then(res => this.events.publish('user:logout'))
            // // //this.navCtrl.push('');
            this.sign = "login";
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.push('SignInPage');
            if (__WEBPACK_IMPORTED_MODULE_2__providers_user_service__["a" /* User */].getCurrentUser()) {
                this.sign = "logout";
            }
            this.viewCtrl.dismiss();
        }
    };
    CancionPopoverPage.prototype.ionViewDidLoad = function () { };
    CancionPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'concion-popover',template:/*ion-inline-start:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/concion-popover/concion-popover.html"*/'<!--\n  Generated template for the CancionPopoverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-list color="white">\n      <button ion-item (click)="close1()" *ngIf= "sign == \'logout\' ">profile</button>\n      <button ion-item (click)="close2()" *ngIf= "sign == \'logout\' ">Settings</button>\n    \n  <button ion-item (click)="close3()">{{ sign }}</button>\n</ion-list>\n\n'/*ion-inline-end:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/concion-popover/concion-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
    ], CancionPopoverPage);
    return CancionPopoverPage;
}());

//# sourceMappingURL=concion-popover.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseFile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParseFile = (function () {
    function ParseFile() {
    }
    ParseFile.upload = function (base64) {
        return new Promise(function (resolve, reject) {
            var parseFile = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.File('image.jpg', { base64: base64 });
            parseFile.save().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    ParseFile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ParseFile);
    return ParseFile;
}());

//# sourceMappingURL=parse-file-service.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapStyle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapStyle = (function () {
    function MapStyle() {
    }
    // See more styles on https://snazzymaps.com/
    MapStyle.light = function () {
        return [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ];
    };
    MapStyle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MapStyle);
    return MapStyle;
}());

//# sourceMappingURL=map-style.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServiceList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var HomeServiceList = (function (_super) {
    __extends(HomeServiceList, _super);
    function HomeServiceList() {
        return _super.call(this, 'HomeServiceList') || this;
    }
    HomeServiceList.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    HomeServiceList.prototype.like = function (homeservicelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likeHomeServiceList', { homeservicelistId: homeservicelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    HomeServiceList.prototype.isLiked = function (homeservicelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isHomeServiceListLiked', { homeservicelistId: homeservicelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    HomeServiceList.prototype.isStarred = function (homeservicelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isHomeServiceListStarred', { homeservicelistId: homeservicelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    HomeServiceList.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var distance = params.distance || 100;
            var status = params.status || 'Approved';
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (Array.isArray(status)) {
                query.containedIn('status', status);
            }
            else {
                query.equalTo('status', status);
            }
            if (params.homeservice) {
                query.equalTo('homeservice', params.homeservice);
            }
            if (params.isFeatured) {
                query.equalTo('isFeatured', params.isFeatured);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.canonical && params.canonical !== '') {
                query.startsWith('canonical', params.canonical);
            }
            if (params.location) {
                if (Array.isArray(params.location)) {
                    var southwest = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                        latitude: params.location.latitude,
                        longitude: params.location.longitude
                    });
                    if (params.unit && params.unit === 'km') {
                        query.withinKilometers('location', point, distance);
                    }
                    else {
                        query.withinMiles('location', point, distance);
                    }
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.include('homeservice');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    HomeServiceList.prototype.loadFavorites = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(HomeServiceList.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "homeservice", {
        get: function () {
            return this.get('homeservice');
        },
        set: function (val) {
            this.set('homeservice', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "likeCount", {
        get: function () {
            return this.get('likeCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceList.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal)
                return 0;
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    HomeServiceList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HomeServiceList);
    return HomeServiceList;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('HomeServiceList', HomeServiceList);
//# sourceMappingURL=homeservicelist-service.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var JobsList = (function (_super) {
    __extends(JobsList, _super);
    function JobsList() {
        return _super.call(this, 'JobsList') || this;
    }
    JobsList.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    JobsList.prototype.like = function (jobslist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likeJobsList', { jobslistId: jobslist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    JobsList.prototype.isLiked = function (jobslist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isJobsListLiked', { jobslistId: jobslist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    JobsList.prototype.isStarred = function (jobslist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isJobsListStarred', { jobslistId: jobslist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    JobsList.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var distance = params.distance || 100;
            var status = params.status || 'Approved';
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (Array.isArray(status)) {
                query.containedIn('status', status);
            }
            else {
                query.equalTo('status', status);
            }
            if (params.jobs) {
                query.equalTo('jobs', params.jobs);
            }
            if (params.isFeatured) {
                query.equalTo('isFeatured', params.isFeatured);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.canonical && params.canonical !== '') {
                query.startsWith('canonical', params.canonical);
            }
            if (params.location) {
                if (Array.isArray(params.location)) {
                    var southwest = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                        latitude: params.location.latitude,
                        longitude: params.location.longitude
                    });
                    if (params.unit && params.unit === 'km') {
                        query.withinKilometers('location', point, distance);
                    }
                    else {
                        query.withinMiles('location', point, distance);
                    }
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.include('jobs');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    JobsList.prototype.loadFavorites = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(JobsList.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "likeCount", {
        get: function () {
            return this.get('likeCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "jobs", {
        get: function () {
            return this.get('jobs');
        },
        set: function (val) {
            this.set('jobs', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsList.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal)
                return 0;
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    JobsList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JobsList);
    return JobsList;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('JobsList', JobsList);
//# sourceMappingURL=jobslist-service.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var RentList = (function (_super) {
    __extends(RentList, _super);
    function RentList() {
        return _super.call(this, 'RentList') || this;
    }
    RentList.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    RentList.prototype.like = function (rentlist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likeRentList', { rentlistId: rentlist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    RentList.prototype.isLiked = function (rentlist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isRentListLiked', { rentlistId: rentlist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    RentList.prototype.isStarred = function (rentlist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isRentListStarred', { rentlistId: rentlist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    RentList.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var distance = params.distance || 100;
            var status = params.status || 'Approved';
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (Array.isArray(status)) {
                query.containedIn('status', status);
            }
            else {
                query.equalTo('status', status);
            }
            if (params.rent) {
                query.equalTo('rent', params.rent);
            }
            if (params.isFeatured) {
                query.equalTo('isFeatured', params.isFeatured);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.canonical && params.canonical !== '') {
                query.startsWith('canonical', params.canonical);
            }
            if (params.location) {
                if (Array.isArray(params.location)) {
                    var southwest = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                        latitude: params.location.latitude,
                        longitude: params.location.longitude
                    });
                    if (params.unit && params.unit === 'km') {
                        query.withinKilometers('location', point, distance);
                    }
                    else {
                        query.withinMiles('location', point, distance);
                    }
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.include('rent');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    RentList.prototype.loadFavorites = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(RentList.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "likeCount", {
        get: function () {
            return this.get('likeCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "rent", {
        get: function () {
            return this.get('rent');
        },
        set: function (val) {
            this.set('rent', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentList.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal)
                return 0;
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    RentList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RentList);
    return RentList;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('RentList', RentList);
//# sourceMappingURL=rentlist-service.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Review; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Review = (function (_super) {
    __extends(Review, _super);
    function Review() {
        return _super.call(this, 'Review') || this;
    }
    Review_1 = Review;
    Review.prototype.create = function (data) {
        return new Promise(function (resolve, reject) {
            var review = new Review_1();
            review.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Review.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (params.place) {
                query.equalTo('place', params.place);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            query.equalTo('isInappropriate', true);
            query.descending('createdAt');
            query.include(['user', 'place']);
            query.doesNotExist('deletedAt');
            var limit = params.limit || 100;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Review.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Review.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    Review = Review_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Review);
    return Review;
    var Review_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Review', Review);
//# sourceMappingURL=review-service.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var SaleList = (function (_super) {
    __extends(SaleList, _super);
    function SaleList() {
        return _super.call(this, 'SaleList') || this;
    }
    SaleList.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    SaleList.prototype.like = function (salelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likeSaleList', { salelistId: salelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaleList.prototype.isLiked = function (salelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isSaleListLiked', { salelistId: salelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaleList.prototype.isStarred = function (salelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isSaleListStarred', { salelistId: salelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaleList.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var distance = params.distance || 100;
            var status = params.status || 'Approved';
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (Array.isArray(status)) {
                query.containedIn('status', status);
            }
            else {
                query.equalTo('status', status);
            }
            if (params.sale) {
                query.equalTo('sale', params.sale);
            }
            if (params.isFeatured) {
                query.equalTo('isFeatured', params.isFeatured);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.canonical && params.canonical !== '') {
                query.startsWith('canonical', params.canonical);
            }
            if (params.location) {
                if (Array.isArray(params.location)) {
                    var southwest = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                        latitude: params.location.latitude,
                        longitude: params.location.longitude
                    });
                    if (params.unit && params.unit === 'km') {
                        query.withinKilometers('location', point, distance);
                    }
                    else {
                        query.withinMiles('location', point, distance);
                    }
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.include('sale');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    SaleList.prototype.loadFavorites = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(SaleList.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "likeCount", {
        get: function () {
            return this.get('likeCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "sale", {
        get: function () {
            return this.get('sale');
        },
        set: function (val) {
            this.set('sale', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleList.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal)
                return 0;
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    SaleList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SaleList);
    return SaleList;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('SaleList', SaleList);
//# sourceMappingURL=salelist-service.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var UpdateList = (function (_super) {
    __extends(UpdateList, _super);
    function UpdateList() {
        return _super.call(this, 'UpdateList') || this;
    }
    UpdateList.prototype.distance = function (location, unit) {
        if (unit === void 0) { unit = 'km'; }
        if (!location)
            return null;
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
            latitude: location.latitude,
            longitude: location.longitude
        });
        if (unit === 'km') {
            return this.location.kilometersTo(geoPoint).toFixed(2) + ' ' + unit;
        }
        else {
            return this.location.milesTo(geoPoint).toFixed(2) + ' ' + unit;
        }
    };
    UpdateList.prototype.like = function (updatelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('likeUpdateList', { updatelistId: updatelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    UpdateList.prototype.isLiked = function (updatelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isUpdateListLiked', { updatelistId: updatelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    UpdateList.prototype.isStarred = function (updatelist) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Cloud.run('isUpdateListStarred', { updatelistId: updatelist.id }).then(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    UpdateList.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var distance = params.distance || 100;
            var status = params.status || 'Approved';
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (Array.isArray(status)) {
                query.containedIn('status', status);
            }
            else {
                query.equalTo('status', status);
            }
            if (params.cityupdate) {
                query.equalTo('cityupdate', params.cityupdate);
            }
            if (params.isFeatured) {
                query.equalTo('isFeatured', params.isFeatured);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            if (params.canonical && params.canonical !== '') {
                query.startsWith('canonical', params.canonical);
            }
            if (params.location) {
                if (Array.isArray(params.location)) {
                    var southwest = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[0].latitude, params.location[0].longitude);
                    var northeast = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint(params.location[1].latitude, params.location[1].longitude);
                    query.withinGeoBox('location', southwest, northeast);
                }
                else {
                    var point = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                        latitude: params.location.latitude,
                        longitude: params.location.longitude
                    });
                    if (params.unit && params.unit === 'km') {
                        query.withinKilometers('location', point, distance);
                    }
                    else {
                        query.withinMiles('location', point, distance);
                    }
                }
            }
            else {
                query.descending('createdAt');
            }
            query.skip(page * limit);
            query.limit(limit);
            query.include('cityupdate');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    UpdateList.prototype.loadFavorites = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.equalTo('status', 'Approved');
            query.equalTo('likes', __WEBPACK_IMPORTED_MODULE_1_parse___default.a.User.current());
            query.skip(page * limit);
            query.limit(limit);
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(UpdateList.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        set: function (val) {
            this.set('title', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "likeCount", {
        get: function () {
            return this.get('likeCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "description", {
        get: function () {
            return this.get('description');
        },
        set: function (val) {
            this.set('description', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "phone", {
        get: function () {
            return this.get('phone');
        },
        set: function (val) {
            this.set('phone', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "website", {
        get: function () {
            return this.get('website');
        },
        set: function (val) {
            this.set('website', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "address", {
        get: function () {
            return this.get('address');
        },
        set: function (val) {
            this.set('address', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "cityupdate", {
        get: function () {
            return this.get('cityupdate');
        },
        set: function (val) {
            this.set('cityupdate', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        set: function (val) {
            this.set('image', val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "location", {
        get: function () {
            return this.get('location');
        },
        set: function (val) {
            var geoPoint = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.GeoPoint({
                latitude: val.lat,
                longitude: val.lng
            });
            this.set('location', geoPoint);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "imageTwo", {
        get: function () {
            return this.get('imageTwo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "imageThree", {
        get: function () {
            return this.get('imageThree');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "imageFour", {
        get: function () {
            return this.get('imageFour');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "ratingCount", {
        get: function () {
            return this.get('ratingCount');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "ratingTotal", {
        get: function () {
            return this.get('ratingTotal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "status", {
        get: function () {
            return this.get('status');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateList.prototype, "rating", {
        get: function () {
            if (!this.ratingCount && !this.ratingTotal)
                return 0;
            return Math.round(this.ratingTotal / this.ratingCount);
        },
        enumerable: true,
        configurable: true
    });
    UpdateList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UpdateList);
    return UpdateList;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('UpdateList', UpdateList);
//# sourceMappingURL=updatelist-service.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeServiceListReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var HomeServiceListReview = (function (_super) {
    __extends(HomeServiceListReview, _super);
    function HomeServiceListReview() {
        return _super.call(this, 'HomeServiceListReview') || this;
    }
    HomeServiceListReview_1 = HomeServiceListReview;
    HomeServiceListReview.prototype.create = function (data) {
        return new Promise(function (resolve, reject) {
            var homeservicelistreview = new HomeServiceListReview_1();
            homeservicelistreview.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    HomeServiceListReview.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (params.homeservicelist) {
                query.equalTo('homeservicelist', params.homeservicelist);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            query.equalTo('isInappropriate', true);
            query.descending('createdAt');
            query.include(['user', 'homeservicelist']);
            query.doesNotExist('deletedAt');
            var limit = params.limit || 100;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(HomeServiceListReview.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceListReview.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceListReview.prototype, "homeservicelist", {
        get: function () {
            return this.get('homeservicelist');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeServiceListReview.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    HomeServiceListReview = HomeServiceListReview_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HomeServiceListReview);
    return HomeServiceListReview;
    var HomeServiceListReview_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('HomeServiceListReview', HomeServiceListReview);
//# sourceMappingURL=homeservicelistreview-service.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var JobsListReview = (function (_super) {
    __extends(JobsListReview, _super);
    function JobsListReview() {
        return _super.call(this, 'JobsListReview') || this;
    }
    JobsListReview_1 = JobsListReview;
    JobsListReview.prototype.create = function (data) {
        return new Promise(function (resolve, reject) {
            var jobslistreview = new JobsListReview_1();
            jobslistreview.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    JobsListReview.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (params.jobslist) {
                query.equalTo('jobslist', params.jobslist);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            query.equalTo('isInappropriate', true);
            query.descending('createdAt');
            query.include(['user', 'jobslist']);
            query.doesNotExist('deletedAt');
            var limit = params.limit || 100;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(JobsListReview.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsListReview.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsListReview.prototype, "jobslist", {
        get: function () {
            return this.get('jobslist');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobsListReview.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    JobsListReview = JobsListReview_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JobsListReview);
    return JobsListReview;
    var JobsListReview_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('JobsListReview', JobsListReview);
//# sourceMappingURL=jobslistreview-service.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Category = (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super.call(this, 'Category') || this;
    }
    Category.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.ascending('sort');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Category.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "placeCount", {
        get: function () {
            return this.get('placeCount');
        },
        enumerable: true,
        configurable: true
    });
    Category = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Category);
    return Category;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Category', Category);
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RentListReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var RentListReview = (function (_super) {
    __extends(RentListReview, _super);
    function RentListReview() {
        return _super.call(this, 'RentListReview') || this;
    }
    RentListReview_1 = RentListReview;
    RentListReview.prototype.create = function (data) {
        return new Promise(function (resolve, reject) {
            var rentlistreview = new RentListReview_1();
            rentlistreview.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    RentListReview.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (params.rentlist) {
                query.equalTo('rentlist', params.rentlist);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            query.equalTo('isInappropriate', true);
            query.descending('createdAt');
            query.include(['user', 'rentlist']);
            query.doesNotExist('deletedAt');
            var limit = params.limit || 100;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(RentListReview.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentListReview.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentListReview.prototype, "rentlist", {
        get: function () {
            return this.get('rentlist');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RentListReview.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    RentListReview = RentListReview_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RentListReview);
    return RentListReview;
    var RentListReview_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('RentListReview', RentListReview);
//# sourceMappingURL=rentlistreview-service.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleListReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var SaleListReview = (function (_super) {
    __extends(SaleListReview, _super);
    function SaleListReview() {
        return _super.call(this, 'SaleListReview') || this;
    }
    SaleListReview_1 = SaleListReview;
    SaleListReview.prototype.create = function (data) {
        return new Promise(function (resolve, reject) {
            var salelistreview = new SaleListReview_1();
            salelistreview.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    SaleListReview.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (params.salelist) {
                query.equalTo('salelist', params.salelist);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            query.equalTo('isInappropriate', true);
            query.descending('createdAt');
            query.include(['user', 'salelist']);
            query.doesNotExist('deletedAt');
            var limit = params.limit || 100;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(SaleListReview.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleListReview.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleListReview.prototype, "salelist", {
        get: function () {
            return this.get('salelist');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaleListReview.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    SaleListReview = SaleListReview_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SaleListReview);
    return SaleListReview;
    var SaleListReview_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('SaleListReview', SaleListReview);
//# sourceMappingURL=salelistreview-service.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateListReview; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var UpdateListReview = (function (_super) {
    __extends(UpdateListReview, _super);
    function UpdateListReview() {
        return _super.call(this, 'UpdateListReview') || this;
    }
    UpdateListReview_1 = UpdateListReview;
    UpdateListReview.prototype.create = function (data) {
        return new Promise(function (resolve, reject) {
            var updatelistreview = new UpdateListReview_1();
            updatelistreview.save(data).then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    UpdateListReview.prototype.load = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            if (params.updatelist) {
                query.equalTo('updatelist', params.updatelist);
            }
            if (params.user) {
                query.equalTo('user', params.user);
            }
            query.equalTo('isInappropriate', true);
            query.descending('createdAt');
            query.include(['user', 'updatelist']);
            query.doesNotExist('deletedAt');
            var limit = params.limit || 100;
            var page = params.page || 0;
            query.skip(page * limit);
            query.limit(limit);
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(UpdateListReview.prototype, "rating", {
        get: function () {
            return this.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateListReview.prototype, "comment", {
        get: function () {
            return this.get('comment');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateListReview.prototype, "updatelist", {
        get: function () {
            return this.get('updatelist');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateListReview.prototype, "user", {
        get: function () {
            return this.get('user');
        },
        enumerable: true,
        configurable: true
    });
    UpdateListReview = UpdateListReview_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UpdateListReview);
    return UpdateListReview;
    var UpdateListReview_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('UpdateListReview', UpdateListReview);
//# sourceMappingURL=updatelistreview-service.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Locations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Locations = (function () {
    function Locations(http) {
        this.http = http;
    }
    Locations.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('assets/data/locations.json').map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.data = _this.applyHaversine(data.locations);
                _this.data.sort(function (locationA, locationB) {
                    return locationA.distance - locationB.distance;
                });
                resolve(_this.data);
            });
        });
    };
    Locations.prototype.applyHaversine = function (locations) {
        var _this = this;
        var usersLocation = {
            lat: 40.713744,
            lng: -74.009056
        };
        locations.map(function (location) {
            var placeLocation = {
                lat: location.latitude,
                lng: location.longitude
            };
            location.distance = _this.getDistanceBetweenPoints(usersLocation, placeLocation, 'miles').toFixed(2);
        });
        return locations;
    };
    Locations.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat;
        var lon1 = start.lng;
        var lat2 = end.latitude;
        var lon2 = end.longitude;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    Locations.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    Locations = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Locations);
    return Locations;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var HomeService = (function (_super) {
    __extends(HomeService, _super);
    function HomeService() {
        return _super.call(this, 'HomeService') || this;
    }
    HomeService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.ascending('sort');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(HomeService.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeService.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeService.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeService.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeService.prototype, "placeCount", {
        get: function () {
            return this.get('homeservicelistCount');
        },
        enumerable: true,
        configurable: true
    });
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HomeService);
    return HomeService;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('HomeService', HomeService);
//# sourceMappingURL=homeservice.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jobs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Jobs = (function (_super) {
    __extends(Jobs, _super);
    function Jobs() {
        return _super.call(this, 'Jobs') || this;
    }
    Jobs.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.ascending('sort');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Jobs.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jobs.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jobs.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jobs.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Jobs.prototype, "placeCount", {
        get: function () {
            return this.get('jobslistCount');
        },
        enumerable: true,
        configurable: true
    });
    Jobs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Jobs);
    return Jobs;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Jobs', Jobs);
//# sourceMappingURL=jobs.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Rent = (function (_super) {
    __extends(Rent, _super);
    function Rent() {
        return _super.call(this, 'Rent') || this;
    }
    Rent.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.ascending('sort');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Rent.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rent.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rent.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rent.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rent.prototype, "placeCount", {
        get: function () {
            return this.get('rentlistCount');
        },
        enumerable: true,
        configurable: true
    });
    Rent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Rent);
    return Rent;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Rent', Rent);
//# sourceMappingURL=rent.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sale; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Sale = (function (_super) {
    __extends(Sale, _super);
    function Sale() {
        return _super.call(this, 'Sale') || this;
    }
    Sale.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.ascending('sort');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Sale.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sale.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sale.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sale.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sale.prototype, "placeCount", {
        get: function () {
            return this.get('salelistCount');
        },
        enumerable: true,
        configurable: true
    });
    Sale = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Sale);
    return Sale;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Sale', Sale);
//# sourceMappingURL=sale.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityUpdate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var CityUpdate = (function (_super) {
    __extends(CityUpdate, _super);
    function CityUpdate() {
        return _super.call(this, 'CityUpdate') || this;
    }
    CityUpdate.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(_this);
            query.ascending('sort');
            query.doesNotExist('deletedAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(CityUpdate.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityUpdate.prototype, "icon", {
        get: function () {
            return this.get('icon');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityUpdate.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityUpdate.prototype, "imageThumb", {
        get: function () {
            return this.get('imageThumb');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CityUpdate.prototype, "placeCount", {
        get: function () {
            return this.get('updatelistCount');
        },
        enumerable: true,
        configurable: true
    });
    CityUpdate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CityUpdate);
    return CityUpdate;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('CityUpdate', CityUpdate);
//# sourceMappingURL=cityupdate.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMaps1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var infowindow;
var GoogleMaps1 = (function () {
    function GoogleMaps1(http) {
        this.http = http;
        this.apikey = 'AIzaSyBrmUANBWFGdVahMgTiVnfGucKyi5iRiwA';
        this.mapInitialised = false;
        this.markers = [];
        this.url = [];
        this.places = [];
        this.returnData = [];
    }
    GoogleMaps1.prototype.init = function (mapElement) {
        this.mapElement = mapElement;
        return this.loadGoogleMaps();
    };
    GoogleMaps1.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                window['mapInit'] = function () {
                };
                var script = document.createElement("script");
                script.id = "googleMaps";
                if (_this.apikey) {
                    script.src = 'http://maps.google.com/maps/api/js?key=' + _this.apikey + '&callback=mapInit';
                }
                else {
                    script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                }
                document.body.appendChild(script);
            }
            resolve(false);
        });
    };
    GoogleMaps1.prototype.initMap = function (params) {
        var _this = this;
        console.log(params);
        this.mapInitialised = true;
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_ionic_native__["a" /* Geolocation */].getCurrentPosition().then(function (position) {
                // let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var latLng = new google.maps.LatLng(16.9607985, 82.2258939);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                _this.service = new google.maps.places.PlacesService(_this.map);
                _this.service.nearbySearch({
                    location: { lat: position.coords.latitude, lng: position.coords.longitude },
                    radius: 1000,
                    type: params
                }, function (results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            _this.places.push(results[i]);
                            console.log(results[i]);
                            _this.GetPlceDetails(results[i]).then(function (results) {
                                resolve(results);
                            });
                        }
                    }
                });
            });
        });
    };
    GoogleMaps1.prototype.createMarker = function (place) {
        var placeLoc = place.geometry.location;
        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
        this.GetPlceDetails(place);
        var marker = new google.maps.Marker({
            map: this.map,
            position: placeLoc,
            icon: image
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(place.name);
            infowindow.open(this.map, this);
            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' + 'Rating: ' + place.rating + '<br>' +
                place.vicinity + '</div>');
            infowindow.open(this.map, this);
        });
    };
    GoogleMaps1.prototype.GetPlceDetails = function (Place) {
        var _this = this;
        return new Promise(function (resolve) {
            var placeid = Place.place_id;
            _this.url = [];
            _this.http.get('https://maps.googleapis.com/maps/api/place/details/json?key=' + _this.apikey + '&placeid=' + placeid).map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.posts = data.result;
                console.log(_this.posts);
                if (_this.posts.photos) {
                    for (var i = _this.posts.photos.length - 1; i < _this.posts.photos.length; i++) {
                        _this.photos = _this.posts.photos[i].photo_reference;
                        var url = {
                            url: 'https://maps.googleapis.com/maps/api/place/photo?key=' + _this.apikey + '&photoreference=' + _this.photos + '&maxwidth=200',
                            name: _this.posts.name,
                        };
                        _this.url.push(url);
                        console.log(_this.url);
                        resolve(_this.url);
                    }
                }
                else {
                    console.log('no data found');
                }
            });
        });
    };
    // Removes the markers from the map, but keeps them in the array.
    GoogleMaps1.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    GoogleMaps1.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
        this.markers = [];
    };
    //move this funciton from location.ts
    GoogleMaps1.prototype.getDistanceBetweenPoints = function (start, end, units) {
        var earthRadius = {
            miles: 3958.8,
            km: 6371
        };
        var R = earthRadius[units || 'miles'];
        var lat1 = start.lat();
        var lon1 = start.lng();
        var lat2 = end.coords.latitude;
        var lon2 = end.coords.longitude;
        var dLat = this.toRad((lat2 - lat1));
        var dLon = this.toRad((lon2 - lon1));
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        console.log('distanceToYou ' + d);
        return d;
    };
    GoogleMaps1.prototype.toRad = function (x) {
        return x * Math.PI / 180;
    };
    GoogleMaps1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], GoogleMaps1);
    return GoogleMaps1;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTracker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geofence__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_storage__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocationTracker = (function () {
    function LocationTracker(storage, place, zone, backgroundGeolocation, geolocation, geofence) {
        //for background tracking
        //     backgroundmode.on("activate").subscribe(()=>{
        //       console.log("hi");
        //       this.getFenceTracking();
        this.storage = storage;
        this.place = place;
        this.zone = zone;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.geofence = geofence;
        this.lat = 0;
        this.lng = 0;
        this.geolist2 = [];
        this.fence = [];
        // });
        geofence.initialize().then(function () { return console.log('Geofence Plugin Ready'); }, function (err) { return console.log(err); });
    }
    ;
    LocationTracker.prototype.getGlo = function (data) {
        console.log(data);
        this.geolist2 = data;
        for (var i = 0; i < this.geolist2.length; i++) {
            this.fence.push({
                id: this.geolist2[i].id,
                latitude: this.geolist2[i].location.latitude,
                longitude: this.geolist2[i].location.longitude,
                radius: this.geolist2[i].radius,
                transitionType: 1,
                notification: {
                    id: 1,
                    title: this.geolist2[i].title,
                    text: this.geolist2[i].message,
                    openAppOnClick: true //open app when notification is tapped
                }
            });
        }
        this.getFenceTracking();
    };
    LocationTracker.prototype.startTracking = function () {
        var _this = this;
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 100,
            distanceFilter: 10,
            interval: 30000
        };
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            //        this.place.getGeo(location).then((data)=>{
            //     var i:any=[];
            //      i=data;
            //   this.getGlo(i);
            // });
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
            });
        }, function (err) {
            console.log(err);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 10000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            // this.list=this.place.getGeo(position);
            _this.place.getGeo(position).then(function (data) {
                _this.list = data;
                _this.getGlo(_this.list);
            });
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        });
    };
    //  startTracking() {
    //   // Background Tracking
    //   console.log("hiim serve")
    //   let config = {
    //     desiredAccuracy: 0,
    //     stationaryRadius: 20,
    //     distanceFilter: 20,
    //     stopOnTerminate: false,
    //       startOnBoot: true,
    //       startForeground:false,
    // //     desiredAccuracy: 10,
    // // stationaryRadius: 20,
    // // distanceFilter: 30,
    // //     interval: 3000,
    // //     fastestInterval: 2500,
    // //     notificationTitle: "LOCATIONTEST", // Android
    // //     notificationText: "Background location tracking is ON.", // Android
    // //     notificationIconLarge: "icon", // Android
    // //     notificationIconSmall: "icon", // Android
    // //     startOnBoot: true,
    // //     startForeground: false,
    // //     batchSync: true,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
    // //     autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
    // //     maxDaysToPersist: 1, 
    // //    activityType: 'AutomotiveNavigation',
    // //   stopOnTerminate: false
    //   };
    //   this.backgroundGeolocation.configure(config).subscribe((location) => {
    //     console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
    //     this.getFenceTracking();
    //     this.place.getGeo(location);
    //     // Run update inside of Angular's zone
    //     this.zone.run(() => {
    //       this.lat = location.latitude;
    //       this.lng = location.longitude;
    //     });
    //   }, (err) => {
    //     console.log(err);
    //   });
    //   // Turn ON the background-geolocation system.
    //   this.backgroundGeolocation.start();
    //   // Foreground Tracking
    // let options = {
    //   frequency: 10*1000,
    //   enableHighAccuracy: true
    // };
    // this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
    //   // Run update inside of Angular's zone
    //   this.zone.run(() => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //   });
    //     });
    // }
    LocationTracker.prototype.getFenceTracking = function () {
        // let fence = {
        //   id: 'AIzaSyDye3DSY410__0x2eG9GjNWTTZxTtW2-Vo', //any unique ID
        //   latitude:      this.geolist2.location.latitude, //center of geofence radius
        //   longitude:     this.geolist2.location.longitude,
        //   radius:         this.geolist2.radius, //radius to edge of geofence in meters
        //   transitionType: 3, //see 'Transition Types' below
        //   notification: { //notification settings
        //       id:             1, //any unique ID
        //       title:         this.geolist2.title, //notification title
        //       text:           this.geolist2.message, //notification body
        //       openAppOnClick: true //open app when notification is tapped
        //             }
        //      }
        this.geofence.addOrUpdate(this.fence).then(function () { return console.log('Geofence added'); }, function (err) { return console.log('Geofence failed to add' + err); });
        this.geofence.getWatched().then(function (fence) {
            var geofence = JSON.parse(fence);
            return geofence;
        });
    };
    LocationTracker.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTracker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__local_storage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_4__place_service__["a" /* Place */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geofence__["a" /* Geofence */]])
    ], LocationTracker);
    return LocationTracker;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
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


var Post = (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super.call(this, 'Post') || this;
    }
    Post_1 = Post;
    Post.prototype.load = function (params) {
        if (params === void 0) { params = {}; }
        return new Promise(function (resolve, reject) {
            var page = params.page || 0;
            var limit = params.limit || 100;
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse___default.a.Query(Post_1);
            query.skip(page * limit);
            query.limit(limit);
            query.include('place');
            query.descending('createdAt');
            query.find().then(function (data) { return resolve(data); }, function (error) { return reject(error); });
        });
    };
    Object.defineProperty(Post.prototype, "title", {
        get: function () {
            return this.get('title');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "body", {
        get: function () {
            return this.get('body');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "image", {
        get: function () {
            return this.get('image');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "place", {
        get: function () {
            return this.get('place');
        },
        enumerable: true,
        configurable: true
    });
    Post.prototype.toString = function () {
        return this.title;
    };
    Post = Post_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Post);
    return Post;
    var Post_1;
}(__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object));

__WEBPACK_IMPORTED_MODULE_1_parse___default.a.Object.registerSubclass('Post', Post);
//# sourceMappingURL=post.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(670);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_location_tracker__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geofence__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_google_maps__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_categories__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_jobs__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_sale__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cityupdate__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_updatelist_service__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_updatelistreview_service__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_concion_popover_concion_popover__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_place_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_jobslist_service__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_jobslistreview_service__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_salelist_service__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_salelistreview_service__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_geofence_service__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_rent__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_rentlist_service__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_rentlistreview_service__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_homeservice__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_homeservicelist_service__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_homeservicelistreview_service__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_review_service__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_parse_file_service__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_user_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_slide__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_post__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_local_storage__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_preference__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_map_style__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_installation__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_window_ref__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_status_bar__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_file__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_launch_navigator__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_call_number__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_in_app_browser__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_social_sharing__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_google_maps__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_app_version__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_header_color__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ionic_native_google_analytics__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_admob_free__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_browser_tab__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_storage__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ngx_img_fallback__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng_lazyload_image__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_ionic_image_loader__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_angular_star_rating__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_locations__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__providers_backgroiund_geolocation__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ngx_translate_core__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ngx_translate_http_loader__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_firebase__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_65_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ionic_native_firebase__ = __webpack_require__(1080);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// import { GooglePlaces } from '../providers/google-places';






































__WEBPACK_IMPORTED_MODULE_65_firebase__["initializeApp"]({
    apiKey: "AIzaSyD13aRjXSqwqIv68xVqYJ2y2GLGHTHTlA8",
    authDomain: "nearmeapp-11.firebaseapp.com",
    databaseURL: "https://nearmeapp-11.firebaseio.com",
    projectId: "nearmeapp-11",
    storageBucket: "nearmeapp-11.appspot.com",
    messagingSenderId: "1051521831160"
});
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_62__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_concion_popover_concion_popover__["a" /* CancionPopoverPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-homeservicelist/add-homeservicelist.module#AddHomeServiceListPageModule', name: 'AddHomeServiceListPage', segment: 'add-homeservicelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-homeservicelistreview/add-homeservicelistreview.module#AddHomeServiceListReviewPageModule', name: 'AddHomeServiceListReviewPage', segment: 'add-homeservicelistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-jobslist/add-jobslist.module#AddJobsListPageModule', name: 'AddJobsListPage', segment: 'add-jobslist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-jobslistreview-page/add-jobslistreview.module#AddJobsListReviewPageModule', name: 'AddJobsListReviewPage', segment: 'add-jobslistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-place-page/add-place-page.module#AddPlacePageModule', name: 'AddPlacePage', segment: 'add-place-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-rentlist/add-rentlist.module#AddRentListPageModule', name: 'AddRentListPage', segment: 'add-rentlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-rentlistreview/add-rentlistreview.module#AddRentListReviewPageModule', name: 'AddRentListReviewPage', segment: 'add-rentlistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-review-page/add-review-page.module#AddReviewPageModule', name: 'AddReviewPage', segment: 'add-review-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-salelist/add-salelist.module#AddSaleListPageModule', name: 'AddSaleListPage', segment: 'add-salelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-salelistreview/add-salelistreview.module#AddSaleListReviewPageModule', name: 'AddSaleListReviewPage', segment: 'add-salelistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-updatelist/add-updatelist.module#AddUpdateListPageModule', name: 'AddUpdateListPage', segment: 'add-updatelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-updatelistreview/add-updatelistreview.module#AddUpdateListReviewPageModule', name: 'AddUpdateListReviewPage', segment: 'add-updatelistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cityupdate/cityupdate.module#CityUpdatePageModule', name: 'CityUpdatePage', segment: 'cityupdate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/concion-popover/concion-popover.module#ConcionPopoverPageModule', name: 'CancionPopoverPage', segment: 'concion-popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-item/edit-item.module#EditItemPageModule', name: 'EditItemPage', segment: 'edit-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile-page/edit-profile-page.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-homeservice/favorite-homeservice.module#FavoritesHomeServiceListPageModule', name: 'FavoritesHomeServiceListPage', segment: 'favorite-homeservice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-jobs/favorite-jobs.module#FavoritesJobsListPageModule', name: 'FavoritesJobsListPage', segment: 'favorite-jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-news/favorite-news.module#FavoritesUpdatePageModule', name: 'FavoritesUpdatePage', segment: 'favorite-news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-place/favorite-place.module#FavoritesPlacePageModule', name: 'FavoritesPlacePage', segment: 'favorite-place', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-rent/favorite-rent.module#FavoritesRentPageModule', name: 'FavoritesRentPage', segment: 'favorite-rent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite-sale/favorite-sale.module#FavoritesSalePageModule', name: 'FavoritesSale', segment: 'favorite-sale', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites-page/favorites-page.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/googlemap/googlemap.module#GooglemapPageModule', name: 'GooglemapPage', segment: 'googlemap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-page/home-page.module#HomePageModule', name: 'HomePage', segment: 'home-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homeservice/homeservice.module#HomeServicePageModule', name: 'HomeServicePage', segment: 'homeservice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homeservicelist-detail/homeservicelist-detail.module#HomeServiceListDetailPageModule', name: 'HomeServiceListDetailPage', segment: 'homeservicelist-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homeservicelist/homeservicelist.module#HomeServiceListPageModule', name: 'HomeServiceListPage', segment: 'homeservicelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homeservicelistreview/homeservicelistreview.module#HomeServiceListReviewPageModule', name: 'HomeServiceListReviewPage', segment: 'homeservicelistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobs/jobs.module#JobsPageModule', name: 'JobsPage', segment: 'jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobslist-detail-page/jobslist-detail-page.module#JobsListDetailPageModule', name: 'JobsListDetailPage', segment: 'jobslist-detail-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobslist/jobslist.module#JobsListPageModule', name: 'JobsListPage', segment: 'jobslist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobslistreview-page/jobslistreview-page.module#JobsListReviewPageModule', name: 'JobsListReviewPage', segment: 'jobslistreview-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map-page/map-page.module#MapPageModule', name: 'MapPage', segment: 'map-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPage1Module', name: 'MapPage1', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place-detail-page/place-detail-page.module#PlaceDetailPageModule', name: 'PlaceDetailPage', segment: 'place-detail-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-list-page/post-list-page.module#PostListPageModule', name: 'PostListPage', segment: 'post-list-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-page/profile-page.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rent/rent.module#RentPageModule', name: 'RentPage', segment: 'rent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rentlist-detail/rentlist-detail.module#RentListDetailPageModule', name: 'RentListDetailPage', segment: 'rentlist-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rentlist/rentlist.module#RentListPageModule', name: 'RentListPage', segment: 'rentlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rentlistreview/rentlistreview.module#RentListReviewPageModule', name: 'RentListReviewPage', segment: 'rentlistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-page/reset-page.module#ChangePasswordPageModule', name: 'ResetPage', segment: 'reset-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviews-page/reviews-page.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sale/sale.module#SalePageModule', name: 'SalePage', segment: 'sale', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salelist-detail-page/salelist-detail-page.module#SaleListDetailPageModule', name: 'SaleListDetailPage', segment: 'salelist-detail-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salelist/salelist.module#SaleListPageModule', name: 'SaleListPage', segment: 'salelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/salelistreview/salelistreview.module#SaleListReviewPageModule', name: 'SaleListReviewPage', segment: 'salelistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings-page/settings-page.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in-page/sign-in-page.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up-page/sign-up-page.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sl/sl.module#SlPageModule', name: 'SlPage', segment: 'sl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/so/so.module#SoPageModule', name: 'SoPage', segment: 'so', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/subitem/subitem.module#SubitemPageModule', name: 'SubitemPage', segment: 'subitem', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatelist-detail/updatelist-detail.module#UpdateListDetailPageModule', name: 'UpdateListDetailPage', segment: 'updatelist-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatelist/updatelist.module#UpdateListPageModule', name: 'UpdateListPage', segment: 'updatelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatelistreview/updatelistreview.module#UpdateListReviewPageModule', name: 'UpdateListReviewPage', segment: 'updatelistreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walkthrough-page/walkthrough-page.module#WalkthroughPageModule', name: 'WalkthroughPage', segment: 'walkthrough-page', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_54__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_55_ngx_img_fallback__["a" /* ImgFallbackModule */],
                __WEBPACK_IMPORTED_MODULE_56_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_64__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_63__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_58_angular_star_rating__["a" /* StarRatingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_57_ionic_image_loader__["b" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_61__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_61__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_63__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_64__angular_http__["a" /* Http */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages_concion_popover_concion_popover__["a" /* CancionPopoverPage */],
            ],
            providers: [
                // GooglePlaces,
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_8__providers_google_maps__["a" /* GoogleMaps1 */],
                __WEBPACK_IMPORTED_MODULE_59__providers_locations__["a" /* Locations */],
                __WEBPACK_IMPORTED_MODULE_12__providers_cityupdate__["a" /* CityUpdate */],
                __WEBPACK_IMPORTED_MODULE_14__providers_updatelistreview_service__["a" /* UpdateListReview */],
                __WEBPACK_IMPORTED_MODULE_21__providers_geofence_service__["a" /* GeoList */],
                __WEBPACK_IMPORTED_MODULE_13__providers_updatelist_service__["a" /* UpdateList */],
                __WEBPACK_IMPORTED_MODULE_25__providers_homeservice__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_homeservicelist_service__["a" /* HomeServiceList */],
                __WEBPACK_IMPORTED_MODULE_27__providers_homeservicelistreview_service__["a" /* HomeServiceListReview */],
                __WEBPACK_IMPORTED_MODULE_22__providers_rent__["a" /* Rent */],
                __WEBPACK_IMPORTED_MODULE_23__providers_rentlist_service__["a" /* RentList */],
                __WEBPACK_IMPORTED_MODULE_24__providers_rentlistreview_service__["a" /* RentListReview */],
                __WEBPACK_IMPORTED_MODULE_18__providers_jobslistreview_service__["a" /* JobsListReview */],
                __WEBPACK_IMPORTED_MODULE_20__providers_salelistreview_service__["a" /* SaleListReview */],
                __WEBPACK_IMPORTED_MODULE_10__providers_jobs__["a" /* Jobs */],
                __WEBPACK_IMPORTED_MODULE_11__providers_sale__["a" /* Sale */],
                __WEBPACK_IMPORTED_MODULE_19__providers_salelist_service__["a" /* SaleList */],
                __WEBPACK_IMPORTED_MODULE_15__pages_concion_popover_concion_popover__["a" /* CancionPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_9__providers_categories__["a" /* Category */],
                __WEBPACK_IMPORTED_MODULE_16__providers_place_service__["a" /* Place */],
                __WEBPACK_IMPORTED_MODULE_5__providers_location_tracker__["a" /* LocationTracker */],
                __WEBPACK_IMPORTED_MODULE_60__providers_backgroiund_geolocation__["a" /* BackgroundGeolocation1 */],
                __WEBPACK_IMPORTED_MODULE_17__providers_jobslist_service__["a" /* JobsList */],
                __WEBPACK_IMPORTED_MODULE_29__providers_parse_file_service__["a" /* ParseFile */],
                __WEBPACK_IMPORTED_MODULE_28__providers_review_service__["a" /* Review */],
                __WEBPACK_IMPORTED_MODULE_33__providers_local_storage__["a" /* LocalStorage */],
                __WEBPACK_IMPORTED_MODULE_30__providers_user_service__["a" /* User */],
                __WEBPACK_IMPORTED_MODULE_31__providers_slide__["a" /* Slide */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geofence__["a" /* Geofence */],
                __WEBPACK_IMPORTED_MODULE_32__providers_post__["a" /* Post */],
                __WEBPACK_IMPORTED_MODULE_47__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_36__providers_installation__["a" /* Installation */],
                __WEBPACK_IMPORTED_MODULE_37__providers_window_ref__["a" /* WindowRef */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_46__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_66__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_50__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_48__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_browser_tab__["a" /* BrowserTab */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_34__providers_preference__["a" /* Preference */], __WEBPACK_IMPORTED_MODULE_35__providers_map_style__["a" /* MapStyle */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ })

},[665]);
//# sourceMappingURL=main.js.map