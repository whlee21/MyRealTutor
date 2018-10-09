import { Route } from '@angular/router';

import { MrtTrackerComponent } from './tracker.component';

export const trackerRoute: Route = {
    path: 'mrt-tracker',
    component: MrtTrackerComponent,
    data: {
        pageTitle: 'tracker.title'
    }
};
