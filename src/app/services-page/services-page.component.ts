import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-page',
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {
  public static Route = {
    path: 'services',
    title: 'Services - Tiffany Taylor',
    component: ServicesPageComponent
  }

  hairData = [
    { service: 'Ladies Cut', price: '$70.00' },
    { service: 'Mens Cut', price: '$44.00' },
    { service: 'Children (10 and under)', price: '$37.00' },
    { service: 'Shampoo & Style', price: '$53.00' },
    { service: 'Special Event Styling (Pre-Consultation Mandatory)', price: '$105.00- $180.00' },
    { service: 'Bang Trim (*complimentary with regularly scheduled clients)', price: '$15.00' },
    { service: 'Olaplex Hair Bonding Treatment (add-on)', price: '$40.00' },
    { service: 'Olaplex Hair Bonding Treatment (a la carte)', price: '$70.00' },
  ];

  colorData = [
    { service: 'Single Color', price: '$95.00' },
    { service: 'All Over Color', price: '$140.00' },
    { service: 'Two Colors (roots & highlight)', price: '$187.00' },
    { service: 'Extra color charge each additional mix (add-on only)', price: '$25.00' },
    { service: 'Partial Highlight (45 min)', price: '$110.00' },
    { service: 'Highlighting (75 min)', price: '$145.00' },
    { service: 'Ombré, Balayage, OR Color Melting', price: '$175.00' },
    { service: 'Root Shadow (add-on only)', price: '$50.00' },
    { service: 'Color Glossing (add-on)', price: '$40.00' },
    { service: 'Color Glossing (a la carte)', price: '$90.00' },
    { service: 'Six Week Blow Out (haircut included)', price: '$200.00- $350.00' },
    { service: 'Straightening System', price: '$365.00- $600.00' },
    { service: 'Corrective Color', price: '$170.00 / hour' },
    { service: 'Eyebrow Tint', price: '$22.00' }
  ];

  waxingData = [
    { service: 'Eyebrow OR Facial Waxing', price: '$20.00' },
    { service: 'Eyebrow AND Facial Waxing', price: '$32.00' }
  ];

  displayedColumns = ['service', 'price'];
  tables = [{ title: 'Hair', data: this.hairData }, { title: 'Color Services and Chemical', data: this.colorData }, { title: 'Waxing', data: this.waxingData }]
}
