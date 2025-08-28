import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { Carousel } from "./components/carousel/carousel";
import { body } from "./components/body/body";
import { Footer } from "./components/footer/footer";
import { Categories } from "./components/categories/categories";

@Component({
  selector: 'app-root',
  imports: [Navbar,
    //Categories,
     //Carousel,
      body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_june_2025');
}
