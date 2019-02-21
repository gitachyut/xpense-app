/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryItemVM } from '../../models/CategoryItemVM';
import { map } from 'rxjs/operators';
import { APP_CONFIG } from '../../app.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../app.config";
export class CategoryService {
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
/** @nocollapse */ CategoryService.ngInjectableDef = i0.defineInjectable({ factory: function CategoryService_Factory() { return new CategoryService(i0.inject(i1.HttpClient), i0.inject(i2.APP_CONFIG)); }, token: CategoryService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CategoryService.prototype._base_url;
    /**
     * @type {?}
     * @private
     */
    CategoryService.prototype._api_path;
    /**
     * @type {?}
     * @private
     */
    CategoryService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    CategoryService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3hwZW5zZS1hcGkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSzFELE1BQU0sT0FBTyxlQUFlOzs7OztJQUsxQixZQUFvQixLQUFpQixFQUE4QixPQUFtQjtRQUFsRSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQThCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1RixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxFQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQzthQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBa0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQzthQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVUsRUFBRSxJQUFrQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQzthQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDbkUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQWE7O1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzFGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVFEsVUFBVTs0Q0FldUIsTUFBTSxTQUFDLFVBQVU7Ozs7Ozs7O0lBSHpELG9DQUEwQjs7Ozs7SUFDMUIsb0NBQTBCOzs7OztJQUVkLGdDQUF5Qjs7Ozs7SUFBRSxrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDYXRlZ29yeUl0ZW1WTSB9IGZyb20gJy4uLy4uL21vZGVscy9DYXRlZ29yeUl0ZW1WTSc7XG5pbXBvcnQgeyBDYXRlZ29yeUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2F0ZWdvcnlJdGVtJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFQUF9DT05GSUcsIElBcHBDb25maWcgfSBmcm9tICcuLi8uLi9hcHAuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9iYXNlX3VybDogc3RyaW5nO1xuICBwcml2YXRlIF9hcGlfcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoQVBQX0NPTkZJRykgcHJpdmF0ZSBfY29uZmlnOiBJQXBwQ29uZmlnKSB7XG4gICAgdGhpcy5fYmFzZV91cmwgPSB0aGlzLl9jb25maWcuYXBpRW5kcG9pbnQ7XG4gICAgdGhpcy5fYXBpX3BhdGggPSB0aGlzLl9jb25maWcuY2F0ZWdvcmllc0FwaTtcbiAgfVxuXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPENhdGVnb3J5SXRlbVZNW10+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH1gKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBBcnJheTxDYXRlZ29yeUl0ZW1WTT4pID0+IGRhdGEubWFwKGluc3QgPT4gQ2F0ZWdvcnlJdGVtVk0uZnJvbShpbnN0KSkpKVxuICB9XG5cbiAgZ2V0KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPENhdGVnb3J5SXRlbVZNPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9JHtpZH1gKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBDYXRlZ29yeUl0ZW1WTSkgPT4gQ2F0ZWdvcnlJdGVtVk0uZnJvbShkYXRhKSkpXG4gIH1cblxuICBjcmVhdGUoZGF0YTogQ2F0ZWdvcnlJdGVtKTogT2JzZXJ2YWJsZTxDYXRlZ29yeUl0ZW1WTT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH1gLCBkYXRhKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBDYXRlZ29yeUl0ZW1WTSkgPT4gQ2F0ZWdvcnlJdGVtVk0uZnJvbShkYXRhKSkpXG4gIH1cblxuICB1cGRhdGUoaWQ6IG51bWJlciwgZGF0YTogQ2F0ZWdvcnlJdGVtKTogT2JzZXJ2YWJsZTxDYXRlZ29yeUl0ZW1WTT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHt0aGlzLl9iYXNlX3VybH0ke3RoaXMuX2FwaV9wYXRofSR7aWR9YCwgZGF0YSlcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogQ2F0ZWdvcnlJdGVtVk0pID0+IENhdGVnb3J5SXRlbVZNLmZyb20oZGF0YSkpKVxuICB9XG5cbiAgZGVsZXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH0ke2lkfWApXG4gICAgICAucGlwZShtYXAoKCkgPT4geyB9KSlcbiAgfVxuXG4gIGRlbGV0ZU1hbnkoaWRzOiBudW1iZXJbXSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGxldCBpZHggPSBpZHMubWFwKGlkID0+IGlkLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShgJHt0aGlzLl9iYXNlX3VybH0ke3RoaXMuX2FwaV9wYXRofWJhdGNoYCwgeyBwYXJhbXM6IHsgaWRzOiBpZHggfSB9KVxuICAgICAgLnBpcGUobWFwKCgpID0+IHsgfSkpXG4gIH1cbn1cbiJdfQ==