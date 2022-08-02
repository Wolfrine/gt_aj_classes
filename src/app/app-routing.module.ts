import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LandingDashboardComponent } from './components/landing-dashboard/landing-dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { DemoTestComponent } from './demo-test/demo-test.component';

const routes: Routes = [
    { path: '', component: ShowcaseComponent },
    { path: 'home', component: ComponentsComponent, children: [{ path: '', component: LandingDashboardComponent }] },
    { path: 'login', component: LoginPageComponent },
    { path: 'demo', component: DemoTestComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
