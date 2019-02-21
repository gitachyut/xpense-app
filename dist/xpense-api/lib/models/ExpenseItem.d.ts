export declare class ExpenseItem {
    heading: string;
    cost: number;
    spendDate: Date;
    categoryId: number;
    notes: string;
    constructor(heading: string, cost: number, spendDate: Date, categoryId: number, notes: string);
    static from(data: any): ExpenseItem;
}
