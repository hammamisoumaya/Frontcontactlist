import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header>
        <h1>Mon site web React</h1>
        <nav>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2>Bienvenue sur mon site web React</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, felis ut blandit ultricies, arcu nulla feugiat purus, sed hendrerit eros risus eu enim.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu quam lacinia, consequat velit ut, vehicula mauris. Duis dictum eget elit nec vehicula.</p>
      </main>

      <footer>
        <p>&copy; 2023 Mon site web React</p>
      </footer>
    </div>
  );
}

export default Home;