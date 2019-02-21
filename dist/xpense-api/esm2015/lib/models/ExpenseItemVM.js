/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CategoryItemVM } from './CategoryItemVM';
export class ExpenseItemVM {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwZW5zZUl0ZW1WTS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3hwZW5zZS1hcGkvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL0V4cGVuc2VJdGVtVk0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxNQUFNLE9BQU8sYUFBYTs7Ozs7Ozs7Ozs7SUFNdEIsWUFDVyxFQUFVLEVBQ1YsT0FBZSxFQUNmLElBQVksRUFDWCxVQUFrQixFQUNuQixRQUF3QixFQUN4QixLQUFhLEVBQ1osVUFBa0IsRUFDbEIsVUFBa0I7UUFQbkIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1gsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ1osZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFRO0lBRTlCLENBQUM7Ozs7SUFkRCxJQUFJLFNBQVMsS0FBVyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7SUFDM0QsSUFBSSxTQUFTLEtBQVcsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0lBQzNELElBQUksU0FBUyxLQUFXLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFjM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFTO1FBQ2pCLE9BQU8sSUFBSSxhQUFhLENBQ3BCLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxTQUFTLEVBQ2QsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNKOzs7SUF0Qk8sMkJBQWlCOztJQUNqQixnQ0FBc0I7O0lBQ3RCLDZCQUFtQjs7Ozs7SUFDbkIsbUNBQTBCOztJQUMxQixpQ0FBK0I7O0lBQy9CLDhCQUFvQjs7Ozs7SUFDcEIsbUNBQTBCOzs7OztJQUMxQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeUl0ZW1WTSB9IGZyb20gJy4vQ2F0ZWdvcnlJdGVtVk0nO1xuXG5leHBvcnQgY2xhc3MgRXhwZW5zZUl0ZW1WTSB7XG5cbiAgICBnZXQgc3BlbmREYXRlKCk6IERhdGUgeyByZXR1cm4gbmV3IERhdGUodGhpcy5fc3BlbmREYXRlKTsgfVxuICAgIGdldCBjcmVhdGVkT24oKTogRGF0ZSB7IHJldHVybiBuZXcgRGF0ZSh0aGlzLl9jcmVhdGVkT24pOyB9XG4gICAgZ2V0IHVwZGF0ZWRPbigpOiBEYXRlIHsgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX3VwZGF0ZWRPbik7IH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBoZWFkaW5nOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBjb3N0OiBudW1iZXIsXG4gICAgICAgIHByaXZhdGUgX3NwZW5kRGF0ZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY2F0ZWdvcnk6IENhdGVnb3J5SXRlbVZNLFxuICAgICAgICBwdWJsaWMgbm90ZXM6IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBfY3JlYXRlZE9uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgX3VwZGF0ZWRPbjogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZnJvbShkYXRhOiBhbnkpOiBFeHBlbnNlSXRlbVZNIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeHBlbnNlSXRlbVZNKFxuICAgICAgICAgICAgZGF0YS5pZCxcbiAgICAgICAgICAgIGRhdGEuaGVhZGluZyxcbiAgICAgICAgICAgIGRhdGEuY29zdCxcbiAgICAgICAgICAgIGRhdGEuc3BlbmREYXRlLFxuICAgICAgICAgICAgQ2F0ZWdvcnlJdGVtVk0uZnJvbShkYXRhLmNhdGVnb3J5KSxcbiAgICAgICAgICAgIGRhdGEubm90ZXMsXG4gICAgICAgICAgICBkYXRhLmNyZWF0ZWRPbixcbiAgICAgICAgICAgIGRhdGEudXBkYXRlZE9uKTtcbiAgICB9XG59Il19