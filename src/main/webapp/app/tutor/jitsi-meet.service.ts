import { Injectable } from '@angular/core';

declare var JitsiMeetJS: any;

@Injectable({
    providedIn: 'root'
})
export class JitsiMeetService {
    title = 'app';
    domain = 'meet.jit.si';
    options: any;
    api: any;
    connection: any;

    constructor() {
        this.options = {
            roomName: 'JitsiMeetAPIExample',
            width: 700,
            height: 700,
            parentNode: document.querySelector('#meet')
        };
        JitsiMeetJS.init(this.options);
        this.connection = new JitsiMeetJS.JitsiConnection(null, null, this.options);

        // this.options = {
        //     roomName: 'JitsiMeetAPIExample',
        //     width: 700,
        //     height: 700,
        //     parentNode: document.querySelector('#meet')
        // };

        // this.api = new JitsiMeetExternalAPI(this.domain, this.options);
    }

    printConnection() {
        console.log('connection ', this.connection);
    }
}
