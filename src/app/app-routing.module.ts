import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LandingDashboardComponent } from './components/landing-dashboard/landing-dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { ErrorComponent } from './components/common/error/error.component';
import { SyllabusComponent } from './components/landing-dashboard/syllabus/syllabus.component';

const routes: Routes = [
    { path: '', component: ShowcaseComponent },
    { path: 'home', component: ComponentsComponent, children: [{ path: '', component: LandingDashboardComponent }] },
    { path: 'syllabus', component: ComponentsComponent, children: [{ path: '', component: SyllabusComponent }] },
    { path: 'login', component: LoginPageComponent },
    { path: 'demo', component: DemoTestComponent },
    { path: 'error', component: ErrorComponent },
    { path: '404', component: ErrorComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
