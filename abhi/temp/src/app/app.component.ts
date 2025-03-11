import { CurrencyPipe, NgFor } from '@angular/common'; 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowerCasePipe,UpperCasePipe } from '@angular/common';
{ CurrencyPipe, DataPipe } from '@angular/common';
@Component9{
  selector: 'app-root',
  imports: [RouterOutlet,NgFor,LowerCasePipe,UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp';
  company="naresh it"
  name='sHivam'
  price=89456.76757656;
  data='2025-12-23'

  }


