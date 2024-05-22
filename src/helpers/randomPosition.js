export default function randomPosition(length) {
  const verse = Math.floor(Math.random() * 2);

  if (verse === 0) {
    // Generate a random xy coord. for the ship (horizontal)
    const positions = [];
    // eslint-disable-next-line prefer-const
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * (11 - length));
    for (let i = 0; i < length; i += 1) {
      positions[i] = [row, col];
      col += 1;
    }
    return positions;
  }

  // Generate a random xy coord. for the ship (vertical)
  const positions = [];
  let row = Math.floor(Math.random() * (11 - length));
  // eslint-disable-next-line prefer-const
  let col = Math.floor(Math.random() * 10);
  for (let i = 0; i < length; i += 1) {
    positions[i] = [row, col];
    row += 1;
  }
  return positions;
}
