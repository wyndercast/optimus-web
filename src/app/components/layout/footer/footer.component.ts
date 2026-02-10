import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy, NgIf } from '@angular/common';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { PrivacyPolicyComponent } from '../../privacy-policy/privacy-policy.component';
import { ServiceTermComponent } from '../../service-term/service-term.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    standalone: true,
    imports: [NgIf, RouterLink, RouterOutlet]
})
export class FooterComponent implements OnInit {

    location: any;
    currentYear: any;
    modalRefPrivacy: MdbModalRef<PrivacyPolicyComponent> | null = null;
    modalRefTerm: MdbModalRef<ServiceTermComponent> | null = null;

    constructor(
        public router: Router,
        location: Location,
        private modalService: MdbModalService
    ) { }

    ngOnInit() {
        this.currentYear = new Date().getFullYear();
        this.router.events
            .subscribe((event) => {
                if ( event instanceof NavigationEnd ) {
                    this.location = this.router.url;
                    console.log(this.location)
                }
            });
    }

    openPolicy(){
        this.modalRefPrivacy = this.modalService.open(PrivacyPolicyComponent, {
          modalClass: 'modal-dialog-large',
          containerClass: "modal-overlay"
        })
      }
     
      openTerms(){
        this.modalRefTerm = this.modalService.open(ServiceTermComponent, {
          modalClass: 'modal-dialog-large',
          containerClass: "modal-overlay"
        })
      }

}
