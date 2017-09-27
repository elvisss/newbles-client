import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessagingService } from "./services/messaging.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	message;

    constructor(
    	private translate: TranslateService,
    	private msgService: MessagingService
    ) {
        translate.addLangs(['en', 'fr', 'ur', 'es', 'fa']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|fa/) ? browserLang : 'en');
    }

    ngOnInit() {
	    this.msgService.getPermission()
	    this.msgService.receiveMessage()
	    this.message = this.msgService.currentMessage
	}

}
