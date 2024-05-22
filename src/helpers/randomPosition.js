export default function randomPlaceShip(board, ship, horizontal = true) {
  if (horizontal) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * (10 - ship.length));
    const result = board[row][col];
    console.log(result);
    return [row, col];
  }
}
