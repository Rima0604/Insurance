import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from "../carousel/carousel.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLink, CarouselComponent]
})
export class HomeComponent {
  

}
