import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Sara</h3>
            <p>Cloud & DevOps Engineer | Building scalable infrastructure</p>
          </div>

          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank">GitHub</a></li>
              <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2024 Sarah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--gray-900);
      border-top: 1px solid var(--gray-700);
      margin-top: 4rem;
    }

    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem 1rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3 {
      font-size: 1.5rem;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .footer-section h4 {
      color: white;
      margin-bottom: 1rem;
    }

    .footer-section p {
      color: var(--gray-400);
      line-height: 1.6;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section li {
      margin-bottom: 0.5rem;
    }

    .footer-section a {
      color: var(--gray-400);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .footer-section a:hover {
      color: var(--bright-blue);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid var(--gray-700);
      color: var(--gray-700);
    }
  `]
})
export class FooterComponent {}
