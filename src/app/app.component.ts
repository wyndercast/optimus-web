import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, RouterOutlet } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PreloaderComponent } from './components/layout/preloader/preloader.component';
import { Observable } from 'rxjs';
import {fromEvent} from 'rxjs';

declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    standalone: true,
    imports: [PreloaderComponent,CommonModule, HeaderComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit, OnDestroy {
    [x: string]: any;
    location: any;
    routerSubscription: any;

    constructor(private router: Router) {
    }

    ngAfterViewInit(){
        //Add a script tag to the DOM
        let script = document.createElement('script');
        document.body.appendChild(script);
    
        //listen for the load event on the script...
        fromEvent(script,'load').pipe().subscribe(
              //...and call onScriptLoad once the script is loaded
              ()=>this.onScriptLoad()
        );
    
        //set script source: will trigger the download
        script.src = "https://sdo...";
    }

    ngOnInit() {
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.router.events
        .subscribe((event) => {
            if ( event instanceof NavigationStart ) {
                $('.preloader').fadeIn('slow');
            }
        });
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            $.getScript('../assets/js/custom.js');
            $('.preloader').fadeOut('slow');
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }
    
}
