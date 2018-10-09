import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';
import { MyRealTutorSharedModule } from 'app/shared';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

import {
    adminState,
    AuditsComponent,
    UserMgmtComponent,
    UserMgmtDetailComponent,
    UserMgmtUpdateComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    MrtMetricsMonitoringModalComponent,
    MrtMetricsMonitoringComponent,
    MrtHealthModalComponent,
    MrtHealthCheckComponent,
    MrtConfigurationComponent,
    MrtDocsComponent,
    MrtTrackerComponent
} from './';

@NgModule({
    imports: [
        MyRealTutorSharedModule,
        RouterModule.forChild(adminState)
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserMgmtDetailComponent,
        UserMgmtUpdateComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        MrtConfigurationComponent,
        MrtHealthCheckComponent,
        MrtHealthModalComponent,
        MrtDocsComponent,
        MrtTrackerComponent,
        MrtMetricsMonitoringComponent,
        MrtMetricsMonitoringModalComponent
    ],
    entryComponents: [UserMgmtDeleteDialogComponent, MrtHealthModalComponent, MrtMetricsMonitoringModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyRealTutorAdminModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
