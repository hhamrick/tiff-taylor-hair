import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-stylist-page',
  imports: [MatCardModule],
  templateUrl: './stylist-page.component.html',
  styleUrl: './stylist-page.component.css'
})
export class StylistPageComponent {
  public static Route = {
    path: '**',
    title: 'Stylist - Tiffany Taylor',
    component: StylistPageComponent
  }
}
