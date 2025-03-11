import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'', component:SignupComponent},
    {path:'login', component:LoginComponent},
    {path:'home', component:HomeComponent},
    {path:'**', redirectTo:'', pathMatch:'full'}
];