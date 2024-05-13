function generateBoard() {
  const board = [];
  for (let i = 0; i <= 9; i += 1) {
    const column = [];
    for (let j = 0; j <= 9; j += 1) {
      column.push([]);
    }
    board.push(column);
  }
  return board;
}

export default class GameBoard {
  constructor() {
    this.gameBoard = generateBoard();
  }
}
