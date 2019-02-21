/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CategoryItemVM {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlJdGVtVk0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly94cGVuc2UtYXBpLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9DYXRlZ29yeUl0ZW1WTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7O0lBS3ZCLFlBQ1csRUFBVSxFQUNWLEtBQWEsRUFDYixXQUFtQixFQUNsQixVQUFrQixFQUNsQixVQUFrQjtRQUpuQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUMxQixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNiLE1BQU0sSUFBSSxTQUFTLENBQUMsMENBQTBDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBWEQsSUFBSSxTQUFTLEtBQVcsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7O0lBQzNELElBQUksU0FBUyxLQUFXLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFZM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFTO1FBQ2pCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQy9DLE1BQU0sSUFBSSxTQUFTLENBQUMsMkJBQTJCLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNsRSxPQUFPLElBQUksY0FBYyxDQUNyQixJQUFJLENBQUMsRUFBRSxFQUNQLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNKOzs7SUFuQk8sNEJBQWlCOztJQUNqQiwrQkFBb0I7O0lBQ3BCLHFDQUEwQjs7Ozs7SUFDMUIsb0NBQTBCOzs7OztJQUMxQixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2F0ZWdvcnlJdGVtVk0ge1xuXG4gICAgZ2V0IGNyZWF0ZWRPbigpOiBEYXRlIHsgcmV0dXJuIG5ldyBEYXRlKHRoaXMuX2NyZWF0ZWRPbik7IH1cbiAgICBnZXQgdXBkYXRlZE9uKCk6IERhdGUgeyByZXR1cm4gbmV3IERhdGUodGhpcy5fdXBkYXRlZE9uKTsgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaWQ6IG51bWJlcixcbiAgICAgICAgcHVibGljIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIF9jcmVhdGVkT246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBfdXBkYXRlZE9uOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFpZCB8fCAhbGFiZWwpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGByZXF1aXJlZCBmaWVsZHMgaWQgYW5kIGxhYmVsIGFyZSBtaXNzaW5nYCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZyb20oZGF0YTogYW55KTogQ2F0ZWdvcnlJdGVtVk0ge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShkYXRhKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIG9iamVjdCBidXQgZ290ICR7dHlwZW9mIGRhdGF9YCk7XG4gICAgICAgIHJldHVybiBuZXcgQ2F0ZWdvcnlJdGVtVk0oXG4gICAgICAgICAgICBkYXRhLmlkLFxuICAgICAgICAgICAgZGF0YS5sYWJlbCxcbiAgICAgICAgICAgIGRhdGEuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkYXRhLmNyZWF0ZWRPbixcbiAgICAgICAgICAgIGRhdGEudXBkYXRlZE9uKTtcbiAgICB9XG59Il19