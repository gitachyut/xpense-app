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
export class ExpenseService {
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
/** @nocollapse */ ExpenseService.ngInjectableDef = i0.defineInjectable({ factory: function ExpenseService_Factory() { return new ExpenseService(i0.inject(i1.HttpClient), i0.inject(i2.APP_CONFIG)); }, token: ExpenseService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8veHBlbnNlLWFwaS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9leHBlbnNlL2V4cGVuc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSzFELE1BQU0sT0FBTyxjQUFjOzs7OztJQUt6QixZQUFvQixLQUFpQixFQUE4QixPQUFtQjtRQUFsRSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQThCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUEwQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMxRixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxFQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEVBQUUsQ0FBQzthQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBaUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQzthQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakUsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVUsRUFBRSxJQUFpQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQzthQUNuRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBbUIsRUFBRSxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEdBQWE7O1lBQ2xCLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQzFGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVFEsVUFBVTs0Q0FldUIsTUFBTSxTQUFDLFVBQVU7Ozs7Ozs7O0lBSHpELG1DQUEwQjs7Ozs7SUFDMUIsbUNBQTBCOzs7OztJQUVkLCtCQUF5Qjs7Ozs7SUFBRSxpQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBFeHBlbnNlSXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9FeHBlbnNlSXRlbSc7XG5pbXBvcnQgeyBFeHBlbnNlSXRlbVZNIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0V4cGVuc2VJdGVtVk0nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQVBQX0NPTkZJRywgSUFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2FwcC5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFeHBlbnNlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfYmFzZV91cmw6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXBpX3BhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBASW5qZWN0KEFQUF9DT05GSUcpIHByaXZhdGUgX2NvbmZpZzogSUFwcENvbmZpZykge1xuICAgIHRoaXMuX2Jhc2VfdXJsID0gdGhpcy5fY29uZmlnLmFwaUVuZHBvaW50O1xuICAgIHRoaXMuX2FwaV9wYXRoID0gdGhpcy5fY29uZmlnLmV4cGVuc2VzQXBpO1xuICB9XG5cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8RXhwZW5zZUl0ZW1WTVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9YClcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogQXJyYXk8RXhwZW5zZUl0ZW1WTT4pID0+IGRhdGEubWFwKGluc3QgPT4gRXhwZW5zZUl0ZW1WTS5mcm9tKGluc3QpKSkpXG4gIH1cblxuICBnZXQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RXhwZW5zZUl0ZW1WTT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChgJHt0aGlzLl9iYXNlX3VybH0ke3RoaXMuX2FwaV9wYXRofSR7aWR9YClcbiAgICAgIC5waXBlKG1hcCgoZGF0YTogRXhwZW5zZUl0ZW1WTSkgPT4gRXhwZW5zZUl0ZW1WTS5mcm9tKGRhdGEpKSlcbiAgfVxuXG4gIGNyZWF0ZShkYXRhOiBFeHBlbnNlSXRlbSk6IE9ic2VydmFibGU8RXhwZW5zZUl0ZW1WTT4ge1xuICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH1gLCBkYXRhKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBFeHBlbnNlSXRlbVZNKSA9PiBFeHBlbnNlSXRlbVZNLmZyb20oZGF0YSkpKVxuICB9XG5cbiAgdXBkYXRlKGlkOiBudW1iZXIsIGRhdGE6IEV4cGVuc2VJdGVtKTogT2JzZXJ2YWJsZTxFeHBlbnNlSXRlbVZNPiB7XG4gICAgcmV0dXJuIHRoaXMuX2h0dHAucHV0KGAke3RoaXMuX2Jhc2VfdXJsfSR7dGhpcy5fYXBpX3BhdGh9JHtpZH1gLCBkYXRhKVxuICAgICAgLnBpcGUobWFwKChkYXRhOiBFeHBlbnNlSXRlbVZNKSA9PiBFeHBlbnNlSXRlbVZNLmZyb20oZGF0YSkpKVxuICB9XG5cbiAgZGVsZXRlKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5kZWxldGUoYCR7dGhpcy5fYmFzZV91cmx9JHt0aGlzLl9hcGlfcGF0aH0ke2lkfWApXG4gICAgICAucGlwZShtYXAoKCkgPT4geyB9KSlcbiAgfVxuXG4gIGRlbGV0ZU1hbnkoaWRzOiBudW1iZXJbXSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGxldCBpZHggPSBpZHMubWFwKGlkID0+IGlkLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmRlbGV0ZShgJHt0aGlzLl9iYXNlX3VybH0ke3RoaXMuX2FwaV9wYXRofWJhdGNoYCwgeyBwYXJhbXM6IHsgaWRzOiBpZHggfSB9KVxuICAgICAgLnBpcGUobWFwKCgpID0+IHsgfSkpXG4gIH1cbn1cbiJdfQ==