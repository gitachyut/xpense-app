import { InjectionToken } from "@angular/core";
export declare let APP_CONFIG: InjectionToken<IAppConfig>;
export interface IAppConfig {
    apiEndpoint: string;
    categoriesApi: string;
    expensesApi: string;
}
export declare const AppConfig: IAppConfig;
