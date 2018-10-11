import { Injectable } from '@angular/core';
// import { JitsiMeetJS, JitsiConnection, JitsiConference, JitsiTrack, JitsiTrackError } from 'lib-jitsi-meet/dist/lib-jitsi-meet.min.js';
// import { JitsiMeetJS, JitsiConnection, JitsiConference, JitsiTrack, JitsiTrackError } from 'lib-jitsi-meet/dist/lib-jitsi-meet.min';
// const JitsiMeetJS = require('lib-jitsi-meet/dist/lib-jitsi-meet.min');
import '../../vendor/jitsi/lib-jitsi-meet.min.js';

declare var JitsiMeetJS: any;

@Injectable({
    providedIn: 'root'
})
export class JitsiMeetService {
    private options = {};

    constructor() {
        JitsiMeetJS.init();
        const connection = new JitsiMeetJS.JitsiConnection(null, null, this.options);
        console.log('connection ', connection);
    }
}
