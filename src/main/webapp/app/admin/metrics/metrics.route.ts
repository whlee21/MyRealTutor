import { Route } from '@angular/router';

import { MrtMetricsMonitoringComponent } from './metrics.component';

export const metricsRoute: Route = {
    path: 'mrt-metrics',
    component: MrtMetricsMonitoringComponent,
    data: {
        pageTitle: 'metrics.title'
    }
};
