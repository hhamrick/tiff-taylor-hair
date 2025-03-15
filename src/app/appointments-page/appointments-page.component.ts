import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-appointments-page',
  imports: [MatCardModule],
  templateUrl: './appointments-page.component.html',
  styleUrl: './appointments-page.component.css'
})
export class AppointmentsPageComponent {
  public static Route = {
    path: 'appointments',
    title: 'Appointments - Tiffany Taylor',
    component: AppointmentsPageComponent
  }
}
