import { Route } from '@angular/router';

import { MrtConfigurationComponent } from './configuration.component';

export const configurationRoute: Route = {
    path: 'mrt-configuration',
    component: MrtConfigurationComponent,
    data: {
        pageTitle: 'configuration.title'
    }
};
