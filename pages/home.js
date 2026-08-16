import { header } from '../components/header.js';
import { navbar } from '../components/navbar.js';
import { progressBar, progressCircular } from '../components/progress.js';

export function HomePage() {
  return `<main class="main">
            ${header()}
            <div class="nav-progress">
              ${navbar()}
              ${progressBar()}
            </div>
          </main>`;
}
