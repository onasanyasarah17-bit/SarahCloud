import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.dark-mode]="isDarkMode()">
      <div class="nav-container">
        <div class="nav-brand">
          <a routerLink="/" class="logo">Sarah</a>
        </div>

        <button
          class="mobile-toggle"
          (click)="toggleMenu()"
          [attr.aria-expanded]="isMenuOpen()"
          aria-label="Toggle navigation menu"
        >
          <span class="hamburger"></span>
        </button>

        <div class="nav-links" [class.open]="isMenuOpen()">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            class="nav-link"
            (click)="closeMenu()"
          >
            Home
          </a>
          <a
            routerLink="/about"
            routerLinkActive="active"
            class="nav-link"
            (click)="closeMenu()"
          >
            About
          </a>
          <a
            routerLink="/projects"
            routerLinkActive="active"
            class="nav-link"
            (click)="closeMenu()"
          >
            Projects
          </a>
          <a
            routerLink="/skills"
            routerLinkActive="active"
            class="nav-link"
            (click)="closeMenu()"
          >
            Skills
          </a>
          <a
            routerLink="/experience"
            routerLinkActive="active"
            class="nav-link"
            (click)="closeMenu()"
          >
            Experience
          </a>
          <a
            routerLink="/blog"
            routerLinkActive="active"
            class="nav-link"
            (click)="closeMenu()"
          >
            Blog
          </a>
          <a
            routerLink="/certificates"
            routerLinkActive="active"
            class="nav-link"
            (click)="closeMenu()"
          >
            Certificates
          </a>
          <a
            routerLink="/contact"
            routerLinkActive="active"
            class="nav-link nav-link-cta"
            (click)="closeMenu()"
          >
            Contact
          </a>
        </div>

        <button
          class="theme-toggle"
          (click)="toggleDarkMode()"
          [attr.aria-label]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          @if (isDarkMode()) {
            <span>☀️</span>
          } @else {
            <span>🌙</span>
          }
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--gray-900);
      border-bottom: 1px solid var(--gray-700);
      transition: all 0.3s ease;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand {
      flex-shrink: 0;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-decoration: none;
      transition: transform 0.3s ease;
    }

    .logo:hover {
      transform: scale(1.05);
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
      flex: 1;
      justify-content: center;
      margin: 0 2rem;
    }

    .nav-link {
      color: var(--gray-400);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-link:hover {
      color: var(--bright-blue);
    }

    .nav-link.active {
      color: var(--vivid-pink);
    }

    .nav-link-cta {
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      padding: 0.5rem 1rem;
      border: 1px solid var(--bright-blue);
      border-radius: 0.25rem;
      color: var(--bright-blue) !important;
    }

    .theme-toggle {
      background: transparent;
      border: 1px solid var(--gray-700);
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }

    .theme-toggle:hover {
      border-color: var(--bright-blue);
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      background: transparent;
      border: none;
      cursor: pointer;
      gap: 0.35rem;
    }

    .hamburger {
      width: 1.5rem;
      height: 0.15rem;
      background: var(--gray-400);
      border-radius: 0.1rem;
      display: block;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-wrap: wrap;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--gray-900);
        border-bottom: 1px solid var(--gray-700);
        flex-direction: column;
        gap: 1rem;
        margin: 0;
        padding: 2rem;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      .nav-links.open {
        max-height: 500px;
      }

      .mobile-toggle {
        display: flex;
        order: 2;
      }

      .theme-toggle {
        order: 3;
      }
    }
  `]
})
export class NavigationComponent {
  isDarkMode = signal(true);
  isMenuOpen = signal(false);

  toggleDarkMode() {
    this.isDarkMode.update((mode) => !mode);
    // Apply theme to document
    if (this.isDarkMode()) {
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.style.colorScheme = 'light';
    }
  }

  toggleMenu() {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
