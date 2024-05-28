import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { HeroComponent } from "../../components/hero/hero.component";
import { RouterLink } from '@angular/router';
import { ProyectosComponent } from "../proyectos/proyectos.component";

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [FooterComponent, NavBarComponent, HeroComponent, RouterLink, ProyectosComponent]
})
export class InicioComponent {

}
