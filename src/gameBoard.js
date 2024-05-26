import Ship from "./ship";
import randomPosition from "./helpers/randomPosition";
import checkCollision from "./helpers/checkCollision";

export default class GameBoard {
  constructor() {
    this.gameBoard = [];
    this.fleet = [];
    this.generateBoard();
    this.generateFleet();
    this.placeFleet(this.fleet);
  }

  generateBoard() {
    const board = [];
    for (let i = 0; i <= 9; i += 1) {
      const column = [];
      for (let j = 0; j <= 9; j += 1) {
        column.push([]);
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

  placeFleet(fleet) {
    fleet.forEach((ship) => this.randomPlaceShip(this.gameBoard, ship.length));
  }

  randomPlaceShip(board, length) {
    // Generate a random xy coord. for the ship
    const [position, direction] = randomPosition(length);

    // Checks if the entire ship can be placed in the board
    // without overlapping with another
    const collision = checkCollision(position, direction, board);
    if (collision) return this.randomPlaceShip(board, length);

    position.forEach((place) => {
      board[place[0]][place[1]].push(0);
    });
    return true;
  }

  receiveAttack(coordinates, board = this.gameBoard) {
    const [x, y] = coordinates;
    const target = board[x][y];
    if (!target.length) return target.push("-");
    if (target[0] >= 0 && target[0] < this.fleet.length) {
      const ship = this.fleet[target[0]];
      ship.hit();
      target[0] = "X";
    }
    return false;
  }

  checkDefeat(fleet = this.fleet) {
    let count = 0;
    fleet.forEach((ship) => {
      const sunk = ship.isSunk();
      if (sunk) count += 1;
    });
    if (count === fleet.length) return true;
    return false;
  }
}
