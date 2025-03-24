import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import '../app.routes'

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  navbarHeight: number = 80

  isLoggedIn: boolean = false
  isShowDropMenu: boolean = false

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('token') != null
  }

  getItems(): String[] {
    return this.isLoggedIn ?  
      ['Feed', 'Library', 'Profile', 'Logout'] :
      ['Login', 'Signup']
  }

}
