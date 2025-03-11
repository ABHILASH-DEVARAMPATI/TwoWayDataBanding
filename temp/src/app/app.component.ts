import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp';

  items =[
    {img:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/g/c/-original-imah3g32gf2wkdes.jpeg?q=70&crop=false', 
    name:'Infinix Note 40X 5G (Palm Blue, 256 GB)  (12 GB RAM)', price:'₹15,999'
  },   
    {img:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/y/x/-original-imah3xk8crpgrg9y.jpeg?q=70&crop=false', name:'Motorola g45 5G (Brilliant Green, 128 GB)  (8 GB RAM)', price:'₹15,999'},
    {
      img:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70&crop=false',
      name:'SAMSUNG Galaxy F05 (Twilight Blue, 64 GB)  (4 GB RAM)',
      price:'₹6,249'
    }
  ]

  specs=[
      '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB','17.12 cm (6.74 inch) HD+ Display'
    ]
  
}