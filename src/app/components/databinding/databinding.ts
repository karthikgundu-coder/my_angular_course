import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  myName : string = 'virat kohli';
  img_url : string = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSe1WLSz9rlUbXgL4j2ZXgPr84gYw5zXH7AB2qAha6MrOdbVp82xnt2jPbRgf0KuzNam-BOMrZd98mQ8r26DVYXDw9fNYHGFMd1-_d4n-dvcA"
  flag: boolean = false;

  addToCart() {
    alert('Your item is added to cart');
  }
}
