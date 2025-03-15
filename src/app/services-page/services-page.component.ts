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
    { service: 'Ladies Cut', price: '$61.00' },
    { service: 'Mens Cut', price: '$41.00' },
    { service: 'Children (10 and under)', price: '$31.00' },
    { service: 'Shampoo & Style', price: '$50.00' },
    { service: 'Special Event Styling (Pre-Consultation Mandatory)', price: '$100.00- $175.00' },
    { service: 'Bang Trim (*complimentary with regularly scheduled clients)', price: '$15.00' },
    { service: 'Olaplex Hair Bonding Treatment (add-on)', price: '$35.00' },
    { service: 'Olaplex Hair Bonding Treatment (a la carte)', price: '$65.00' },
  ];

  colorData = [
    { service: 'Single Color', price: '$90.00' },
    { service: 'Two Colors (roots & highlight)', price: '$165.00' },
    { service: 'Extra color charge each additional mix (add-on only)', price: '$20.00' },
    { service: 'Highlighting', price: '$125.00' },
    { service: 'Ombré, Balayage, OR Color Melting', price: '$170.00' },
    { service: 'Root Shadow (add-on only)', price: '$40.00' },
    { service: 'Color Glossing (add-on)', price: '$35.00' },
    { service: 'Color Glossing (a la carte)', price: '$75.00' },
    { service: 'Mens Color', price: '$55.00' },
    { service: 'Mens Highlighting', price: '$105.00' },
    { service: 'Six Week Blow Out (haircut included)', price: '$180.00- $300.00' },
    { service: 'Straightening System', price: '$325.00- $575.00' },
    { service: 'Corrective Color', price: '$150.00 / hour' },
    { service: 'Eyebrow Tint', price: '$18.00' }
  ];

  waxingData = [
    { service: 'Facial Waxing', price: '$18.00' }
  ]

  displayedColumns = ['service', 'price'];
  tables = [{ title: 'Hair', data: this.hairData }, { title: 'Color Services and Chemical', data: this.colorData }, { title: 'Waxing', data: this.waxingData }]
}
