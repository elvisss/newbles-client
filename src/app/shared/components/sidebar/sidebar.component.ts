import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive = false;
    showMenu = '';

    public role:string;

    public isUser:boolean;
    public isAdmin:boolean;

    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    constructor() {
        this.role = localStorage.getItem('currentUser');
    }


    ngOnInit(): void {
        if (this.role == "admin") {
          this.isAdmin = true;
        } else if (this.role == "user") {
          this.isUser = true;
        }
    }

}
