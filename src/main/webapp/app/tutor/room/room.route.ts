import { Route } from '@angular/router';
import { RoomComponent } from './room.component';

export const roomRoute: Route = {
    path: 'room',
    component: RoomComponent,
    data: {
        pageTitle: 'room.title'
    }
};
