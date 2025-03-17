import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobile: boolean = window.innerWidth < 600;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 600;
  }
}
