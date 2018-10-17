import { Routes } from '@angular/router';

import { roomRoute } from './';

import { UserRouteAccessService } from 'app/core';

const TUTOR_ROUTES = [roomRoute];

export const tutorState: Routes = [
    {
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [UserRouteAccessService],
        children: TUTOR_ROUTES
    }
];
