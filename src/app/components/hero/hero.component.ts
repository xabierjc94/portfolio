import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
