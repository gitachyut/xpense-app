/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseItemVM } from '../../models/ExpenseItemVM';
import { map } from 'rxjs/operators';
import { APP_CONFIG } from '../../app.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../app.config";
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
    /** @nocollapse */ ExpenseService.ngInjectableDef = i0.defineInjectable({ factory: function ExpenseService_Factory() { return new ExpenseService(i0.inject(i1.HttpClient), i0.inject(i2.APP_CONFIG)); }, token: ExpenseService, providedIn: "root" });
    return ExpenseService;
}());
export { ExpenseService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExpenseService.prototype._base_url;
    /**
     * @type {?}
     * @private
     */
    ExpenseService.prototype._api_path;
    /**
     * @type {?}
     * @private
     */
    ExpenseService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ExpenseService.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8veHBlbnNlLWFwaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBlbnNlL2V4cGVuc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRTFEO0lBUUUsd0JBQW9CLEtBQWlCLEVBQThCLE9BQW1CO1FBQWxFLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBOEIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNwRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELCtCQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFXLENBQUM7YUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQTBCLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUMsQ0FBQTtJQUMxRixDQUFDOzs7OztJQUVELDRCQUFHOzs7O0lBQUgsVUFBSSxFQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFJLENBQUM7YUFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQW1CLElBQUssT0FBQSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQTtJQUNqRSxDQUFDOzs7OztJQUVELCtCQUFNOzs7O0lBQU4sVUFBTyxJQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBVyxFQUFFLElBQUksQ0FBQzthQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBbUIsSUFBSyxPQUFBLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7Ozs7OztJQUVELCtCQUFNOzs7OztJQUFOLFVBQU8sRUFBVSxFQUFFLElBQWlCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBSSxFQUFFLElBQUksQ0FBQzthQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBbUIsSUFBSyxPQUFBLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7Ozs7O0lBRUQsK0JBQU07Ozs7SUFBTixVQUFPLEVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUksQ0FBQzthQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7OztJQUVELG1DQUFVOzs7O0lBQVYsVUFBVyxHQUFhOztZQUNsQixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBYixDQUFhLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsVUFBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDMUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDekIsQ0FBQzs7Z0JBMUNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsVUFBVTtnREFldUIsTUFBTSxTQUFDLFVBQVU7Ozt5QkFoQjNEO0NBbURDLEFBM0NELElBMkNDO1NBeENZLGNBQWM7Ozs7OztJQUV6QixtQ0FBMEI7Ozs7O0lBQzFCLG1DQUEwQjs7Ozs7SUFFZCwrQkFBeUI7Ozs7O0lBQUUsaUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRXhwZW5zZUl0ZW0gfSBmcm9tICcuLi8uLi9tb2RlbHMvRXhwZW5zZUl0ZW0nO1xuaW1wb3J0IHsgRXhwZW5zZUl0ZW1WTSB9IGZyb20gJy4uLy4uL21vZGVscy9FeHBlbnNlSXRlbVZNJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFQUF9DT05GSUcsIElBcHBDb25maWcgfSBmcm9tICcuLi8uLi9hcHAuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXhwZW5zZVNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2Jhc2VfdXJsOiBzdHJpbmc7XG4gIHByaXZhdGUgX2FwaV9wYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCwgQEluamVjdChBUFBfQ09ORklHKSBwcml2YXRlIF9jb25maWc6IElBcHBDb25maWcpIHtcbiAgICB0aGlzLl9iYXNlX3VybCA9IHRoaXMuX2NvbmZpZy5hcGlFbmRwb2ludDtcbiAgICB0aGlzLl9hcGlfcGF0aCA9IHRoaXMuX2NvbmZpZy5leHBlbnNlc0FwaTtcbiAgfVxuXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPEV4cGVuc2VJdGVtVk1bXT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHt0aGlzLl9iYXNlX3VybH0ke3RoaXMuX2FwaV9wYXRofWApXG4gICAgICAucGlwZShtYXAoKGRhdGE6IEFycmF5PEV4cGVuc2VJdGVtVk0+KSA9PiBkYXRhLm1hcChpbnN0ID0+IEV4cGVuc2VJdGVtVk0uZnJvbShpbnN0KSkpKVxuICB9XG5cbiAgZ2V0KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEV4cGVuc2VJdGVtVk0+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH0ke2lkfWApXG4gICAgICAucGlwZShtYXAoKGRhdGE6IEV4cGVuc2VJdGVtVk0pID0+IEV4cGVuc2VJdGVtVk0uZnJvbShkYXRhKSkpXG4gIH1cblxuICBjcmVhdGUoZGF0YTogRXhwZW5zZUl0ZW0pOiBPYnNlcnZhYmxlPEV4cGVuc2VJdGVtVk0+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9YCwgZGF0YSlcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogRXhwZW5zZUl0ZW1WTSkgPT4gRXhwZW5zZUl0ZW1WTS5mcm9tKGRhdGEpKSlcbiAgfVxuXG4gIHVwZGF0ZShpZDogbnVtYmVyLCBkYXRhOiBFeHBlbnNlSXRlbSk6IE9ic2VydmFibGU8RXhwZW5zZUl0ZW1WTT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnB1dChgJHt0aGlzLl9iYXNlX3VybH0ke3RoaXMuX2FwaV9wYXRofSR7aWR9YCwgZGF0YSlcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogRXhwZW5zZUl0ZW1WTSkgPT4gRXhwZW5zZUl0ZW1WTS5mcm9tKGRhdGEpKSlcbiAgfVxuXG4gIGRlbGV0ZShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZGVsZXRlKGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9JHtpZH1gKVxuICAgICAgLnBpcGUobWFwKCgpID0+IHsgfSkpXG4gIH1cblxuICBkZWxldGVNYW55KGlkczogbnVtYmVyW10pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBsZXQgaWR4ID0gaWRzLm1hcChpZCA9PiBpZC50b1N0cmluZygpKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH1iYXRjaGAsIHsgcGFyYW1zOiB7IGlkczogaWR4IH0gfSlcbiAgICAgIC5waXBlKG1hcCgoKSA9PiB7IH0pKVxuICB9XG59XG4iXX0=