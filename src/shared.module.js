var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { EmptyViewModule } from './components/empty-view/empty-view.module';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Ionic2RatingModule } from 'ionic2-rating';
import { IonicImageLoader } from 'ionic-image-loader';
import { ComponentsModule } from './components/components.module';
import { StarRatingModule } from 'angular-star-rating';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                IonicModule,
                TranslateModule,
                EmptyViewModule,
                ImgFallbackModule,
                LazyLoadImageModule,
                Ionic2RatingModule,
                IonicImageLoader,
                ComponentsModule,
                StarRatingModule,
            ],
            exports: [
                TranslateModule,
                EmptyViewModule,
                ImgFallbackModule,
                LazyLoadImageModule,
                Ionic2RatingModule,
                IonicImageLoader,
                ComponentsModule,
                StarRatingModule,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map