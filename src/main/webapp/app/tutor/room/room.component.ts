import { Component, OnInit } from '@angular/core';
import { JitsiMeetService } from '../jitsi-meet.service';

@Component({
    selector: 'mrt-room',
    templateUrl: './room.component.html',
    styles: []
})
export class RoomComponent implements OnInit {
    constructor(private jitsiMeet: JitsiMeetService) {}

    ngOnInit() {}
}
