import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-root',

  imports: [
    NgIf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  menuOpen = false;

  scrollDirection: 'up' | 'down' = 'up';
  showScrollArrow = false;

  private lastScrollPosition = 0;


  /* =================================
     DETECT SCROLL DIRECTION
  ================================= */

  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    const currentScrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;


    /* ===============================
       AT THE TOP
    =============================== */

    if (currentScrollPosition <= 10) {

      this.showScrollArrow = false;

      this.lastScrollPosition = currentScrollPosition;

      return;
    }


    /* ===============================
       AT THE BOTTOM
    =============================== */

    if (currentScrollPosition >= maxScroll - 10) {

      this.showScrollArrow = false;

      this.lastScrollPosition = currentScrollPosition;

      return;
    }


    /* ===============================
       SCROLLING DOWN
       SHOW UP ARROW
    =============================== */

    if (currentScrollPosition > this.lastScrollPosition) {

      this.scrollDirection = 'up';

    }


    /* ===============================
       SCROLLING UP
       SHOW DOWN ARROW
    =============================== */

    else if (currentScrollPosition < this.lastScrollPosition) {

      this.scrollDirection = 'down';

    }


    this.showScrollArrow = true;

    this.lastScrollPosition = currentScrollPosition;
  }


  /* =================================
     HANDLE ARROW CLICK
  ================================= */

  handleScrollAction(): void {

    if (this.scrollDirection === 'up') {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

    }

    else {

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });

    }
  }

}