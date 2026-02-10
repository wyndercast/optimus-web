import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { WebinarComponent } from './components/pages/webinar/webinar.component';

export const routes: Routes = [
    { path: '',component: HomeComponent},
    { path: 'index-2', loadComponent: () => import ("./components/pages/home-two/home-two.component").then(h => h.HomeTwoComponent)},
    { path: 'valuekeep-software-mantenimiento', component: HomeThreeComponent},
    { path: 'webinar-valuekeep', component: WebinarComponent},
    { path: 'index-4', loadComponent: () => import ("./components/pages/home-four/home-four.component").then(h => h.HomeFourComponent)},
    { path: 'about', loadComponent: () => import ("./components/pages/about/about.component").then(a => a.AboutComponent)},
    { path: 'team', loadComponent: () => import ("./components/pages/team/team.component").then(t => t.TeamComponent)},
    { path: 'services', loadComponent: () => import ("./components/pages/services/services.component").then(s => s.ServicesComponent)},
    { path: 'service-details', loadComponent: () => import ("./components/pages/service-details/service-details.component").then(s => s.ServiceDetailsComponent)},
    { path: 'service-details/develop-integrations', loadComponent: () => import ("./components/pages/service-details/devolop-integrations/devolop-integrations.component").then(d => d.DevolopIntegrationsComponent)},
    { path: 'service-details/software-maintenance', loadComponent: () => import ("./components/pages/service-details/software-maintenance/software-maintenance.component").then(s => s.SoftwareMaintenanceComponent)},
    { path: 'service-details/consulting', loadComponent: () => import ("./components/pages/service-details/consulting/consulting.component").then(s => s.ConsultingComponent)},
    { path: 'service-details/develop-app-web', loadComponent: () => import ("./components/pages/service-details/develop-app-web/develop-app-web.component").then(s => s.DevelopAppWebComponent)},
    { path: 'service-details/develop-app-mobile', loadComponent: () => import ("./components/pages/service-details/develop-app-mobile/develop-app-mobile.component").then(s => s.DevelopAppMobileComponent)},
    { path: 'service-details/data-analitycs-and-machine-learning', loadComponent: () => import ("./components/pages/service-details/data-analitics-machine-learning/data-analitics-machine-learning.component").then(s => s.DataAnaliticsMachineLearningComponent)},
    { path: 'projects', loadComponent: () => import ("./components/pages/projects/projects.component").then(s => s.ProjectsComponent)},
    { path: 'project-details', loadComponent: () => import ("./components/pages/project-details/project-details.component").then(s => s.ProjectDetailsComponent)},
    { path: 'coming-soon', loadComponent: () => import ("./components/pages/coming-soon/coming-soon.component").then(s => s.ComingSoonComponent)},
    { path: 'faq', loadComponent: () => import ("./components/pages/faq/faq.component").then(s => s.FaqComponent)},
    { path: 'blog', loadComponent: () => import ("./components/pages/blog/blog.component").then(s => s.BlogComponent)},
    { path: 'blog-details', loadComponent: () => import ("./components/pages/blog-details/blog-details.component").then(s => s.BlogDetailsComponent)},
    { path: 'contact', loadComponent: () => import ("./components/pages/contact/contact.component").then(s => s.ContactComponent)},

    // Here add new pages component

    { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [HomeComponent,RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
