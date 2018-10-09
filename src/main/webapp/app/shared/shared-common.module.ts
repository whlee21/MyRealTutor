import { NgModule } from '@angular/core';

import { MyRealTutorSharedLibsModule, FindLanguageFromKeyPipe, MrtAlertComponent, MrtAlertErrorComponent } from './';

@NgModule({
    imports: [MyRealTutorSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, MrtAlertComponent, MrtAlertErrorComponent],
    exports: [MyRealTutorSharedLibsModule, FindLanguageFromKeyPipe, MrtAlertComponent, MrtAlertErrorComponent]
})
export class MyRealTutorSharedCommonModule {}
