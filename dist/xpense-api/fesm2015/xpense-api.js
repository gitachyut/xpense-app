import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule, Injectable, Inject, defineInjectable, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let APP_CONFIG = new InjectionToken("app.config");
/** @type {?} */
const AppConfig = {
    apiEndpoint: "https://gentle-shelf-74899.herokuapp.com/api/",
    categoriesApi: "categories/",
    expensesApi: "items/"
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = AppConfig;
class XpenseApiModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryItem {
    /**
     * @param {?} label
     * @param {?} description
     */
    constructor(label, description) {
        this.label = label;
        this.description = description;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    static from(data) {
        return new CategoryItem(data.label, data.description);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryItemVM {
    /**
     * @param {?} id
     * @param {?} label
     * @param {?} description
     * @param {?} _createdOn
     * @param {?} _updatedOn
     */
    constructor(id, label, description, _createdOn, _updatedOn) {
        this.id = id;
        this.label = label;
        this.description = description;
        this._createdOn = _createdOn;
        this._updatedOn = _updatedOn;
        if (!id || !label)
            throw new TypeError(`required fields id and label are missing`);
    }
    /**
     * @return {?}
     */
    get createdOn() { return new Date(this._createdOn); }
    /**
     * @return {?}
     */
    get updatedOn() { return new Date(this._updatedOn); }
    /**
     * @param {?} data
     * @return {?}
     */
    static from(data) {
        if (typeof data !== "object" || Array.isArray(data))
            throw new TypeError(`Expected object but got ${typeof data}`);
        return new CategoryItemVM(data.id, data.label, data.description, data.createdOn, data.updatedOn);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExpenseItem {
    /**
     * @param {?} heading
     * @param {?} cost
     * @param {?} spendDate
     * @param {?} categoryId
     * @param {?} notes
     */
    constructor(heading, cost, spendDate, categoryId, notes) {
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
    static from(data) {
        return new ExpenseItem(data.heading, data.cost, data.spendDate, data.categoryId, data.notes);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExpenseItemVM {
    /**
     * @param {?} id
     * @param {?} heading
     * @param {?} cost
     * @param {?} _spendDate
     * @param {?} category
     * @param {?} notes
     * @param {?} _createdOn
     * @param {?} _updatedOn
     */
    constructor(id, heading, cost, _spendDate, category, notes, _createdOn, _updatedOn) {
        this.id = id;
        this.heading = heading;
        this.cost = cost;
        this._spendDate = _spendDate;
        this.category = category;
        this.notes = notes;
        this._createdOn = _createdOn;
        this._updatedOn = _updatedOn;
    }
    /**
     * @return {?}
     */
    get spendDate() { return new Date(this._spendDate); }
    /**
     * @return {?}
     */
    get createdOn() { return new Date(this._createdOn); }
    /**
     * @return {?}
     */
    get updatedOn() { return new Date(this._updatedOn); }
    /**
     * @param {?} data
     * @return {?}
     */
    static from(data) {
        return new ExpenseItemVM(data.id, data.heading, data.cost, data.spendDate, CategoryItemVM.from(data.category), data.notes, data.createdOn, data.updatedOn);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CategoryService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._base_url = this._config.apiEndpoint;
        this._api_path = this._config.categoriesApi;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this._http.get(`${this._base_url}${this._api_path}`)
            .pipe(map((data) => data.map(inst => CategoryItemVM.from(inst))));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    get(id) {
        return this._http.get(`${this._base_url}${this._api_path}${id}`)
            .pipe(map((data) => CategoryItemVM.from(data)));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        return this._http.post(`${this._base_url}${this._api_path}`, data)
            .pipe(map((data) => CategoryItemVM.from(data)));
    }
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    update(id, data) {
        return this._http.put(`${this._base_url}${this._api_path}${id}`, data)
            .pipe(map((data) => CategoryItemVM.from(data)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        return this._http.delete(`${this._base_url}${this._api_path}${id}`)
            .pipe(map(() => { }));
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    deleteMany(ids) {
        /** @type {?} */
        let idx = ids.map(id => id.toString());
        return this._http.delete(`${this._base_url}${this._api_path}batch`, { params: { ids: idx } })
            .pipe(map(() => { }));
    }
}
CategoryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CategoryService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG,] }] }
];
/** @nocollapse */ CategoryService.ngInjectableDef = defineInjectable({ factory: function CategoryService_Factory() { return new CategoryService(inject(HttpClient), inject(APP_CONFIG)); }, token: CategoryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExpenseService {
    /**
     * @param {?} _http
     * @param {?} _config
     */
    constructor(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._base_url = this._config.apiEndpoint;
        this._api_path = this._config.expensesApi;
    }
    /**
     * @return {?}
     */
    getAll() {
        return this._http.get(`${this._base_url}${this._api_path}`)
            .pipe(map((data) => data.map(inst => ExpenseItemVM.from(inst))));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    get(id) {
        return this._http.get(`${this._base_url}${this._api_path}${id}`)
            .pipe(map((data) => ExpenseItemVM.from(data)));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    create(data) {
        return this._http.post(`${this._base_url}${this._api_path}`, data)
            .pipe(map((data) => ExpenseItemVM.from(data)));
    }
    /**
     * @param {?} id
     * @param {?} data
     * @return {?}
     */
    update(id, data) {
        return this._http.put(`${this._base_url}${this._api_path}${id}`, data)
            .pipe(map((data) => ExpenseItemVM.from(data)));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    delete(id) {
        return this._http.delete(`${this._base_url}${this._api_path}${id}`)
            .pipe(map(() => { }));
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    deleteMany(ids) {
        /** @type {?} */
        let idx = ids.map(id => id.toString());
        return this._http.delete(`${this._base_url}${this._api_path}batch`, { params: { ids: idx } })
            .pipe(map(() => { }));
    }
}
ExpenseService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExpenseService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG,] }] }
];
/** @nocollapse */ ExpenseService.ngInjectableDef = defineInjectable({ factory: function ExpenseService_Factory() { return new ExpenseService(inject(HttpClient), inject(APP_CONFIG)); }, token: ExpenseService, providedIn: "root" });

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