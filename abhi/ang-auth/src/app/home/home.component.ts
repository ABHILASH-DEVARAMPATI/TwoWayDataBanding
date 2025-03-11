import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {signOut } from "firebase/auth";
import {auth} from '../firebase'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}

  books = [
    {
      img:'https://m.media-amazon.com/images/I/419aJfhczCL._SY445_SX342_.jpg',
      title:'Atomic Habits',
      src:'/assets/Atomic-Habits.pdf'
    },
    {
      img:'https://m.media-amazon.com/images/I/41BFrtvpNwS._SY445_SX342_.jpg',
      title:'Pyschology of Money',
      src:'/assets/money.pdf'
    },
    {
      img:'https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY445_SX342_.jpg',
      title:'Rich Dad Poor Dad',
      src:'/assets/rich-dad-poor-dad.pdf'
    },
    {
      img:'/assets/subtle.jpg',
      title:'The Subtle Art Of Not Giving A',
      src:'/assets/the-subtle.pdf'
    },
    {
      img:'https://m.media-amazon.com/images/I/51iYKH6bxeL._SY445_SX342_.jpg',
      title:'Wings of Fire',
      src:'/assets/rich-dad-poor-dad.pdf'
    }
  ]

  signOut(){
    this.router.navigate(['/login'])
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

   
  }
}