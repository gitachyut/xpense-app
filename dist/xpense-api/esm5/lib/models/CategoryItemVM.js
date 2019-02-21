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
export { CategoryItemVM };
if (false) {
    /** @type {?} */
    CategoryItemVM.prototype.id;
    /** @type {?} */
    CategoryItemVM.prototype.label;
    /** @type {?} */
    CategoryItemVM.prototype.description;
    /**
     * @type {?}
     * @private
     */
    CategoryItemVM.prototype._createdOn;
    /**
     * @type {?}
     * @private
     */
    CategoryItemVM.prototype._updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlJdGVtVk0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly94cGVuc2UtYXBpLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9DYXRlZ29yeUl0ZW1WTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFLSSx3QkFDVyxFQUFVLEVBQ1YsS0FBYSxFQUNiLFdBQW1CLEVBQ2xCLFVBQWtCLEVBQ2xCLFVBQWtCO1FBSm5CLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzFCLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2IsTUFBTSxJQUFJLFNBQVMsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFYRCxzQkFBSSxxQ0FBUzs7OztRQUFiLGNBQXdCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDM0Qsc0JBQUkscUNBQVM7Ozs7UUFBYixjQUF3QixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQUFBOzs7OztJQVlwRCxtQkFBSTs7OztJQUFYLFVBQVksSUFBUztRQUNqQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUMvQyxNQUFNLElBQUksU0FBUyxDQUFDLDZCQUEyQixPQUFPLElBQU0sQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sSUFBSSxjQUFjLENBQ3JCLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7O0lBbkJPLDRCQUFpQjs7SUFDakIsK0JBQW9COztJQUNwQixxQ0FBMEI7Ozs7O0lBQzFCLG9DQUEwQjs7Ozs7SUFDMUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhdGVnb3J5SXRlbVZNIHtcblxuICAgIGdldCBjcmVhdGVkT24oKTogRGF0ZSB7IHJldHVybiBuZXcgRGF0ZSh0aGlzLl9jcmVhdGVkT24pOyB9XG4gICAgZ2V0IHVwZGF0ZWRPbigpOiBEYXRlIHsgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX3VwZGF0ZWRPbik7IH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGlkOiBudW1iZXIsXG4gICAgICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBfY3JlYXRlZE9uOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgX3VwZGF0ZWRPbjogc3RyaW5nKSB7XG4gICAgICAgIGlmICghaWQgfHwgIWxhYmVsKVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgcmVxdWlyZWQgZmllbGRzIGlkIGFuZCBsYWJlbCBhcmUgbWlzc2luZ2ApO1xuICAgIH1cblxuICAgIHN0YXRpYyBmcm9tKGRhdGE6IGFueSk6IENhdGVnb3J5SXRlbVZNIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBvYmplY3QgYnV0IGdvdCAke3R5cGVvZiBkYXRhfWApO1xuICAgICAgICByZXR1cm4gbmV3IENhdGVnb3J5SXRlbVZNKFxuICAgICAgICAgICAgZGF0YS5pZCxcbiAgICAgICAgICAgIGRhdGEubGFiZWwsXG4gICAgICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgZGF0YS5jcmVhdGVkT24sXG4gICAgICAgICAgICBkYXRhLnVwZGF0ZWRPbik7XG4gICAgfVxufSJdfQ==