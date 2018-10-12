import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JitsiMeetService } from '../jitsi-meet.service';
// import '../../../vendor/jitsi/external_api.js';
// import '../../../vendor/jitsi/lib-jitsi-meet.min.js';

// import * as $ from 'jquery';

declare var JitsiMeetJS: any;
// declare var JitsiConnection: any;
// declare var $: any;
// declare var JitsiMeetExternalAPI: any;

@Component({
    selector: 'mrt-room',
    templateUrl: './room.component.html',
    styles: []
})
export class RoomComponent implements OnInit, AfterViewInit {
    title = 'app';
    domain = 'meet.jit.si';
    options: any;
    api: any;

    constructor(private jitsiMeet: JitsiMeetService) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.options = {
            roomName: 'JitsiMeetAPIExample',
            width: 700,
            height: 700,
            parentNode: document.querySelector('#meet')
        };

        // // this.api = new JitsiMeetExternalAPI(this.domain, this.options);
        // JitsiMeetJS.init();
        // const connection = new JitsiMeetJS.JitsiConnection(null, 'asdfasdfasdfasdf', this.options);
        // console.log('connection ', connection);
        this.jitsiMeet.printConnection();
    }
}
