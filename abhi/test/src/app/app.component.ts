import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecoundComponent } from './secound/secound.component';
import { ThirdComponent } from './third/third.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FirstComponent,SecoundComponent,ThirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
