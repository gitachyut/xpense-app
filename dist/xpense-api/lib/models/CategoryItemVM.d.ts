export declare class CategoryItemVM {
    id: number;
    label: string;
    description: string;
    private _createdOn;
    private _updatedOn;
    readonly createdOn: Date;
    readonly updatedOn: Date;
    constructor(id: number, label: string, description: string, _createdOn: string, _updatedOn: string);
    static from(data: any): CategoryItemVM;
}
