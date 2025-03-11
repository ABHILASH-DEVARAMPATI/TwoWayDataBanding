import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { Second}
import { RouterModule } from "@angular/router";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,FirstComponent,SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'services';
}
