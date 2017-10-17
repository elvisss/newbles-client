import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';

import { AgmCoreModule } from '@agm/core';

import { AtrapanieblaService } from '../../services/atrapaniebla/atrapaniebla.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBX4D2ABvJBlhKbjCE5vOF2PAr9fjDRp7I'
        })
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ],
    providers: [
        AtrapanieblaService
    ]
})
export class DashboardModule { }
