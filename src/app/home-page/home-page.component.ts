import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public static Route = {
    path: 'home',
    title: 'Home - Tiffany Taylor',
    component: HomePageComponent
  }

  width = window.innerWidth

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth
  }
}
