import { CategoryItemVM } from './CategoryItemVM';
export declare class ExpenseItemVM {
    id: number;
    heading: string;
    cost: number;
    private _spendDate;
    category: CategoryItemVM;
    notes: string;
    private _createdOn;
    private _updatedOn;
    readonly spendDate: Date;
    readonly createdOn: Date;
    readonly updatedOn: Date;
    constructor(id: number, heading: string, cost: number, _spendDate: string, category: CategoryItemVM, notes: string, _createdOn: string, _updatedOn: string);
    static from(data: any): ExpenseItemVM;
}
