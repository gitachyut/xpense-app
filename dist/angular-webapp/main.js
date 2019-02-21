(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/xpense-api/fesm5/xpense-api.js":
/*!*********************************************!*\
  !*** ./dist/xpense-api/fesm5/xpense-api.js ***!
  \*********************************************/
/*! exports provided: XpenseApiModule, CategoryItem, CategoryItemVM, ExpenseItem, ExpenseItemVM, CategoryService, ExpenseService, ɵa, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XpenseApiModule", function() { return XpenseApiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItem", function() { return CategoryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryItemVM", function() { return CategoryItemVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseItem", function() { return ExpenseItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseItemVM", function() { return ExpenseItemVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseService", function() { return ExpenseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AppConfig; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("app.config");
/** @type {?} */
var AppConfig = {
    apiEndpoint: "https://gentle-shelf-74899.herokuapp.com/api/",
    categoriesApi: "categories/",
    expensesApi: "items/"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = AppConfig;
var XpenseApiModule = /** @class */ (function () {
    function XpenseApiModule() {
    }
    XpenseApiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                    ],
                    exports: [],
                    providers: [
                        { provide: APP_CONFIG, useValue: ɵ0 }
                    ]
                },] }
    ];
    return XpenseApiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryItem = /** @class */ (function () {
    function CategoryItem(label, description) {
        this.label = label;
        this.description = description;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    CategoryItem.from = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return new CategoryItem(data.label, data.description);
    };
    return CategoryItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryItemVM = /** @class */ (function () {
    function CategoryItemVM(id, label, description, _createdOn, _updatedOn) {
        this.id = id;
        this.label = label;
        this.description = description;
        this._createdOn = _createdOn;
        this._updatedOn = _updatedOn;
        if (!id || !label)
            throw new TypeError("required fields id and label are missing");
    }
    Object.defineProperty(CategoryItemVM.prototype, "createdOn", {
        get: /**
         * @return {?}
         */
        function () { return new Date(this._createdOn); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryItemVM.prototype, "updatedOn", {
        get: /**
         * @return {?}
         */
        function () { return new Date(this._updatedOn); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    CategoryItemVM.from = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        if (typeof data !== "object" || Array.isArray(data))
            throw new TypeError("Expected object but got " + typeof data);
        return new CategoryItemVM(data.id, data.label, data.description, data.createdOn, data.updatedOn);
    };
    return CategoryItemVM;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExpenseItem = /** @class */ (function () {
    function ExpenseItem(heading, cost, spendDate, categoryId, notes) {
        this.heading = heading;
        this.cost = cost;
        this.spendDate = spendDate;
        this.categoryId = categoryId;
        this.notes = notes;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ExpenseItem.from = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return new ExpenseItem(data.heading, data.cost, data.spendDate, data.categoryId, data.notes);
    };
    return ExpenseItem;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExpenseItemVM = /** @class */ (function () {
    function ExpenseItemVM(id, heading, cost, _spendDate, category, notes, _createdOn, _updatedOn) {
        this.id = id;
        this.heading = heading;
        this.cost = cost;
        this._spendDate = _spendDate;
        this.category = category;
        this.notes = notes;
        this._createdOn = _createdOn;
        this._updatedOn = _updatedOn;
    }
    Object.defineProperty(ExpenseItemVM.prototype, "spendDate", {
        get: /**
         * @return {?}
         */
        function () { return new Date(this._spendDate); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseItemVM.prototype, "createdOn", {
        get: /**
         * @return {?}
         */
        function () { return new Date(this._createdOn); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseItemVM.prototype, "updatedOn", {
        get: /**
         * @return {?}
         */
        function () { return new Date(this._updatedOn); },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} data
     * @return {?}
     */
    ExpenseItemVM.from = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return new ExpenseItemVM(data.id, data.heading, data.cost, data.spendDate, CategoryItemVM.from(data.category), data.notes, data.createdOn, data.updatedOn);
    };
    return ExpenseItemVM;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CategoryService = /** @class */ (function () {
    function CategoryService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._base_url = this._config.apiEndpoint;
        this._api_path = this._config.categoriesApi;
    }
    /**
     * @return {?}
     */
    CategoryService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this._http.get("" + this._base_url + this._api_path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.map(function (inst) { return CategoryItemVM.from(inst); }); }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CategoryService.prototype.get = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this._http.get("" + this._base_url + this._api_path + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return CategoryItemVM.from(data); }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CategoryService.prototype.create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this._http.post("" + this._base_url + this._api_path, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return CategoryItemVM.from(data); }));
    };
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    CategoryService.prototype.update = /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    function (id, data) {
        return this._http.put("" + this._base_url + this._api_path + id, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return CategoryItemVM.from(data); }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CategoryService.prototype.delete = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this._http.delete("" + this._base_url + this._api_path + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { }));
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    CategoryService.prototype.deleteMany = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        /** @type {?} */
        var idx = ids.map(function (id) { return id.toString(); });
        return this._http.delete("" + this._base_url + this._api_path + "batch", { params: { ids: idx } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { }));
    };
    CategoryService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CategoryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [APP_CONFIG,] }] }
    ]; };
    /** @nocollapse */ CategoryService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function CategoryService_Factory() { return new CategoryService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(APP_CONFIG)); }, token: CategoryService, providedIn: "root" });
    return CategoryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ExpenseService = /** @class */ (function () {
    function ExpenseService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._base_url = this._config.apiEndpoint;
        this._api_path = this._config.expensesApi;
    }
    /**
     * @return {?}
     */
    ExpenseService.prototype.getAll = /**
     * @return {?}
     */
    function () {
        return this._http.get("" + this._base_url + this._api_path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.map(function (inst) { return ExpenseItemVM.from(inst); }); }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ExpenseService.prototype.get = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this._http.get("" + this._base_url + this._api_path + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ExpenseItemVM.from(data); }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ExpenseService.prototype.create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this._http.post("" + this._base_url + this._api_path, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ExpenseItemVM.from(data); }));
    };
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    ExpenseService.prototype.update = /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    function (id, data) {
        return this._http.put("" + this._base_url + this._api_path + id, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return ExpenseItemVM.from(data); }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ExpenseService.prototype.delete = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this._http.delete("" + this._base_url + this._api_path + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { }));
    };
    /**
     * @param {?} ids
     * @return {?}
     */
    ExpenseService.prototype.deleteMany = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        /** @type {?} */
        var idx = ids.map(function (id) { return id.toString(); });
        return this._http.delete("" + this._base_url + this._api_path + "batch", { params: { ids: idx } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { }));
    };
    ExpenseService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ExpenseService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [APP_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ExpenseService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ExpenseService_Factory() { return new ExpenseService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(APP_CONFIG)); }, token: ExpenseService, providedIn: "root" });
    return ExpenseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=xpense-api.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/slide-in-out-animation.ts":
/*!******************************************************!*\
  !*** ./src/app/animations/slide-in-out-animation.ts ***!
  \******************************************************/
/*! exports provided: SlideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOutAnimation", function() { return SlideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var SlideInOutAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', "max-width": '0', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "max-width": '25%' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', opacity: 1 })),
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', "max-width": '25%', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ "max-width": '0' }))
            ]),
        ])
    ])
];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense/expense.component */ "./src/app/expense/expense.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");






var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'expenses',
        component: _expense_expense_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseComponent"]
    }, {
        path: 'categories',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-sidenav {\n    display: block;\n    height: calc(100% - 64px);\n}\n\nmat-progress-bar {\n    margin-top: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2lkZW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbn1cblxubWF0LXByb2dyZXNzLWJhciB7XG4gICAgbWFyZ2luLXRvcDogLTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-topnav (sideMenuToogled)=\"sidenav.toggleSideNav()\"></app-topnav>\n<mat-progress-bar *ngIf=\"$loading\" [color]=\"'accent'\" [mode]=\"'query'\"></mat-progress-bar>\n<app-sidenav #sidenav></app-sidenav>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loading-indicator/loading-indicator.service */ "./src/app/services/loading-indicator/loading-indicator.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_cdRef, _loadingIndicatorService) {
        this._cdRef = _cdRef;
        this._loadingIndicatorService = _loadingIndicatorService;
        this.$loading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loadingIndicatorService
            .onLoadingChanged
            .subscribe(function (isLoading) {
            _this.$loading = isLoading;
            _this._cdRef.detectChanges();
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicatorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_en_IN__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en-IN */ "./node_modules/@angular/common/locales/en-IN.js");
/* harmony import */ var _angular_common_locales_en_IN__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en_IN__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var xpense_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! xpense-api */ "./dist/xpense-api/fesm5/xpense-api.js");
/* harmony import */ var _ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ok-cancel-dialog/ok-cancel-dialog.component */ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./category-dialog/category-dialog.component */ "./src/app/category-dialog/category-dialog.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topnav/topnav.component */ "./src/app/topnav/topnav.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _expense_expense_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./expense/expense.component */ "./src/app/expense/expense.component.ts");
/* harmony import */ var _expense_dialog_expense_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./expense-dialog/expense-dialog.component */ "./src/app/expense-dialog/expense-dialog.component.ts");
/* harmony import */ var _services_loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/loading-indicator/loading-indicator.service */ "./src/app/services/loading-indicator/loading-indicator.service.ts");
/* harmony import */ var _services_loading_indicator_loading_indicator_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/loading-indicator/loading-indicator.interceptor */ "./src/app/services/loading-indicator/loading-indicator.interceptor.ts");























Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_en_IN__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_16__["TopnavComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _expense_expense_component__WEBPACK_IMPORTED_MODULE_19__["ExpenseComponent"],
                _expense_dialog_expense_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ExpenseDialogComponent"],
                _ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_12__["OkCancelDialogComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesComponent"],
                _category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CategoryDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                xpense_api__WEBPACK_IMPORTED_MODULE_11__["XpenseApiModule"]
            ],
            entryComponents: [
                _expense_dialog_expense_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ExpenseDialogComponent"],
                _category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CategoryDialogComponent"],
                _ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_12__["OkCancelDialogComponent"]
            ],
            providers: [
                _services_loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_21__["LoadingIndicatorService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
                    useValue: "en-IN"
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useFactory: function (service) { return new _services_loading_indicator_loading_indicator_interceptor__WEBPACK_IMPORTED_MODULE_22__["LoadingIndicatorInterceptor"](service); },
                    multi: true,
                    deps: [_services_loading_indicator_loading_indicator_service__WEBPACK_IMPORTED_MODULE_21__["LoadingIndicatorService"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\ntable th.mat-sort-header-sorted {\n    color: black;\n}\n\ntable th.mat-header-cell {\n    font-weight: bold;\n    font-size: 13px;\n}\n\n.align-flex-right {\n    margin-left: auto;\n}\n\nbutton.grey-btn {\n    color: #787878;\n}\n\n.small-icon {\n    font-size: 1.3rem;\n}\n\n.component-heading {\n    margin-bottom: 0;\n    color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG50YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmFsaWduLWZsZXgtcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5idXR0b24uZ3JleS1idG4ge1xuICAgIGNvbG9yOiAjNzg3ODc4O1xufVxuXG4uc21hbGwtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5jb21wb25lbnQtaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogIzY2NjY2Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\"\n    fxLayoutAlign.xs=\"start center\" fxLayoutGap.xs=\"0\">\n    <h4 class=\"mat-h2 component-heading\" *ngIf=\"!$sideNavOpen\" [@slideInOut] fxFlex=\"25%\">{{$currentComponent}}</h4>\n    <mat-form-field fxFlex=\"50%\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n    <button mat-icon-button class=\"grey-btn\" matTooltip=\"Refresh\" (click)=\"refreshView()\">\n      <mat-icon>refresh</mat-icon>\n    </button>\n    <button mat-icon-button class=\"grey-btn\" [disabled]=\"!$selection.hasValue()\" matTooltip=\"Deletes all selected items\"\n      (click)=\"onDeleteMultiple($selection)\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <button mat-raised-button color=\"primary\" class=\"align-flex-right\" matTooltip=\"Adds new category to the list\"\n      (click)=\"onAdd()\">\n      <mat-icon>add</mat-icon>\n      Category\n    </button>\n  </div>\n\n  <table mat-table [dataSource]=\"$dataSource\" matSort class=\"mat-elevation-z8\">\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef style=\"width:40px;\">\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"$selection.hasValue() && isAllSelected()\"\n          [indeterminate]=\"$selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? $selection.toggle(row) : null\" [checked]=\"$selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"label\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width:25%;\"> Title </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.label}} </td>\n    </ng-container>\n\n    <!-- Description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n    <!-- Date Column -->\n    <ng-container matColumnDef=\"updatedOn\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width:15%;\"> Last updated </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.updatedOn | date:'short'}} </td>\n    </ng-container>\n\n    <!-- Actions Column -->\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef style=\"width:100px;\"> Actions </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button class=\"grey-btn\" matTooltip=\"Edit this item\" (click)=\"onEdit(element)\">\n          <mat-icon [inline]=\"true\" class=\"small-icon\">edit</mat-icon>\n        </button>\n        <button mat-icon-button class=\"grey-btn\" matTooltip=\"Delete this item\" (click)=\"onDelete(element)\">\n          <mat-icon [inline]=\"true\" class=\"small-icon\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"$displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: $displayedColumns;\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category-dialog/category-dialog.component */ "./src/app/category-dialog/category-dialog.component.ts");
/* harmony import */ var _ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ok-cancel-dialog/ok-cancel-dialog.component */ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.ts");
/* harmony import */ var _services_app_navigation_app_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/app-navigation/app-navigation.service */ "./src/app/services/app-navigation/app-navigation.service.ts");
/* harmony import */ var xpense_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xpense-api */ "./dist/xpense-api/fesm5/xpense-api.js");
/* harmony import */ var _animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../animations/slide-in-out-animation */ "./src/app/animations/slide-in-out-animation.ts");










var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(_dialog, _appNavService, _cSvc, _snackBar) {
        this._dialog = _dialog;
        this._appNavService = _appNavService;
        this._cSvc = _cSvc;
        this._snackBar = _snackBar;
        this.$displayedColumns = ['select', 'label', 'description', 'updatedOn', 'actions'];
        this.$selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.$currentComponent = "";
        this.$sideNavOpen = true;
    }
    CategoriesComponent.prototype.refreshView = function () {
        var _this = this;
        this._cSvc.getAll().subscribe({
            next: function (data) {
                _this.$selection.clear();
                _this.$dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.$dataSource.sort = _this.$sort;
            },
            error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
        });
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$sideNavOpen = this._appNavService.appDrawerStatus == "open";
        this._navBarSubscription = this._appNavService.NavBarStatusChanged
            .subscribe(function (navBarStatus) {
            _this.$currentComponent = navBarStatus.activeRoute.title;
        });
        this._appNavService.NavBarOpenStarted.subscribe(function () { return _this.$sideNavOpen = true; });
        this._appNavService.NavBarCloseStarted.subscribe(function () { return _this.$sideNavOpen = false; });
        this.refreshView();
    };
    CategoriesComponent.prototype.ngOnDestroy = function () {
        this._navBarSubscription.unsubscribe();
    };
    CategoriesComponent.prototype.applyFilter = function (filterValue) {
        this.$dataSource.filter = filterValue.trim().toLowerCase();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    CategoriesComponent.prototype.isAllSelected = function () {
        var numSelected = this.$selection.selected.length;
        var numRows = this.$dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear $selection. */
    CategoriesComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.$selection.clear() :
            this.$dataSource.data.forEach(function (row) { return _this.$selection.select(row); });
    };
    CategoriesComponent.prototype.onAdd = function () {
        var _this = this;
        var dialogRef = this._dialog.open(_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CategoryDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._cSvc.create(result).subscribe({
                    next: function () {
                        _this._snackBar.open("Category item created!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
                });
            }
        });
    };
    CategoriesComponent.prototype.onEdit = function (item) {
        var _this = this;
        var dialogRef = this._dialog.open(_category_dialog_category_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CategoryDialogComponent"], { data: item });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._cSvc.update(item.id, result).subscribe({
                    next: function () {
                        _this._snackBar.open("Category item updated!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
                });
            }
        });
    };
    CategoriesComponent.prototype.onDelete = function (item) {
        var _this = this;
        var dialogRef = this._dialog.open(_ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_5__["OkCancelDialogComponent"], {
            data: {
                title: "Confirm delete",
                message: "Are you sure you want to delete this item?",
                okValue: true,
                cancelValue: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._cSvc.delete(item.id).subscribe({
                    next: function () {
                        _this._snackBar.open("Category item deleted!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function (err) {
                        if (err.status == 406)
                            _this._snackBar.open("Category item in use, cannot be deleted!", "I understand");
                        else
                            _this._snackBar.open("Some error occured!", "Got it :(");
                    }
                });
            }
        });
    };
    CategoriesComponent.prototype.onDeleteMultiple = function (items) {
        var _this = this;
        var dialogRef = this._dialog.open(_ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_5__["OkCancelDialogComponent"], {
            data: {
                title: "Confirm delete " + items.selected.length + " seletced",
                message: "Are you sure you want to delete these item(s)?",
                okValue: true,
                cancelValue: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._cSvc.deleteMany(items.selected.map(function (item) { return item.id; })).subscribe({
                    next: function () {
                        _this._snackBar.open("Category items deleted!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function (err) {
                        if (err.status == 406)
                            _this._snackBar.open("Category item(s) in use, cannot be deleted!", "I understand");
                        else
                            _this._snackBar.open("Some error occured!", "Got it :(");
                    }
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CategoriesComponent.prototype, "$sort", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            animations: [
                _animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_8__["SlideInOutAnimation"]
            ],
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_app_navigation_app_navigation_service__WEBPACK_IMPORTED_MODULE_6__["AppNavigationService"],
            xpense_api__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category-dialog/category-dialog.component.css":
/*!***************************************************************!*\
  !*** ./src/app/category-dialog/category-dialog.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    padding-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktZGlhbG9nL2NhdGVnb3J5LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnktZGlhbG9nL2NhdGVnb3J5LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/category-dialog/category-dialog.component.html":
/*!****************************************************************!*\
  !*** ./src/app/category-dialog/category-dialog.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"$categoryForm\" (ngSubmit)=\"onSave()\">\n  <h2 mat-dialog-title>\n    <span [innerText]=\"$editMode ? 'Edit category' : 'Add category'\"></span>\n    <mat-divider></mat-divider>\n  </h2>\n\n  <mat-dialog-content class=\"mat-typography\">\n    <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center space-between\" fxLayoutGap=\"10px\">\n      <mat-form-field fxFlex=\"100%\">\n        <input matInput placeholder=\"Title\" formControlName=\"label\" required>\n        <mat-hint>The title of this category?</mat-hint>\n        <mat-error *ngIf=\"label.hasError('required')\">\n          Title is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center space-between\" fxLayoutGap=\"10px\">\n      <mat-form-field fxFlex=\"100%\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\n        <mat-hint>Any description?</mat-hint>\n      </mat-form-field>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-button type=\"submit\" cdkFocusInitial>Save</button>\n  </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/category-dialog/category-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/category-dialog/category-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: CategoryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDialogComponent", function() { return CategoryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var xpense_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xpense-api */ "./dist/xpense-api/fesm5/xpense-api.js");





var CategoryDialogComponent = /** @class */ (function () {
    function CategoryDialogComponent(_fb, _dialogRef, _categoryItem) {
        this._fb = _fb;
        this._dialogRef = _dialogRef;
        this._categoryItem = _categoryItem;
        this.$editMode = false;
    }
    Object.defineProperty(CategoryDialogComponent.prototype, "label", {
        get: function () { return this.$categoryForm.get('label'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryDialogComponent.prototype, "description", {
        get: function () { return this.$categoryForm.get('description'); },
        enumerable: true,
        configurable: true
    });
    CategoryDialogComponent.prototype.ngOnInit = function () {
        this.$categoryForm = this._fb.group({
            label: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: [''],
        });
        if (this._categoryItem) {
            this.$editMode = true;
            this.$categoryForm.patchValue(this._categoryItem);
        }
    };
    CategoryDialogComponent.prototype.onSave = function () {
        this.$categoryForm.updateValueAndValidity();
        if (this.$categoryForm.valid) {
            this._dialogRef.close(xpense_api__WEBPACK_IMPORTED_MODULE_4__["CategoryItem"].from(this.$categoryForm.value));
        }
    };
    CategoryDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-dialog',
            template: __webpack_require__(/*! ./category-dialog.component.html */ "./src/app/category-dialog/category-dialog.component.html"),
            styles: [__webpack_require__(/*! ./category-dialog.component.css */ "./src/app/category-dialog/category-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            xpense_api__WEBPACK_IMPORTED_MODULE_4__["CategoryItemVM"]])
    ], CategoryDialogComponent);
    return CategoryDialogComponent;
}());



/***/ }),

/***/ "./src/app/expense-dialog/expense-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/expense-dialog/expense-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    padding-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS1kaWFsb2cvZXhwZW5zZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2UtZGlhbG9nL2V4cGVuc2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/expense-dialog/expense-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/expense-dialog/expense-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"$expenseForm\" (ngSubmit)=\"onSave()\">\n  <h2 mat-dialog-title>\n    <span [innerText]=\"$editMode ? 'Edit expense' : 'Add expense'\"></span>\n    <mat-divider></mat-divider>\n  </h2>\n\n  <mat-dialog-content class=\"mat-typography\">\n    <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center space-between\" fxLayoutGap=\"10px\">\n      <mat-form-field fxFlex=\"100%\">\n        <input matInput placeholder=\"Title\" formControlName=\"heading\" required>\n        <mat-hint>Where did you spend the money?</mat-hint>\n        <mat-error *ngIf=\"heading.hasError('required')\">\n          Title is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\n      <mat-form-field fxFlex=\"50%\">\n        <input matInput placeholder=\"Amount\" type=\"number\" formControlName=\"cost\">\n        <span matPrefix>₹&nbsp;</span>\n        <mat-hint>How much?</mat-hint>\n        <mat-error *ngIf=\"cost.hasError('min') && !cost.hasError('required')\">\n          Amount must be greater than zero.\n        </mat-error>\n        <mat-error *ngIf=\"cost.hasError('required')\">\n          Amount is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field fxFlex=\"50%\">\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" formControlName=\"spendDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-hint>When did this happen?</mat-hint>\n        <mat-error *ngIf=\"spendDate.hasError('validdate')\">\n          Date is <strong>invalid</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center space-between\" fxLayoutGap=\"10px\">\n      <mat-form-field>\n        <mat-select placeholder=\"Category\" formControlName=\"categoryId\">\n          <mat-option [value]=\"category.id\" *ngFor=\"let category of $categories\">\n            {{ category.label }}\n          </mat-option>\n        </mat-select>\n        <mat-hint>Can you tell on what type exactly?</mat-hint>\n        <mat-error *ngIf=\"categoryId.hasError('required')\">\n          Please <strong>select</strong> a category\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field fxFlex=\"100%\">\n        <textarea matInput placeholder=\"Description\" formControlName=\"notes\"></textarea>\n        <mat-hint>Any notes to remember?</mat-hint>\n      </mat-form-field>\n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-button type=\"submit\" cdkFocusInitial>Save</button>\n  </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/expense-dialog/expense-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/expense-dialog/expense-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ExpenseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseDialogComponent", function() { return ExpenseDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_DateValidators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validators/DateValidators */ "./src/app/validators/DateValidators.ts");
/* harmony import */ var xpense_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xpense-api */ "./dist/xpense-api/fesm5/xpense-api.js");






var ExpenseDialogComponent = /** @class */ (function () {
    function ExpenseDialogComponent(_fb, _cSvc, _dialogRef, _expenseItem) {
        this._fb = _fb;
        this._cSvc = _cSvc;
        this._dialogRef = _dialogRef;
        this._expenseItem = _expenseItem;
        this.$editMode = false;
    }
    Object.defineProperty(ExpenseDialogComponent.prototype, "heading", {
        get: function () { return this.$expenseForm.get('heading'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseDialogComponent.prototype, "cost", {
        get: function () { return this.$expenseForm.get('cost'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseDialogComponent.prototype, "categoryId", {
        get: function () { return this.$expenseForm.get('categoryId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseDialogComponent.prototype, "spendDate", {
        get: function () { return this.$expenseForm.get('spendDate'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExpenseDialogComponent.prototype, "notes", {
        get: function () { return this.$expenseForm.get('notes'); },
        enumerable: true,
        configurable: true
    });
    ExpenseDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$expenseForm = this._fb.group({
            heading: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cost: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0)]],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            spendDate: ['', [_validators_DateValidators__WEBPACK_IMPORTED_MODULE_4__["DateValidators"].valid]],
            notes: [''],
        });
        this._cSvc.getAll().subscribe(function (data) {
            _this.$categories = data;
        });
        if (this._expenseItem) {
            this.$editMode = true;
            this.$expenseForm.patchValue(this._expenseItem);
            this.$expenseForm.patchValue({
                spendDate: new Date(this._expenseItem.spendDate),
                categoryId: this._expenseItem.category.id
            });
        }
    };
    ExpenseDialogComponent.prototype.onSave = function () {
        this.$expenseForm.updateValueAndValidity();
        if (this.$expenseForm.valid) {
            this._dialogRef.close(xpense_api__WEBPACK_IMPORTED_MODULE_5__["ExpenseItem"].from(this.$expenseForm.value));
        }
    };
    ExpenseDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense-dialog',
            template: __webpack_require__(/*! ./expense-dialog.component.html */ "./src/app/expense-dialog/expense-dialog.component.html"),
            styles: [__webpack_require__(/*! ./expense-dialog.component.css */ "./src/app/expense-dialog/expense-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            xpense_api__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            xpense_api__WEBPACK_IMPORTED_MODULE_5__["ExpenseItemVM"]])
    ], ExpenseDialogComponent);
    return ExpenseDialogComponent;
}());



/***/ }),

/***/ "./src/app/expense/expense.component.css":
/*!***********************************************!*\
  !*** ./src/app/expense/expense.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n\ntable th.mat-sort-header-sorted {\n    color: black;\n}\n\ntable th.mat-header-cell {\n    font-weight: bold;\n    font-size: 13px;\n}\n\n.align-flex-right {\n    margin-left: auto;\n}\n\nbutton.grey-btn {\n    color: #787878;\n}\n\n.small-icon {\n    font-size: 1.3rem;\n}\n\n.no-mar-btm {\n    margin-bottom: 0;\n}\n\n.no-mar-top {\n    margin-top: 0;\n}\n\ntd.pad-rt-20 {\n    padding-right: 20px !important;\n}\n\ntr.mat-footer-row {\n    font-weight: bold;\n}\n\n.component-heading {\n    margin-bottom: 0;\n    color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZS9leHBlbnNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZXhwZW5zZS9leHBlbnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxudGFibGUgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5hbGlnbi1mbGV4LXJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuYnV0dG9uLmdyZXktYnRuIHtcbiAgICBjb2xvcjogIzc4Nzg3ODtcbn1cblxuLnNtYWxsLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4ubm8tbWFyLWJ0bSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5vLW1hci10b3Age1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbnRkLnBhZC1ydC0yMCB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21wb25lbnQtaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBjb2xvcjogIzY2NjY2Njtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/expense/expense.component.html":
/*!************************************************!*\
  !*** ./src/app/expense/expense.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\" fxLayout.xs=\"column\"\n    fxLayoutAlign.xs=\"start center\" fxLayoutGap.xs=\"0\">\n    <h4 class=\"mat-h2 component-heading\" *ngIf=\"!$sideNavOpen\" [@slideInOut] fxFlex=\"25%\">{{$currentComponent}}</h4>\n    <mat-form-field fxFlex=\"50%\">\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n    </mat-form-field>\n    <button mat-icon-button class=\"grey-btn\" matTooltip=\"Refresh\" (click)=\"refreshView()\">\n      <mat-icon>refresh</mat-icon>\n    </button>\n    <button mat-icon-button class=\"grey-btn\" [disabled]=\"!$selection.hasValue()\" matTooltip=\"Deletes all selected items\"\n      (click)=\"onDeleteMultiple($selection)\">\n      <mat-icon>delete</mat-icon>\n    </button>\n    <button mat-raised-button color=\"primary\" class=\"align-flex-right\" matTooltip=\"Adds new expense to the list\"\n      (click)=\"onAdd()\">\n      <mat-icon>add</mat-icon>\n      Expense\n    </button>\n  </div>\n\n  <table mat-table [dataSource]=\"$dataSource\" matSort class=\"mat-elevation-z8\">\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef style=\"width:40px;\">\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"$selection.hasValue() && isAllSelected()\"\n          [indeterminate]=\"$selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? $selection.toggle(row) : null\" [checked]=\"$selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n      <td mat-footer-cell *matFooterCellDef align=\"right\" colspan=\"2\" class=\"pad-rt-20\"> Items : </td>\n    </ng-container>\n\n    <!-- Date Column -->\n    <ng-container matColumnDef=\"spendDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width:15%;\"> Expense date </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.spendDate | date:'shortDate'}} </td>\n    </ng-container>\n\n    <!-- Title & Description Column -->\n    <ng-container matColumnDef=\"heading\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title & Description</th>\n      <td mat-cell *matCellDef=\"let element\">\n        <p class=\"mat-body-1 no-mar-btm\">\n          {{element.heading}}\n        </p>\n        <p class=\"mat-caption no-mar-top\">\n          {{element.notes}}\n        </p>\n      </td>\n      <td mat-footer-cell *matFooterCellDef align=\"left\">\n        {{ $dataSource && $dataSource.data ? $dataSource.data.length : 0 }}\n      </td>\n    </ng-container>\n\n    <!-- Category Column -->\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width:15%;\"> Category </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.category.label}} </td>\n      <td mat-footer-cell *matFooterCellDef align=\"right\" class=\"pad-rt-20\"> Total : </td>\n    </ng-container>\n\n    <!-- Amount Column -->\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header style=\"width:10%;\"> Amount </th>\n      <!-- <td mat-cell *matCellDef=\"let element\" align=\"right\" class=\"pad-rt-20\">₹ {{ element.cost | number:'1.2-2'}}</td> -->\n      <td mat-cell *matCellDef=\"let element\" align=\"right\" class=\"pad-rt-20\">{{ element.cost | currency:'INR' }}</td>\n      <td mat-footer-cell *matFooterCellDef align=\"right\" class=\"pad-rt-20\">\n        {{ getTotalExpense() | currency:'INR' }}\n      </td>\n    </ng-container>\n\n    <!-- Actions Column -->\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef style=\"width:100px;\"> Actions </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-icon-button class=\"grey-btn\" matTooltip=\"Edit this item\" (click)=\"onEdit(element)\">\n          <mat-icon [inline]=\"true\" class=\"small-icon\">edit</mat-icon>\n        </button>\n        <button mat-icon-button class=\"grey-btn\" matTooltip=\"Delete this item\" (click)=\"onDelete(element)\">\n          <mat-icon [inline]=\"true\" class=\"small-icon\">delete</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"$displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: $displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"$displayedFooterColumns;\"></tr>\n\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/expense/expense.component.ts":
/*!**********************************************!*\
  !*** ./src/app/expense/expense.component.ts ***!
  \**********************************************/
/*! exports provided: ExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseComponent", function() { return ExpenseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _expense_dialog_expense_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expense-dialog/expense-dialog.component */ "./src/app/expense-dialog/expense-dialog.component.ts");
/* harmony import */ var _ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ok-cancel-dialog/ok-cancel-dialog.component */ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.ts");
/* harmony import */ var _services_app_navigation_app_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/app-navigation/app-navigation.service */ "./src/app/services/app-navigation/app-navigation.service.ts");
/* harmony import */ var xpense_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! xpense-api */ "./dist/xpense-api/fesm5/xpense-api.js");
/* harmony import */ var _animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../animations/slide-in-out-animation */ "./src/app/animations/slide-in-out-animation.ts");










var ExpenseComponent = /** @class */ (function () {
    function ExpenseComponent(_dialog, _appNavService, _eSvc, _snackBar) {
        this._dialog = _dialog;
        this._appNavService = _appNavService;
        this._eSvc = _eSvc;
        this._snackBar = _snackBar;
        this.$displayedColumns = ['select', 'spendDate', 'heading', 'category', 'cost', 'actions'];
        this.$displayedFooterColumns = ['select', 'heading', 'category', 'cost'];
        this.$selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.$currentComponent = "";
        this.$sideNavOpen = true;
    }
    ExpenseComponent.prototype.refreshView = function () {
        var _this = this;
        this._eSvc.getAll().subscribe({
            next: function (data) {
                _this.$selection.clear();
                _this.$dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
                _this.$dataSource.sort = _this.$sort;
            },
            error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
        });
    };
    ExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$sideNavOpen = this._appNavService.appDrawerStatus == "open";
        this._navBarSubscription = this._appNavService.NavBarStatusChanged
            .subscribe(function (navBarStatus) {
            _this.$currentComponent = navBarStatus.activeRoute.title;
        });
        this._appNavService.NavBarOpenStarted.subscribe(function () { return _this.$sideNavOpen = true; });
        this._appNavService.NavBarCloseStarted.subscribe(function () { return _this.$sideNavOpen = false; });
        this.refreshView();
    };
    ExpenseComponent.prototype.ngOnDestroy = function () {
        this._navBarSubscription.unsubscribe();
    };
    ExpenseComponent.prototype.applyFilter = function (filterValue) {
        this.$dataSource.filter = filterValue.trim().toLowerCase();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ExpenseComponent.prototype.isAllSelected = function () {
        var numSelected = this.$selection.selected.length;
        var numRows = this.$dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear $selection. */
    ExpenseComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.$selection.clear() :
            this.$dataSource.data.forEach(function (row) { return _this.$selection.select(row); });
    };
    ExpenseComponent.prototype.getTotalExpense = function () {
        if (!this.$dataSource)
            return 0;
        return this.$dataSource.data.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    ExpenseComponent.prototype.onAdd = function () {
        var _this = this;
        var dialogRef = this._dialog.open(_expense_dialog_expense_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseDialogComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._eSvc.create(result).subscribe({
                    next: function () {
                        _this._snackBar.open("Expense item created!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
                });
            }
        });
    };
    ExpenseComponent.prototype.onEdit = function (item) {
        var _this = this;
        var dialogRef = this._dialog.open(_expense_dialog_expense_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseDialogComponent"], { data: item });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._eSvc.update(item.id, result).subscribe({
                    next: function () {
                        _this._snackBar.open("Expense item updated!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
                });
            }
        });
    };
    ExpenseComponent.prototype.onDelete = function (item) {
        var _this = this;
        var dialogRef = this._dialog.open(_ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_5__["OkCancelDialogComponent"], {
            data: {
                title: "Confirm delete",
                message: "Are you sure you want to delete this item?",
                okValue: true,
                cancelValue: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._eSvc.delete(item.id).subscribe({
                    next: function () {
                        _this._snackBar.open("Expense item deleted!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
                });
            }
        });
    };
    ExpenseComponent.prototype.onDeleteMultiple = function (items) {
        var _this = this;
        var dialogRef = this._dialog.open(_ok_cancel_dialog_ok_cancel_dialog_component__WEBPACK_IMPORTED_MODULE_5__["OkCancelDialogComponent"], {
            data: {
                title: "Confirm delete " + items.selected.length + " seletced",
                message: "Are you sure you want to delete these item(s)?",
                okValue: true,
                cancelValue: false
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this._eSvc.deleteMany(items.selected.map(function (item) { return item.id; })).subscribe({
                    next: function () {
                        _this._snackBar.open("Expense items deleted!", "Okay", { duration: 2000, });
                        _this.refreshView();
                    },
                    error: function () { return _this._snackBar.open("Some error occured!", "Got it :("); }
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ExpenseComponent.prototype, "$sort", void 0);
    ExpenseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expense',
            template: __webpack_require__(/*! ./expense.component.html */ "./src/app/expense/expense.component.html"),
            animations: [
                _animations_slide_in_out_animation__WEBPACK_IMPORTED_MODULE_8__["SlideInOutAnimation"]
            ],
            styles: [__webpack_require__(/*! ./expense.component.css */ "./src/app/expense/expense.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_app_navigation_app_navigation_service__WEBPACK_IMPORTED_MODULE_6__["AppNavigationService"],
            xpense_api__WEBPACK_IMPORTED_MODULE_7__["ExpenseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ExpenseComponent);
    return ExpenseComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Install Angular</h2>\n<div class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n    Angular is itself written in TypeScript. It implements core and optional functionality as a\n    set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n    context for components. NgModules collect related code into functional sets; an Angular app is\n    defined by a set of NgModules. An app always has at least a root module that enables\n    bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n    modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n    Service providers can be injected into components as dependencies, making your code modular,\n    reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n    provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n    template combines ordinary HTML with Angular directives and binding markup that allow Angular\n    to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n    to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n    the Router service to help you define navigation paths among views. The router provides\n    sophisticated in-browser navigational capabilities.</p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/ok-cancel-dialog/ok-cancel-dialog.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29rLWNhbmNlbC1kaWFsb2cvb2stY2FuY2VsLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ok-cancel-dialog/ok-cancel-dialog.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  <span [innerText]=\"$data.title\"></span>\n  <mat-divider></mat-divider>\n</h2>\n\n<mat-dialog-content class=\"mat-typography\">\n  <h4 [innerText]=\"$data.message\"></h4>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"$data.cancelValue\" cdkFocusInitial>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"$data.okValue\">Ok</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ok-cancel-dialog/ok-cancel-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: OkCancelDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkCancelDialogComponent", function() { return OkCancelDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var OkCancelDialogComponent = /** @class */ (function () {
    function OkCancelDialogComponent(_dialogRef, $data) {
        this._dialogRef = _dialogRef;
        this.$data = $data;
    }
    OkCancelDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ok-cancel-dialog',
            template: __webpack_require__(/*! ./ok-cancel-dialog.component.html */ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.html"),
            styles: [__webpack_require__(/*! ./ok-cancel-dialog.component.css */ "./src/app/ok-cancel-dialog/ok-cancel-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], OkCancelDialogComponent);
    return OkCancelDialogComponent;
}());



/***/ }),

/***/ "./src/app/services/app-navigation/app-navigation.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/app-navigation/app-navigation.service.ts ***!
  \*******************************************************************/
/*! exports provided: NavBarStatus, AppRoute, AppNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarStatus", function() { return NavBarStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoute", function() { return AppRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppNavigationService", function() { return AppNavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NavBarStatus = /** @class */ (function () {
    function NavBarStatus(appDrawerStatus, activeRoute) {
        this.appDrawerStatus = appDrawerStatus;
        this.activeRoute = activeRoute;
    }
    return NavBarStatus;
}());

var AppRoute = /** @class */ (function () {
    function AppRoute(route, title, icon) {
        this.route = route;
        this.title = title;
        this.icon = icon;
    }
    return AppRoute;
}());

var AppNavigationService = /** @class */ (function () {
    function AppNavigationService(_router) {
        var _this = this;
        this._router = _router;
        this._routes = [
            new AppRoute("", "Home", "home"),
            new AppRoute("categories", "Categories", "grain"),
            new AppRoute("expenses", "Expenses", "attach_money"),
            new AppRoute("reports", "Reports", "receipt")
        ];
        this._activeRoute = null;
        this._appDrawerStatus = "open";
        this.NavBarOpenStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NavBarOpenFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NavBarCloseStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NavBarCloseFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.NavBarStatusChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new NavBarStatus(this.appDrawerStatus, this.activeRoute));
        this._router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (_) {
            var rawUrl = _.url.substring(1);
            _this._activeRoute = _this.routes.find(function (route) { return route.route == rawUrl; });
            _this.notify();
        });
    }
    Object.defineProperty(AppNavigationService.prototype, "routes", {
        get: function () { return this._routes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppNavigationService.prototype, "activeRoute", {
        get: function () { return this._activeRoute; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppNavigationService.prototype, "appDrawerStatus", {
        get: function () { return this._appDrawerStatus; },
        enumerable: true,
        configurable: true
    });
    AppNavigationService.prototype.onSideNavToggled = function (status) {
        this._appDrawerStatus = status;
        if (status == "open")
            this.NavBarOpenFinished.emit();
        if (status == "close")
            this.NavBarCloseFinished.emit();
        this.notify();
    };
    AppNavigationService.prototype.onSideNavOpenStart = function () {
        this.NavBarOpenStarted.emit();
    };
    AppNavigationService.prototype.onSideNavCloseStart = function () {
        this.NavBarCloseStarted.emit();
    };
    AppNavigationService.prototype.notify = function () {
        this.NavBarStatusChanged.next(new NavBarStatus(this.appDrawerStatus, this.activeRoute));
    };
    AppNavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppNavigationService);
    return AppNavigationService;
}());



/***/ }),

/***/ "./src/app/services/loading-indicator/loading-indicator.interceptor.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/loading-indicator/loading-indicator.interceptor.ts ***!
  \*****************************************************************************/
/*! exports provided: LoadingIndicatorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorInterceptor", function() { return LoadingIndicatorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-indicator.service */ "./src/app/services/loading-indicator/loading-indicator.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LoadingIndicatorInterceptor = /** @class */ (function () {
    function LoadingIndicatorInterceptor(_loadingIndicatorService) {
        this._loadingIndicatorService = _loadingIndicatorService;
    }
    LoadingIndicatorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        // emit onStarted event before request execution
        this._loadingIndicatorService.onStarted(req);
        return next
            .handle(req)
            // emit onFinished event after request execution
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () { return _this._loadingIndicatorService.onFinished(req); }));
    };
    LoadingIndicatorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__["LoadingIndicatorService"]])
    ], LoadingIndicatorInterceptor);
    return LoadingIndicatorInterceptor;
}());



/***/ }),

/***/ "./src/app/services/loading-indicator/loading-indicator.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/loading-indicator/loading-indicator.service.ts ***!
  \*************************************************************************/
/*! exports provided: LoadingIndicatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorService", function() { return LoadingIndicatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingIndicatorService = /** @class */ (function () {
    function LoadingIndicatorService() {
        this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Stores all currently active requests
         */
        this._requests = [];
    }
    /**
     * Adds request to the storage and notifies observers
     */
    LoadingIndicatorService.prototype.onStarted = function (req) {
        this._requests.push(req);
        this.notify();
    };
    /**
     * Removes request from the storage and notifies observers
     */
    LoadingIndicatorService.prototype.onFinished = function (req) {
        var index = this._requests.indexOf(req);
        if (index !== -1) {
            this._requests.splice(index, 1);
        }
        this.notify();
    };
    /**
     * Notifies observers about whether there are any requests on fly
     */
    LoadingIndicatorService.prototype.notify = function () {
        this.onLoadingChanged.emit(this._requests.length !== 0);
    };
    LoadingIndicatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LoadingIndicatorService);
    return LoadingIndicatorService;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\n    height: 100%;\n}\n\nmat-sidenav-container mat-sidenav {\n    width: 300px;\n}\n\nmat-list-item mat-icon {\n    padding: 0 14px !important;\n    color: #555555;\n}\n\nmat-list-item mat-icon:last-child {\n    margin-left: auto;\n}\n\nmat-list-item.activeComponent {\n    background-color: #e8f0fe !important;\n}\n\n:host mat-list-item /deep/ .mat-list-item-content {\n    padding: 0!important;\n}\n\nmat-list-item .activeIndicator {\n    order: -1;\n    display: block;\n    height: 100%;\n    width: 8px;\n    background-color: transparent;\n    transition: background-color 300ms ease-out;\n}\n\nmat-list-item.activeComponent .activeIndicator {\n    background-color: #3f51b5;\n}\n\nmat-sidenav-content {\n    padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLDZCQUE2QjtJQUM3QiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYtY29udGFpbmVyIG1hdC1zaWRlbmF2IHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbm1hdC1saXN0LWl0ZW0gbWF0LWljb24ge1xuICAgIHBhZGRpbmc6IDAgMTRweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xufVxuXG5tYXQtbGlzdC1pdGVtIG1hdC1pY29uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5tYXQtbGlzdC1pdGVtLmFjdGl2ZUNvbXBvbmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjBmZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCBtYXQtbGlzdC1pdGVtIC9kZWVwLyAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcbn1cblxubWF0LWxpc3QtaXRlbSAuYWN0aXZlSW5kaWNhdG9yIHtcbiAgICBvcmRlcjogLTE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLW91dDtcbn1cblxubWF0LWxpc3QtaXRlbS5hY3RpdmVDb21wb25lbnQgLmFjdGl2ZUluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [hasBackdrop]=\"false\">\n  <mat-sidenav [mode]=\"'side'\" [opened]=\"$appDrawerOpened\">\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let $route of $routes\" [routerLink]=\"$route.route\" routerLinkActive=\"activeComponent\"\n        [routerLinkActiveOptions]=\"{exact: true}\" #$rla=\"routerLinkActive\">\n        <div class=\"activeIndicator\"></div>\n        <mat-icon matListIcon>{{$route.icon}}</mat-icon>\n        <span [innerText]=\"$route.title\"></span>\n        <mat-icon *ngIf=\"$rla.isActive\">chevron_right</mat-icon>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_app_navigation_app_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app-navigation/app-navigation.service */ "./src/app/services/app-navigation/app-navigation.service.ts");




var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(_appNavService) {
        this._appNavService = _appNavService;
        this.$routes = _appNavService.routes;
        this.$appDrawerOpened = _appNavService.appDrawerStatus == "open";
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sidenavComponent.openedChange.subscribe(function (x) {
            _this._appNavService.onSideNavToggled(x ? "open" : "close");
        });
        this._sidenavComponent.closedStart.subscribe(function () {
            _this._appNavService.onSideNavCloseStart();
        });
        this._sidenavComponent.openedStart.subscribe(function () {
            _this._appNavService.onSideNavOpenStart();
        });
    };
    SidenavComponent.prototype.toggleSideNav = function () {
        this.$appDrawerOpened = !this.$appDrawerOpened;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], SidenavComponent.prototype, "_sidenavComponent", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_navigation_app_navigation_service__WEBPACK_IMPORTED_MODULE_3__["AppNavigationService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/topnav/topnav.component.css":
/*!*********************************************!*\
  !*** ./src/app/topnav/topnav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width-spacer {\n    flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wbmF2L3RvcG5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWR0aC1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/*!**********************************************!*\
  !*** ./src/app/topnav/topnav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-icon-button (click)=\"onSideMenuToogled()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <a mat-button routerLink=\"\">\n    <mat-icon>monetization_on</mat-icon>\n    XPense\n  </a>\n  <span class=\"width-spacer\"></span>\n  <a mat-button routerLink=\"\">\n    <mat-icon class=\"fab fa-github\" aria-hidden=\"true\"></mat-icon>\n    GitHub\n  </a>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/topnav/topnav.component.ts":
/*!********************************************!*\
  !*** ./src/app/topnav/topnav.component.ts ***!
  \********************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopnavComponent = /** @class */ (function () {
    function TopnavComponent() {
        this.sideMenuToogled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent.prototype.onSideMenuToogled = function () {
        this.sideMenuToogled.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TopnavComponent.prototype, "sideMenuToogled", void 0);
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.css */ "./src/app/topnav/topnav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/validators/DateValidators.ts":
/*!**********************************************!*\
  !*** ./src/app/validators/DateValidators.ts ***!
  \**********************************************/
/*! exports provided: DateValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidators", function() { return DateValidators; });
var DateValidators = /** @class */ (function () {
    function DateValidators() {
    }
    DateValidators._valid = function () {
        return function (control) {
            var valid = false;
            if (Object.prototype.toString.call(control.value) === "[object Date]") {
                if (!isNaN(control.value.getTime())) {
                    valid = true;
                }
            }
            return valid ?
                null :
                { 'validdate': { value: control.value } };
        };
    };
    Object.defineProperty(DateValidators, "valid", {
        get: function () { return this._valid(); },
        enumerable: true,
        configurable: true
    });
    return DateValidators;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/achyutkrishnadeka/Workplace/pichainlabs.com/kpi-angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map