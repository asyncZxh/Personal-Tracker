import header from '../components/header.js';
import navbar from '../components/navbar.js';
import main from '../components/main.js';

export function HomePage() {
  return `<main class="main">
            <header>${header()}</header>
          </main>`;
}
