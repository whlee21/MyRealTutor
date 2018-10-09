import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { MyRealTutorSharedLibsModule, MyRealTutorSharedCommonModule, MrtLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [MyRealTutorSharedLibsModule, MyRealTutorSharedCommonModule],
    declarations: [MrtLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [MrtLoginModalComponent],
    exports: [MyRealTutorSharedCommonModule, MrtLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyRealTutorSharedModule {}
