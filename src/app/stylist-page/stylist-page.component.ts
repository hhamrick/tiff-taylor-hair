import { Component } from '@angular/core';

@Component({
  selector: 'app-stylist-page',
  imports: [],
  templateUrl: './stylist-page.component.html',
  styleUrl: './stylist-page.component.css'
})
export class StylistPageComponent {
  public static Route = {
    path: 'stylist',
    title: 'Stylist',
    component: StylistPageComponent
  }
}
