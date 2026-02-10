import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { provideClientHydration, withHttpTransferCacheOptions, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import AppServerModule from './main.server';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppServerModule, AppRoutingModule, ReactiveFormsModule, MdbModalModule, LazyLoadImageModule),
        provideClientHydration(withHttpTransferCacheOptions({
            includePostRequests: true,
        })),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
