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
    /** @nocollapse */ CategoryService.ngInjectableDef = i0.defineInjectable({ factory: function CategoryService_Factory() { return new CategoryService(i0.inject(i1.HttpClient), i0.inject(i2.APP_CONFIG)); }, token: CategoryService, providedIn: "root" });
    return CategoryService;
}());
export { CategoryService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3hwZW5zZS1hcGkvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc3RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRTFEO0lBUUUseUJBQW9CLEtBQWlCLEVBQThCLE9BQW1CO1FBQWxFLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBOEIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFXLENBQUM7YUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQTJCLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUMsQ0FBQTtJQUM1RixDQUFDOzs7OztJQUVELDZCQUFHOzs7O0lBQUgsVUFBSSxFQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFJLENBQUM7YUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQW9CLElBQUssT0FBQSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUMsQ0FBQTtJQUNuRSxDQUFDOzs7OztJQUVELGdDQUFNOzs7O0lBQU4sVUFBTyxJQUFrQjtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBVyxFQUFFLElBQUksQ0FBQzthQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBb0IsSUFBSyxPQUFBLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7Ozs7OztJQUVELGdDQUFNOzs7OztJQUFOLFVBQU8sRUFBVSxFQUFFLElBQWtCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBSSxFQUFFLElBQUksQ0FBQzthQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBb0IsSUFBSyxPQUFBLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQyxDQUFBO0lBQ25FLENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLEVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUksQ0FBQzthQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxHQUFhOztZQUNsQixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBYixDQUFhLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDMUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekIsQ0FBQzs7Z0JBMUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsVUFBVTtnREFldUIsTUFBTSxTQUFDLFVBQVU7OzswQkFoQjNEO0NBbURDLEFBM0NELElBMkNDO1NBeENZLGVBQWU7Ozs7OztJQUUxQixvQ0FBMEI7Ozs7O0lBQzFCLG9DQUEwQjs7Ozs7SUFFZCxnQ0FBeUI7Ozs7O0lBQUUsa0NBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlJdGVtVk0gfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2F0ZWdvcnlJdGVtVk0nO1xuaW1wb3J0IHsgQ2F0ZWdvcnlJdGVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NhdGVnb3J5SXRlbSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBUFBfQ09ORklHLCBJQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBwLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZV91cmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBpX3BhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KEFQUF9DT05GSUcpIHByaXZhdGUgX2NvbmZpZzogSUFwcENvbmZpZykge1xuICAgIHRoaXMuX2Jhc2VfdXJsID0gdGhpcy5fY29uZmlnLmFwaUVuZHBvaW50O1xuICAgIHRoaXMuX2FwaV9wYXRoID0gdGhpcy5fY29uZmlnLmNhdGVnb3JpZXNBcGk7XG4gIH1cblxuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxDYXRlZ29yeUl0ZW1WTVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9YClcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogQXJyYXk8Q2F0ZWdvcnlJdGVtVk0+KSA9PiBkYXRhLm1hcChpbnN0ID0+IENhdGVnb3J5SXRlbVZNLmZyb20oaW5zdCkpKSlcbiAgfVxuXG4gIGdldChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDYXRlZ29yeUl0ZW1WTT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHt0aGlzLl9iYXNlX3VybH0ke3RoaXMuX2FwaV9wYXRofSR7aWR9YClcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogQ2F0ZWdvcnlJdGVtVk0pID0+IENhdGVnb3J5SXRlbVZNLmZyb20oZGF0YSkpKVxuICB9XG5cbiAgY3JlYXRlKGRhdGE6IENhdGVnb3J5SXRlbSk6IE9ic2VydmFibGU8Q2F0ZWdvcnlJdGVtVk0+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9YCwgZGF0YSlcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogQ2F0ZWdvcnlJdGVtVk0pID0+IENhdGVnb3J5SXRlbVZNLmZyb20oZGF0YSkpKVxuICB9XG5cbiAgdXBkYXRlKGlkOiBudW1iZXIsIGRhdGE6IENhdGVnb3J5SXRlbSk6IE9ic2VydmFibGU8Q2F0ZWdvcnlJdGVtVk0+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wdXQoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH0ke2lkfWAsIGRhdGEpXG4gICAgICAucGlwZShtYXAoKGRhdGE6IENhdGVnb3J5SXRlbVZNKSA9PiBDYXRlZ29yeUl0ZW1WTS5mcm9tKGRhdGEpKSlcbiAgfVxuXG4gIGRlbGV0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9JHtpZH1gKVxuICAgICAgLnBpcGUobWFwKCgpID0+IHsgfSkpXG4gIH1cblxuICBkZWxldGVNYW55KGlkczogbnVtYmVyW10pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBsZXQgaWR4ID0gaWRzLm1hcChpZCA9PiBpZC50b1N0cmluZygpKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH1iYXRjaGAsIHsgcGFyYW1zOiB7IGlkczogaWR4IH0gfSlcbiAgICAgIC5waXBlKG1hcCgoKSA9PiB7IH0pKVxuICB9XG59XG4iXX0=