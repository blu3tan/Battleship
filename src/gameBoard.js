import Ship from "./ship";
import randomPosition from "./helpers/randomPosition";
import checkCollision from "./helpers/checkCollision";

export default class GameBoard {
  constructor() {
    this.gameBoard = [];
    this.fleet = [];
    this.generateBoard();
    this.generateFleet();
    this.placeShips();
  }

  generateBoard() {
    const board = [];
    for (let i = 0; i <= 9; i += 1) {
      const column = [];
      for (let j = 0; j <= 9; j += 1) {
        column.push([null]);
      }
      board.push(column);
    }
    this.gameBoard = board;
  }

  generateFleet() {
    const carrier = new Ship(5);
    const battleShip = new Ship(4);
    const destroyer = new Ship(3);
    const submarine = new Ship(3);
    const patrol = new Ship(2);

    const newFleet = [carrier, battleShip, destroyer, submarine, patrol];
    this.fleet = newFleet;
  }
}
