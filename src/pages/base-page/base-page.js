import { TranslateService } from '@ngx-translate/core';
import { NavController, LoadingController, ToastController, NavParams, AlertController, MenuController } from 'ionic-angular';
var BasePage = /** @class */ (function () {
    function BasePage(injector) {
        this.loadingCtrl = injector.get(LoadingController);
        this.toastCtrl = injector.get(ToastController);
        this.navCtrl = injector.get(NavController);
        this.alertCtrl = injector.get(AlertController);
        this.navParams = injector.get(NavParams);
        this.translate = injector.get(TranslateService);
        var menu = injector.get(MenuController);
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
export { BasePage };
//# sourceMappingURL=base-page.js.map