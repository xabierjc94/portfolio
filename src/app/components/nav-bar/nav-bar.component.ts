import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProyectosComponent } from '../../pages/proyectos/proyectos.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,ProyectosComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  router = inject(Router)
}
