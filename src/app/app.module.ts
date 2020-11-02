import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import   { LocationTracker } from '../providers/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geofence } from '@ionic-native/geofence';
import { GoogleMaps1 } from '../providers/google-maps';
import { Category } from '../providers/categories';
import { Jobs } from '../providers/jobs';
import { Sale } from '../providers/sale';
import { CityUpdate } from '../providers/cityupdate';
import { UpdateList } from '../providers/updatelist-service';
import { UpdateListReview } from '../providers/updatelistreview-service';
import { CancionPopoverPage } from '../pages/concion-popover/concion-popover';
import { Place } from '../providers/place-service';
import { JobsList } from '../providers/jobslist-service';
import { JobsListReview } from '../providers/jobslistreview-service';
import { SaleList } from '../providers/salelist-service';
import { SaleListReview } from '../providers/salelistreview-service';
import { GeoList } from '../providers/geofence-service';
import { Rent } from '../providers/rent';
 import { RentList } from '../providers/rentlist-service';
import { RentListReview } from '../providers/rentlistreview-service';

import { HomeService } from '../providers/homeservice';
 import { HomeServiceList } from '../providers/homeservicelist-service';
import { HomeServiceListReview } from '../providers/homeservicelistreview-service';

import { Review } from '../providers/review-service';
// import { GooglePlaces } from '../providers/google-places';

import { ParseFile } from '../providers/parse-file-service';
import { User } from '../providers/user-service';
import { Slide } from '../providers/slide';
import { Post } from '../providers/post';

import { LocalStorage } from '../providers/local-storage';
import { Preference } from '../providers/preference';
import { MapStyle } from '../providers/map-style';
import { Installation} from '../providers/installation';
import { WindowRef} from '../providers/window-ref';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { File } from '@ionic-native/file';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleMaps } from '@ionic-native/google-maps';
import { AppVersion } from '@ionic-native/app-version';
import { HeaderColor } from '@ionic-native/header-color';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { AdMobFree } from '@ionic-native/admob-free';
import { BrowserTab } from '@ionic-native/browser-tab';
import { Facebook } from '@ionic-native/facebook';

import { IonicStorageModule } from '@ionic/storage';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IonicImageLoader } from 'ionic-image-loader';
import { StarRatingModule } from 'angular-star-rating';
import { Locations } from '../providers/locations';
import { BackgroundGeolocation1 } from '../providers/backgroiund-geolocation';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import * as firebase from 'firebase';
import {Firebase} from '@ionic-native/firebase';

firebase.initializeApp({
    apiKey: "AIzaSyD13aRjXSqwqIv68xVqYJ2y2GLGHTHTlA8",
    authDomain: "nearmeapp-11.firebaseapp.com",
    databaseURL: "https://nearmeapp-11.firebaseio.com",
    projectId: "nearmeapp-11",
    storageBucket: "nearmeapp-11.appspot.com",
    messagingSenderId: "1051521831160"
  });

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    CancionPopoverPage,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ImgFallbackModule,
    LazyLoadImageModule,
    HttpModule,
    HttpClientModule,
    StarRatingModule.forRoot(),
    IonicImageLoader.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient,Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CancionPopoverPage,


  ],
  providers: [
  // GooglePlaces,
  GoogleMaps,
  GoogleMaps1,
  Locations,
  CityUpdate,
  UpdateListReview,
GeoList,
  UpdateList,
  HomeService,
  HomeServiceList,
  HomeServiceListReview,
  Rent,
  RentList,
  RentListReview, 
  JobsListReview,
  SaleListReview,
  Jobs,
  Sale,
  SaleList,
  CancionPopoverPage,
    Category,
    Place,
    LocationTracker,
    BackgroundGeolocation1,
    JobsList,
    ParseFile,
    Review,
    LocalStorage,
    User,
    Slide,
    Geofence,
    Post,
    GoogleMaps,
    BackgroundGeolocation,
    Installation,
    WindowRef,
    StatusBar,
    SplashScreen,
    Geolocation,
    LaunchNavigator,
    CallNumber,
    InAppBrowser,
    SocialSharing,
    Camera,
    Firebase,
    GoogleAnalytics,
    AdMobFree,
    AppVersion,
    HeaderColor,
    BrowserTab,
    Facebook,
    File,
    Preference, MapStyle, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
