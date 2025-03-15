import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StylistPageComponent } from './stylist-page/stylist-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { CancellationsPageComponent } from './cancellations-page/cancellations-page.component';
import { AppointmentsPageComponent } from './appointments-page/appointments-page.component';

export const routes: Routes = [
    HomePageComponent.Route,
    StylistPageComponent.Route,
    ServicesPageComponent.Route,
    AppointmentsPageComponent.Route,
    CancellationsPageComponent.Route
];
