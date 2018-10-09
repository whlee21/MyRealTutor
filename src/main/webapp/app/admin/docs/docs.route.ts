import { Route } from '@angular/router';

import { MrtDocsComponent } from './docs.component';

export const docsRoute: Route = {
    path: 'docs',
    component: MrtDocsComponent,
    data: {
        pageTitle: 'global.menu.admin.apidocs'
    }
};
