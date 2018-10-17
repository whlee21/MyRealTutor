import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { tutorState } from './';
import { RouterModule } from '@angular/router';
import { MyRealTutorSharedModule } from 'app/shared';

@NgModule({
    imports: [MyRealTutorSharedModule, RouterModule.forChild(tutorState)],
    declarations: [RoomComponent],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorModule {}
