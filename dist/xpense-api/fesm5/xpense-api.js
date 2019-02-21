import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule, Injectable, Inject, defineInjectable, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var APP_CONFIG = new InjectionToken("app.config");
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
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        HttpClientModule
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
            .pipe(map(function (data) { return data.map(function (inst) { return CategoryItemVM.from(inst); }); }));
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
            .pipe(map(function (data) { return CategoryItemVM.from(data); }));
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
            .pipe(map(function (data) { return CategoryItemVM.from(data); }));
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
            .pipe(map(function (data) { return CategoryItemVM.from(data); }));
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
            .pipe(map(function () { }));
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
            .pipe(map(function () { }));
    };
    CategoryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CategoryService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG,] }] }
    ]; };
    /** @nocollapse */ CategoryService.ngInjectableDef = defineInjectable({ factory: function CategoryService_Factory() { return new CategoryService(inject(HttpClient), inject(APP_CONFIG)); }, token: CategoryService, providedIn: "root" });
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
            .pipe(map(function (data) { return data.map(function (inst) { return ExpenseItemVM.from(inst); }); }));
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
            .pipe(map(function (data) { return ExpenseItemVM.from(data); }));
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
            .pipe(map(function (data) { return ExpenseItemVM.from(data); }));
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
            .pipe(map(function (data) { return ExpenseItemVM.from(data); }));
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
            .pipe(map(function () { }));
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
            .pipe(map(function () { }));
    };
    ExpenseService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ExpenseService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG,] }] }
    ]; };
    /** @nocollapse */ ExpenseService.ngInjectableDef = defineInjectable({ factory: function ExpenseService_Factory() { return new ExpenseService(inject(HttpClient), inject(APP_CONFIG)); }, token: ExpenseService, providedIn: "root" });
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

export { XpenseApiModule, CategoryItem, CategoryItemVM, ExpenseItem, ExpenseItemVM, CategoryService, ExpenseService, APP_CONFIG as ɵa, AppConfig as ɵc };

//# sourceMappingURL=xpense-api.js.map