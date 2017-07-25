import { IAppConfig } from './iapp-config';
import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export const AppConfig: IAppConfig = {    
    apiEndpoint: 'assets/data/projectvideo.data.json'
};