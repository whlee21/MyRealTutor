import { Injectable } from '@angular/core';
// import JitsiMeetJS from 'lib-jitsi-meet';
import '../../../vendor/jitsi/lib-jitsi-meet.min.js';

declare var JitsiMeetJS: any;

@Injectable({
    providedIn: 'root'
})
export class JitsiMeetService {
    private options = {};

    constructor() {
        JitsiMeetJS.init();
        const connection = new JitsiMeetJS.JitsiConnection(null, null, this.options);
    }
}
