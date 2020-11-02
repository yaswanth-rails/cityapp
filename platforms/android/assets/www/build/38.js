webpackJsonp([38],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsListDetailPageModule", function() { return JobsListDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobslist_detail_page__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__(1147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobsListDetailPageModule = (function () {
    function JobsListDetailPageModule() {
    }
    JobsListDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__jobslist_detail_page__["a" /* JobsListDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jobslist_detail_page__["a" /* JobsListDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__jobslist_detail_page__["a" /* JobsListDetailPage */]
            ]
        })
    ], JobsListDetailPageModule);
    return JobsListDetailPageModule;
}());

//# sourceMappingURL=jobslist-detail-page.module.js.map

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(1150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(1145);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_place_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoWindowComponent = (function () {
    function InfoWindowComponent(renderer, navCtrl) {
        this.renderer = renderer;
        this.navCtrl = navCtrl;
    }
    InfoWindowComponent.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    InfoWindowComponent.prototype.goToPlace = function () {
        console.log("hi");
        this.navCtrl.push('PlaceDetailPage', { place: this.place });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__providers_place_service__["a" /* Place */])
    ], InfoWindowComponent.prototype, "place", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoWindowComponent.prototype, "location", void 0);
    InfoWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'info-window',template:/*ion-inline-start:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/components/info-window/info-window.html"*/'<ion-item no-lines class="transparent">\n  <ion-thumbnail item-start>\n      <img-loader useImg\n      [spinner]="false"\n      [src]="place.imageThumb?.url()"\n      fallback="./assets/img/placeholder1.png"\n      (load)="onImageLoad($event)">\n    </img-loader>\n  </ion-thumbnail>\n  <h2 class="text-medium bold no-margin ellipsis" ion-text color="darker">{{ place.name }}</h2>\n  <p class="text-small bold no-margin" ion-text color="dark">{{ place.category.title }}</p>\n  <star-rating *ngIf="place.rating"\n    [starType]="\'svg\'"\n    [size]="\'small\'"\n    [readOnly]="true"\n    [showHalfStars]="false"\n    [rating]="place.rating">\n  </star-rating>\n  <div item-end *ngIf="location">\n    <span class="text-small bold" ion-text color="primary">\n      {{ place.distance(location) }}\n    </span>\n  </div>\n</ion-item>\n<ion-row>\n  <ion-col col-12>\n    <button ion-button block small round color="primary" (click)="goToPlace()">\n      {{ \'DISCOVER_THIS_PLACE\' | translate }}\n    </button>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/components/info-window/info-window.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */]])
    ], InfoWindowComponent);
    return InfoWindowComponent;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_img_fallback__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_star_rating__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_img_fallback__["a" /* ImgFallbackModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_star_rating__["a" /* StarRatingModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__components_empty_view_empty_view_module__["a" /* EmptyViewModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_img_fallback__["a" /* ImgFallbackModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_lazyload_image__["LazyLoadImageModule"],
                __WEBPACK_IMPORTED_MODULE_6_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular_star_rating__["a" /* StarRatingModule */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_view__ = __webpack_require__(1149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmptyViewModule = (function () {
    function EmptyViewModule() {
    }
    EmptyViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__empty_view__["a" /* EmptyView */]
            ]
        })
    ], EmptyViewModule);
    return EmptyViewModule;
}());

//# sourceMappingURL=empty-view.module.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmptyView = (function () {
    function EmptyView() {
        this.text = '';
        this.icon = 'alert';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyView.prototype, "text", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], EmptyView.prototype, "icon", void 0);
    EmptyView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'empty-view',template:/*ion-inline-start:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/components/empty-view/empty-view.html"*/'<div class="container">\n  <ion-icon [name]="icon"></ion-icon>\n  <p ion-item no-lines>{{ text }}</p>\n</div>\n'/*ion-inline-end:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/components/empty-view/empty-view.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmptyView);
    return EmptyView;
}());

//# sourceMappingURL=empty-view.js.map

/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(1145);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_window_info_window__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_star_rating__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_image_loader__["b" /* IonicImageLoader */],
                __WEBPACK_IMPORTED_MODULE_6_angular_star_rating__["a" /* StarRatingModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__info_window_info_window__["a" /* InfoWindowComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

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

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsListDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_jobslist_service__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_preference__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_browser_tab__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__base_page_base_page__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_service__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_jobslistreview_service__ = __webpack_require__(649);
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














var JobsListDetailPage = (function (_super) {
    __extends(JobsListDetailPage, _super);
    function JobsListDetailPage(injector, renderer, platform, jobslistService, modalCtrl, preference, callNumber, geolocation, inAppBrowser, browserTab, reviewService, launchNavigator, socialSharing) {
        var _this = _super.call(this, injector) || this;
        _this.renderer = renderer;
        _this.platform = platform;
        _this.jobslistService = jobslistService;
        _this.modalCtrl = modalCtrl;
        _this.preference = preference;
        _this.callNumber = callNumber;
        _this.geolocation = geolocation;
        _this.inAppBrowser = inAppBrowser;
        _this.browserTab = browserTab;
        _this.reviewService = reviewService;
        _this.launchNavigator = launchNavigator;
        _this.socialSharing = socialSharing;
        _this.images = [];
        _this.rating = 0;
        _this.isLiked = false;
        _this.isStarred = false;
        _this.jobslistreview = [];
        _this.jobslist = _this.navParams.get('jobslist');
        console.log(_this.jobslist);
        _this.unit = _this.preference.unit;
        _this.images = [];
        if (_this.jobslist) {
            _this.rating = _this.jobslist.rating;
            _this.loadLocation();
            if (__WEBPACK_IMPORTED_MODULE_11__providers_user_service__["a" /* User */].getCurrentUser()) {
                _this.checkIfIsLiked();
                _this.checkIfIsStarred();
            }
            _this.loadReviews();
            if (_this.jobslist.image) {
                _this.images.push(_this.jobslist.image);
            }
            if (_this.jobslist.imageTwo) {
                _this.images.push(_this.jobslist.imageTwo);
            }
            if (_this.jobslist.imageThree) {
                _this.images.push(_this.jobslist.imageThree);
            }
            if (_this.jobslist.imageFour) {
                _this.images.push(_this.jobslist.imageFour);
            }
        }
        return _this;
    }
    JobsListDetailPage.prototype.enableMenuSwipe = function () {
        return false;
    };
    JobsListDetailPage.prototype.ionViewDidLoad = function () {
    };
    JobsListDetailPage.prototype.onImageLoad = function (imgLoader) {
        this.renderer.setElementClass(imgLoader.element, 'fade-in', true);
    };
    JobsListDetailPage.prototype.checkIfIsLiked = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isLiked, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.jobslistService.isLiked(this.jobslist)];
                    case 1:
                        isLiked = _a.sent();
                        this.isLiked = isLiked;
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.warn(err_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobsListDetailPage.prototype.checkIfIsStarred = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isStarred, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.jobslistService.isStarred(this.jobslist)];
                    case 1:
                        isStarred = _a.sent();
                        this.isStarred = isStarred;
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.warn(err_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobsListDetailPage.prototype.loadLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, pos, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            enableHighAccuracy: true,
                            timeout: 20000,
                            maximumAge: 60000
                        };
                        return [4 /*yield*/, this.geolocation.getCurrentPosition(options)];
                    case 1:
                        pos = _a.sent();
                        this.location = pos.coords;
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.warn(err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobsListDetailPage.prototype.loadReviews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jobslistreview, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.reviewService.load({ jobslist: this.jobslist, limit: 5 })];
                    case 1:
                        jobslistreview = _a.sent();
                        this.jobslistreview = jobslistreview;
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.warn(err_4.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobsListDetailPage.prototype.openSignUpModal = function () {
        this.navigateTo('SignInPage');
    };
    JobsListDetailPage.prototype.openAddReviewModal = function () {
        var modal = this.modalCtrl.create('AddJobsListReviewPage', { jobslist: this.jobslist });
        modal.present();
    };
    JobsListDetailPage.prototype.onLike = function () {
        if (__WEBPACK_IMPORTED_MODULE_11__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.isLiked = true;
            this.jobslistService.like(this.jobslist);
            this.showToast('Liked');
        }
        else {
            this.openSignUpModal();
        }
    };
    JobsListDetailPage.prototype.onRate = function () {
        if (__WEBPACK_IMPORTED_MODULE_11__providers_user_service__["a" /* User */].getCurrentUser()) {
            this.openAddReviewModal();
        }
        else {
            this.openSignUpModal();
        }
    };
    JobsListDetailPage.prototype.onShare = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socialSharing.share(this.jobslist.title, null, null, this.jobslist.website)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_5 = _a.sent();
                        console.warn(err_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JobsListDetailPage.prototype.onCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.jobslist.phone)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.callNumber.callNumber(this.jobslist.phone, true)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        console.warn(err_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    JobsListDetailPage.prototype.openUrl = function () {
        var _this = this;
        if (!this.jobslist.website)
            return;
        if (this.platform.is('cordova')) {
            this.browserTab.isAvailable().then(function (isAvailable) {
                if (isAvailable) {
                    _this.browserTab.openUrl(_this.jobslist.website);
                }
                else {
                    _this.inAppBrowser.create(_this.jobslist.website, '_system');
                }
            }).catch(function (err) { return console.warn(err); });
        }
        else {
            this.inAppBrowser.create(this.jobslist.website, '_system');
        }
    };
    JobsListDetailPage.prototype.goToMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var googleMaps, appleMaps, isGoogleMapsAvailable, isAppleMapsAvailable, app, options, destination, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        googleMaps = this.launchNavigator.APP.GOOGLE_MAPS;
                        appleMaps = this.launchNavigator.APP.APPLE_MAPS;
                        return [4 /*yield*/, this.launchNavigator.isAppAvailable(googleMaps)];
                    case 1:
                        isGoogleMapsAvailable = _a.sent();
                        return [4 /*yield*/, this.launchNavigator.isAppAvailable(appleMaps)];
                    case 2:
                        isAppleMapsAvailable = _a.sent();
                        app = null;
                        if (isGoogleMapsAvailable) {
                            app = this.launchNavigator.APP.GOOGLE_MAPS;
                        }
                        else if (isAppleMapsAvailable) {
                            app = this.launchNavigator.APP.APPLE_MAPS;
                        }
                        else {
                            app = this.launchNavigator.APP.USER_SELECT;
                        }
                        options = {
                            app: app
                        };
                        destination = [
                            this.jobslist.location.latitude,
                            this.jobslist.location.longitude
                        ];
                        return [4 /*yield*/, this.launchNavigator.navigate(destination, options)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_7 = _a.sent();
                        console.warn(err_7);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    JobsListDetailPage.prototype.goToReviews = function () {
        this.navigateTo('JobsListReviewPage', this.jobslist);
    };
    JobsListDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-jobslist-detail-page',template:/*ion-inline-start:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/jobslist-detail-page/jobslist-detail-page.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{ jobslist.title }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onShare()">\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content #container>\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let image of images">\n      <div class="img-container">\n        <img-loader [src]="image?.url()" (load)="onImageLoad($event)">{{jobslist.likeCount}}</img-loader>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="card-container">\n    <ion-fab right top>\n      <button ion-fab (click)="onLike()">\n        <ion-icon [name]="isLiked ? \'heart\' : \'heart-outline\'"></ion-icon>\n      </button>\n    </ion-fab>\n    <ion-card class="shadow radius-top card-top" color="light">\n      <ion-card-content>\n\n        <p [class.hidden]="!location" margin-top float-end>\n          <ion-icon color="dark" name="pin"></ion-icon>\n          <span class="text-small bold" ion-text color="dark">\n            {{ jobslist.distance(location, unit) }}\n          </span>\n        </p>\n        <h2 class="bold" ion-text color="primary">{{ jobslist.title }}</h2>\n        <star-rating *ngIf="jobslist.rating" [starType]="\'svg\'" [size]="\'medium\'" [readOnly]="true" [showHalfStars]="false" [rating]="jobslist.rating">\n        </star-rating>\n        <p class="bold" margin-top ion-text color="dark">{{ jobslist.description }}</p>\n\n        <ion-row>\n          <ion-col col-4 text-center tapabble [class.disabled]="!jobslist.phone" (click)="onCall()">\n            <div>\n              <ion-icon name="call" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">{{ \'CALL\' | translate }}</p>\n          </ion-col>\n          <ion-col col-4 text-center tapabble (click)="goToMap()">\n            <div>\n              <ion-icon name="map" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">{{ \'DIRECTIONS\' | translate }}</p>\n          </ion-col>\n          <ion-col col-4 text-center tapabble [class.disabled]="!jobslist.website" (click)="openUrl()">\n            <div>\n              <ion-icon name="globe" color="primary"></ion-icon>\n            </div>\n            <p class="bold" ion-text color="primary">{{ \'WEBSITE\' | translate }}</p>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <section padding margin-top>\n\n    <ion-row align-items-center>\n      <ion-col col-8>\n        <h5 no-margin>\n          <ion-icon class="text-medium" name="chatbubbles" color="accent"></ion-icon>\n          {{ \'COMMENTS_AND_REACTIONS\' | translate }}\n        </h5>\n      </ion-col>\n      <ion-col col-4 text-end>\n        <button class="bold" ion-button small block round color="primary" (click)="onRate()">\n          {{ \'POST_REVIEW\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="!jobslistreview.length" text-center>\n      <p class="text-medium" color="accent">\n        {{ \'EMPTY_REVIEWS\' | translate }}\n      </p>\n    </div>\n\n    <ion-list no-lines>\n      <div margin-bottom padding class="radius light-bg border" *ngFor="let jobslistreview of jobslistreview">\n        <ion-item no-padding color="light">\n          <ion-avatar item-start>\n            <img defaultImage="./assets/img/avatar.png"\n              [lazyLoad]="jobslistreview.user?.photo?.url()"\n              [scrollObservable]="container.ionScroll" />\n          </ion-avatar>\n          <h2 class="bold no-margin">{{ jobslistreview.user?.name }}</h2>\n          <p class="text-small no-margin" ion-text color="accent">\n            {{ jobslistreview.createdAt | date:\'mediumDate\' }}\n          </p>\n          <star-rating\n            [starType]="\'svg\'"\n            [size]="\'small\'"\n            [readOnly]="true"\n            [showHalfStars]="false"\n            [rating]="jobslistreview.rating">\n          </star-rating>\n        </ion-item>\n        <ion-row>\n          <ion-col no-padding col-12>\n            <p class="text-medium bold no-margin" ion-text color="dark">{{ jobslistreview.comment }}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n    <div text-center *ngIf="jobslistreview.length">\n      <button class="bold" ion-button icon-right clear color="dark" (click)="goToReviews()">\n        {{ \'VIEW_ALL_REVIEWS\' | translate }}\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </div>\n\n  </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Nagu/Downloads/Nearme/NearmeApp/src/pages/jobslist-detail-page/jobslist-detail-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_jobslist_service__["a" /* JobsList */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_preference__["a" /* Preference */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_browser_tab__["a" /* BrowserTab */],
            __WEBPACK_IMPORTED_MODULE_12__providers_jobslistreview_service__["a" /* JobsListReview */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], JobsListDetailPage);
    return JobsListDetailPage;
}(__WEBPACK_IMPORTED_MODULE_10__base_page_base_page__["a" /* BasePage */]));

//# sourceMappingURL=jobslist-detail-page.js.map

/***/ })

});
//# sourceMappingURL=38.js.map