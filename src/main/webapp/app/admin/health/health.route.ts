import { Route } from '@angular/router';

import { MrtHealthCheckComponent } from './health.component';

export const healthRoute: Route = {
    path: 'mrt-health',
    component: MrtHealthCheckComponent,
    data: {
        pageTitle: 'health.title'
    }
};
