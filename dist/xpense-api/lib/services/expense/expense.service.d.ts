import { HttpClient } from '@angular/common/http';
import { ExpenseItem } from '../../models/ExpenseItem';
import { ExpenseItemVM } from '../../models/ExpenseItemVM';
import { Observable } from 'rxjs';
import { IAppConfig } from '../../app.config';
export declare class ExpenseService {
    private _http;
    private _config;
    private _base_url;
    private _api_path;
    constructor(_http: HttpClient, _config: IAppConfig);
    getAll(): Observable<ExpenseItemVM[]>;
    get(id: number): Observable<ExpenseItemVM>;
    create(data: ExpenseItem): Observable<ExpenseItemVM>;
    update(id: number, data: ExpenseItem): Observable<ExpenseItemVM>;
    delete(id: number): Observable<void>;
    deleteMany(ids: number[]): Observable<void>;
}
