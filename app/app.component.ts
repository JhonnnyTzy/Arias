import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from "./slider/slider.component";
import { MenuComponent } from "./menu/menu.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SliderComponent, MenuComponent, BodyComponent, FooterComponent]
})
export class AppComponent {
  title = 'proyv11';
}
