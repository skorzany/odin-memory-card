# odin-memory-card

A small memory game, made in React. The design is responsive, but some features are desktop-exclusive.<br/>You can play the game at [this link](https://odin-memory-card-iota.vercel.app/).

## Game rules

The game randomly picks twelve distinct Pokemon from [PokeAPI](https://pokeapi.co/docs/v2), and caches the data using sessionStorage.<br/>
The data is then presented in the form of clickable cards, with additional information available on hover (desktop-only).<br/>
The goal of the game is to pick a unique Pokemon every round, with the number of correct picks measured as <b><em>streak</em></b>.<br/>
Achieving a 12-streak counts as a <b><em>win</em></b>, but picking a card that was already selected sets the <b><em>streak</em></b> back to 0.<br/>
To spice things up, the order of cards is randomized every round.<br/><br/>
Due to randomness, every game session is different. There are up to 1025 different Pokemon to chose from.<br/>
The rules are simple, but it's not as easy as you might expect at first!<br/>

## Additional information

- all data comes from [PokeAPI](https://pokeapi.co/),
- fonts are the courtesy of [dataFont](https://www.dafont.com/pokemon.font) and [fontspace](https://www.fontspace.com/pokemon-gb-font-f9621),
- Pokémon © 2002-2026 Pokémon. © 1995-2026 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.<br/><br/>

I hope that you like it!
