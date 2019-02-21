import { HttpClient } from '@angular/common/http';
import { CategoryItemVM } from '../../models/CategoryItemVM';
import { CategoryItem } from '../../models/CategoryItem';
import { Observable } from 'rxjs';
import { IAppConfig } from '../../app.config';
export declare class CategoryService {
    private _http;
    private _config;
    private _base_url;
    private _api_path;
    constructor(_http: HttpClient, _config: IAppConfig);
    getAll(): Observable<CategoryItemVM[]>;
    get(id: number): Observable<CategoryItemVM>;
    create(data: CategoryItem): Observable<CategoryItemVM>;
    update(id: number, data: CategoryItem): Observable<CategoryItemVM>;
    delete(id: number): Observable<void>;
    deleteMany(ids: number[]): Observable<void>;
}
