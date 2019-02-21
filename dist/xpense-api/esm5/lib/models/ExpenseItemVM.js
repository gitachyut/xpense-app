/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CategoryItemVM } from './CategoryItemVM';
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
export { ExpenseItemVM };
if (false) {
    /** @type {?} */
    ExpenseItemVM.prototype.id;
    /** @type {?} */
    ExpenseItemVM.prototype.heading;
    /** @type {?} */
    ExpenseItemVM.prototype.cost;
    /**
     * @type {?}
     * @private
     */
    ExpenseItemVM.prototype._spendDate;
    /** @type {?} */
    ExpenseItemVM.prototype.category;
    /** @type {?} */
    ExpenseItemVM.prototype.notes;
    /**
     * @type {?}
     * @private
     */
    ExpenseItemVM.prototype._createdOn;
    /**
     * @type {?}
     * @private
     */
    ExpenseItemVM.prototype._updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwZW5zZUl0ZW1WTS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3hwZW5zZS1hcGkvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL0V4cGVuc2VJdGVtVk0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRDtJQU1JLHVCQUNXLEVBQVUsRUFDVixPQUFlLEVBQ2YsSUFBWSxFQUNYLFVBQWtCLEVBQ25CLFFBQXdCLEVBQ3hCLEtBQWEsRUFDWixVQUFrQixFQUNsQixVQUFrQjtRQVBuQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDWixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVE7SUFFOUIsQ0FBQztJQWRELHNCQUFJLG9DQUFTOzs7O1FBQWIsY0FBd0IsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FBQTtJQUMzRCxzQkFBSSxvQ0FBUzs7OztRQUFiLGNBQXdCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDM0Qsc0JBQUksb0NBQVM7Ozs7UUFBYixjQUF3QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7OztJQWNwRCxrQkFBSTs7OztJQUFYLFVBQVksSUFBUztRQUNqQixPQUFPLElBQUksYUFBYSxDQUNwQixJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsU0FBUyxFQUNkLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUNsQyxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE3QkQsSUE2QkM7Ozs7SUF0Qk8sMkJBQWlCOztJQUNqQixnQ0FBc0I7O0lBQ3RCLDZCQUFtQjs7Ozs7SUFDbkIsbUNBQTBCOztJQUMxQixpQ0FBK0I7O0lBQy9CLDhCQUFvQjs7Ozs7SUFDcEIsbUNBQTBCOzs7OztJQUMxQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeUl0ZW1WTSB9IGZyb20gJy4vQ2F0ZWdvcnlJdGVtVk0nO1xuXG5leHBvcnQgY2xhc3MgRXhwZW5zZUl0ZW1WTSB7XG5cbiAgICBnZXQgc3BlbmREYXRlKCk6IERhdGUgeyByZXR1cm4gbmV3IERhdGUodGhpcy5fc3BlbmREYXRlKTsgfVxuICAgIGdldCBjcmVhdGVkT24oKTogRGF0ZSB7IHJldHVybiBuZXcgRGF0ZSh0aGlzLl9jcmVhdGVkT24pOyB9XG4gICAgZ2V0IHVwZGF0ZWRPbigpOiBEYXRlIHsgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX3VwZGF0ZWRPbik7IH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBoZWFkaW5nOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb3N0OiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgX3NwZW5kRGF0ZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY2F0ZWdvcnk6IENhdGVnb3J5SXRlbVZNLFxuICAgICAgICBwdWJsaWMgbm90ZXM6IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBfY3JlYXRlZE9uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgX3VwZGF0ZWRPbjogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbShkYXRhOiBhbnkpOiBFeHBlbnNlSXRlbVZNIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeHBlbnNlSXRlbVZNKFxuICAgICAgICAgICAgZGF0YS5pZCxcbiAgICAgICAgICAgIGRhdGEuaGVhZGluZyxcbiAgICAgICAgICAgIGRhdGEuY29zdCxcbiAgICAgICAgICAgIGRhdGEuc3BlbmREYXRlLFxuICAgICAgICAgICAgQ2F0ZWdvcnlJdGVtVk0uZnJvbShkYXRhLmNhdGVnb3J5KSxcbiAgICAgICAgICAgIGRhdGEubm90ZXMsXG4gICAgICAgICAgICBkYXRhLmNyZWF0ZWRPbixcbiAgICAgICAgICAgIGRhdGEudXBkYXRlZE9uKTtcbiAgICB9XG59Il19