export default function randomPosition(length) {
  const verse = Math.floor(Math.random() * 2);

  if (verse === 0) {
    // Generate a random xy coord. for the ship (horizontal)
    const direction = 0;
    const positions = [];
    const row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * (11 - length));
    for (let i = 0; i < length; i += 1) {
      positions[i] = [row, col];
      col += 1;
    }
    return [positions, direction];
  }

  // Generate a random xy coord. for the ship (vertical)
  const direction = 1;
  const positions = [];
  let row = Math.floor(Math.random() * (11 - length));
  const col = Math.floor(Math.random() * 10);
  for (let i = 0; i < length; i += 1) {
    positions[i] = [row, col];
    row += 1;
  }
  return [positions, direction];
}
