(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/common/http'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('xpense-api', ['exports', '@angular/common', '@angular/core', '@angular/common/http', 'rxjs/operators'], factory) :
    (factory((global['xpense-api'] = {}),global.ng.common,global.ng.core,global.ng.common.http,global.rxjs.operators));
}(this, (function (exports,common,i0,i1,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var APP_CONFIG = new i0.InjectionToken("app.config");
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
            { type: i0.NgModule, args: [{
                        declarations: [],
                        imports: [
                            common.CommonModule,
                            i1.HttpClientModule
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
             */ function () { return new Date(this._createdOn); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CategoryItemVM.prototype, "updatedOn", {
            get: /**
             * @return {?}
             */ function () { return new Date(this._updatedOn); },
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
             */ function () { return new Date(this._spendDate); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExpenseItemVM.prototype, "createdOn", {
            get: /**
             * @return {?}
             */ function () { return new Date(this._createdOn); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ExpenseItemVM.prototype, "updatedOn", {
            get: /**
             * @return {?}
             */ function () { return new Date(this._updatedOn); },
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
                    .pipe(operators.map(function (data) { return data.map(function (inst) { return CategoryItemVM.from(inst); }); }));
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
                    .pipe(operators.map(function (data) { return CategoryItemVM.from(data); }));
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
                    .pipe(operators.map(function (data) { return CategoryItemVM.from(data); }));
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
                    .pipe(operators.map(function (data) { return CategoryItemVM.from(data); }));
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
                    .pipe(operators.map(function () { }));
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
                    .pipe(operators.map(function () { }));
            };
        CategoryService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CategoryService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: undefined, decorators: [{ type: i0.Inject, args: [APP_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ CategoryService.ngInjectableDef = i0.defineInjectable({ factory: function CategoryService_Factory() { return new CategoryService(i0.inject(i1.HttpClient), i0.inject(APP_CONFIG)); }, token: CategoryService, providedIn: "root" });
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
                    .pipe(operators.map(function (data) { return data.map(function (inst) { return ExpenseItemVM.from(inst); }); }));
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
                    .pipe(operators.map(function (data) { return ExpenseItemVM.from(data); }));
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
                    .pipe(operators.map(function (data) { return ExpenseItemVM.from(data); }));
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
                    .pipe(operators.map(function (data) { return ExpenseItemVM.from(data); }));
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
                    .pipe(operators.map(function () { }));
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
                    .pipe(operators.map(function () { }));
            };
        ExpenseService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ExpenseService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: undefined, decorators: [{ type: i0.Inject, args: [APP_CONFIG,] }] }
            ];
        };
        /** @nocollapse */ ExpenseService.ngInjectableDef = i0.defineInjectable({ factory: function ExpenseService_Factory() { return new ExpenseService(i0.inject(i1.HttpClient), i0.inject(APP_CONFIG)); }, token: ExpenseService, providedIn: "root" });
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

    exports.XpenseApiModule = XpenseApiModule;
    exports.CategoryItem = CategoryItem;
    exports.CategoryItemVM = CategoryItemVM;
    exports.ExpenseItem = ExpenseItem;
    exports.ExpenseItemVM = ExpenseItemVM;
    exports.CategoryService = CategoryService;
    exports.ExpenseService = ExpenseService;
    exports.ɵa = APP_CONFIG;
    exports.ɵc = AppConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=xpense-api.umd.js.map