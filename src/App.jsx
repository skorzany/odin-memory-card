import './assets/styles/reset.css';
import './assets/styles/App.css';

export default function App() {
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
        <ul className="grid"></ul>
      </main>
      <footer>
        <a href="https://github.com/skorzany/">&copy; 2026 Skorzany</a>
      </footer>
    </>
  );
}
