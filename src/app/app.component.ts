import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InicioComponent,
    ProyectosComponent,
    ContactoComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
