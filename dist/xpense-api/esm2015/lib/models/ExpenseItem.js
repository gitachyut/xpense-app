/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ExpenseItem {
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
if (false) {
    /** @type {?} */
    ExpenseItem.prototype.heading;
    /** @type {?} */
    ExpenseItem.prototype.cost;
    /** @type {?} */
    ExpenseItem.prototype.spendDate;
    /** @type {?} */
    ExpenseItem.prototype.categoryId;
    /** @type {?} */
    ExpenseItem.prototype.notes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhwZW5zZUl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly94cGVuc2UtYXBpLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9FeHBlbnNlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBQ3BCLFlBQ1csT0FBZSxFQUNmLElBQVksRUFDWixTQUFlLEVBQ2YsVUFBa0IsRUFDbEIsS0FBYTtRQUpiLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osY0FBUyxHQUFULFNBQVMsQ0FBTTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUV4QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBUztRQUNqQixPQUFPLElBQUksV0FBVyxDQUNsQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0o7OztJQWhCTyw4QkFBc0I7O0lBQ3RCLDJCQUFtQjs7SUFDbkIsZ0NBQXNCOztJQUN0QixpQ0FBeUI7O0lBQ3pCLDRCQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBFeHBlbnNlSXRlbSB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaGVhZGluZzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29zdDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgc3BlbmREYXRlOiBEYXRlLFxuICAgICAgICBwdWJsaWMgY2F0ZWdvcnlJZDogbnVtYmVyLFxuICAgICAgICBwdWJsaWMgbm90ZXM6IHN0cmluZykge1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGZyb20oZGF0YTogYW55KTogRXhwZW5zZUl0ZW0ge1xuICAgICAgICByZXR1cm4gbmV3IEV4cGVuc2VJdGVtKFxuICAgICAgICAgICAgZGF0YS5oZWFkaW5nLFxuICAgICAgICAgICAgZGF0YS5jb3N0LFxuICAgICAgICAgICAgZGF0YS5zcGVuZERhdGUsXG4gICAgICAgICAgICBkYXRhLmNhdGVnb3J5SWQsXG4gICAgICAgICAgICBkYXRhLm5vdGVzKTtcbiAgICB9XG59Il19