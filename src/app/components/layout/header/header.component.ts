import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy, NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    standalone: true,
    imports: [NgClass, RouterLink, NgIf, RouterLinkActive, FormsModule]
})
export class HeaderComponent implements OnInit {

    location: any;

    constructor(
        public router: Router,
        location: Location
    ) { }

    ngOnInit() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                this.location = this.router.url;
            }
        });
    }

    topScroll(element){
        document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }

}
