import { Component } from '@angular/core';

@Component({
  selector: 'app-cancellations-page',
  imports: [],
  templateUrl: './cancellations-page.component.html',
  styleUrl: './cancellations-page.component.css'
})
export class CancellationsPageComponent {
  public static Route = {
    path: 'cancellations',
    title: 'Cancellations - Tiffany Taylor',
    component: CancellationsPageComponent
  }
}
