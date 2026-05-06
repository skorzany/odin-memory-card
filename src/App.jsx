import { useState, useEffect } from 'react';
import { getNRandomInt } from './utils/rng.js';
import Card from './components/Card.jsx';
import './assets/styles/reset.css';
import './assets/styles/App.css';

export default function App() {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    let ignore = false;
    const getCachedData = () => {
      const cache = JSON.parse(sessionStorage.getItem('skorzanys_memory_game'));
      setPokemon(cache);
      return cache;
    };
    async function fetchData() {
      const ids = getNRandomInt(1, 1025, 12);
      const URL = 'https://pokeapi.co/api/v2/pokemon';
      try {
        const promises = ids.map((id) =>
          fetch(`${URL}/${id}/`).then((response) => response.json()),
        );
        const responses = await Promise.all(promises);
        const results = [];
        responses.forEach((response) => {
          const altSprite =
            response.sprites.other['official-artwork'].front_default;
          const obj = {
            id: response.id,
            name: response.name.toUpperCase(),
            types: response.types.map((obj) => obj.type.name),
            spriteSource:
              response.sprites.other.dream_world.front_default ?? altSprite,
          };
          results.push(obj);
        });
        sessionStorage.setItem(
          'skorzanys_memory_game',
          JSON.stringify(results),
        );
        if (!ignore) setPokemon(results);
      } catch {
        setPokemon('ERROR');
      }
    }
    const cache = getCachedData();
    if (cache === null) fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <>
      <header>
        <h1>POKÉMON memory game</h1>
        <div className="scoreboard">
          <h3 className="streak">Streak: 0</h3>
          <h3 className="score">Score: 0</h3>
        </div>
        <div className="pokeball-outer">
          <div className="pokeball-inner"></div>
        </div>
      </header>
      <main>
        <ul className="grid">
          {pokemon === 'ERROR' && (
            <li className="error">Something wrong happened.</li>
          )}
          {pokemon === null && <li className="loader"></li>}
          {Array.isArray(pokemon) &&
            pokemon.map((obj) => (
              <li key={obj.id}>
                <Card {...obj}></Card>
              </li>
            ))}
        </ul>
      </main>
      <footer>
        <a href="https://github.com/skorzany/">&copy; 2026 Skorzany</a>
      </footer>
    </>
  );
}
