function getRandomIntInclusive(min, max) {
  // generate random integer in range <min, max>
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getNRandomInt(min, max, n) {
  // return an array of n unique random integers in range <min, max>
  const mySet = new Set();
  while (mySet.size < n) {
    const newInt = getRandomIntInclusive(min, max);
    mySet.add(newInt);
  }
  return Array.from(mySet);
}

function shuffleArray(array) {
  // shuffle an array in place using Durstenfeld algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export { getNRandomInt, shuffleArray };
