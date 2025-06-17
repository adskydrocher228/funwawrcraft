import { useState } from 'react';
import './App.css';
import HeroCard from './components/HeroCard';
import GameDescription from './components/GameDescription';
import NewsList from './components/NewsList';

// Компонент RacesList осында массивты колдана отырып жасадым:
function RacesList() {
  const races = [
    { name: 'Orcs', description: 'Savage warriors from Draenor, united under the Horde.', icon: '🪓' },
    { name: 'Humans', description: 'Defenders of Azeroth, skilled in magic and steel.', icon: '🛡️' },
    { name: 'Undead', description: 'The Scourge spreads plague and terror across the land.', icon: '☠️' },
    { name: 'Night Elves', description: 'Ancient guardians of nature and the moon.', icon: '🌙' },
  ];

  return (
    <section className="mb-10">
      <h2>🏹 Playable Races</h2>
      <ul>
        {races.map((race, idx) => (
          <li key={idx} style={{ marginBottom: '1rem' }}>
            <strong>{race.icon} {race.name}</strong> — {race.description}
          </li>
        ))}
      </ul>
    </section>
  );
}

const heroes = [
  {
    name: 'Arthas Menethil',
    role: 'Death Knight',
    image: 'https://beagamecharacter.com/wp-content/uploads/2016/12/ArthasSpotlight.jpg',
  },
  {
    name: 'Thrall',
    role: 'Warchief of the Horde',
    image: 'https://warcraft.wiki.gg/images/thumb/d/d6/Thrall_-_The_War_Within.png/800px-Thrall_-_The_War_Within.png?5f0b41',
  },
  {
    name: 'Jaina Proudmoore',
    role: 'Archmage',
    image: 'https://warcraft.wiki.gg/images/thumb/8/88/HSKT_Jaina.jpg/800px-HSKT_Jaina.jpg?d11e7e',
  },
];

function App() {
  const [news] = useState([
    'The Scourge returns in the new campaign!',
    'Patch 1.34 brings new balance changes.',
    'Arthas mini-series coming in July.',
  ]);

  return (
    <div>
      <header>
        <h1>⚔️ Warcraft III Legacy</h1>
        <p>Experience the rise and fall of heroes...</p>
      </header>

      <main>
        <GameDescription />

        <RacesList /> {/* устидеги массив элементтери*/}

        

        <section className="mb-10">
          <h2>🛡️ Legendary Heroes</h2>
          <div className="hero-grid">
            {heroes.map((hero, index) => (
              <HeroCard key={index} {...hero} />
            ))}
          </div>
        </section>

        <NewsList news={news} />
      </main>

      <footer>
        © 2025 Warcraft III Fan Site. All rights reserved. а вы уверены, что хотите продолжить? <br />
        <a href="https://www.blizzard.com/">Blizzard Entertainment</a>
      </footer>
    </div>
  );
}

export default App;
