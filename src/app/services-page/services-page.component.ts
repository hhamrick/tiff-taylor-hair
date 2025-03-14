import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  imports: [],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {
  public static Route = {
    path: 'services',
    title: 'Services',
    component: ServicesPageComponent
  }
}
