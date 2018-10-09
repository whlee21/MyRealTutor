import { SpyObject } from './spyobject';
import { MrtTrackerService } from 'app/core/tracker/tracker.service';

export class MockTrackerService extends SpyObject {
    constructor() {
        super(MrtTrackerService);
    }

    connect() {}
}
