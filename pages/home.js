import { header } from '../components/header.js';
import { navbar } from '../components/navbar.js';
import { progress } from '../components/main.js';

export function HomePage() {
  return `<main class="main">
            ${header()}
            <div class="nav-progress">
              ${navbar()}
              ${main()}
            </div>
          </main>`;
}
