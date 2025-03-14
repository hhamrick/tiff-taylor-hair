import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StylistPageComponent } from './stylist-page/stylist-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

export const routes: Routes = [
    HomePageComponent.Route,
    StylistPageComponent.Route,
    ServicesPageComponent.Route
];
