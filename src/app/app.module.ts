import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingDashboardComponent } from './components/landing-dashboard/landing-dashboard.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { ErrorComponent } from './components/common/error/error.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MatChipsModule } from '@angular/material/chips';
import { SyllabusComponent } from './components/landing-dashboard/syllabus/syllabus.component';

@NgModule({
    declarations: [
        AppComponent,
        ComponentsComponent,
        LoginPageComponent,
        LandingDashboardComponent,
        ShowcaseComponent,
        DemoTestComponent,
        NavBarComponent,
        ErrorComponent,
        FooterComponent,
        SyllabusComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSidenavModule,
        MatMenuModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatDividerModule,
        MatChipsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
