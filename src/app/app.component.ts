import { Component, OnInit } from '@angular/core';
import { NavigationEnd, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Router } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,HeaderComponent,CommonModule,RouterModule,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  hideNavbar = false;
  knownRoutes = ['/', '/home', '/products'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => { 
      if (event instanceof NavigationEnd) {
        console.log('Current URL:', event.url); 
        const path = event.url.split('?')[0]; 
        this.hideNavbar = !this.knownRoutes.includes(path);
      }
    });
  }
}
