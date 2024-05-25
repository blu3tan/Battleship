export default function checkCollision(coordinates, direction, board) {
  let state = false;
  coordinates.forEach((element) => {
    // Compares each generated coord. with the board state
    // returns true if even one part of the ship overlaps with another
    const [x, y] = element;
    const boardPlace = board[x][y];
    if (boardPlace.length > 0) {
      state = true;
      return;
    }

    // Checks horizontal spacing
    if (direction === 0) {
      // Check front and back side
      const start = coordinates[0][1];
      const end = coordinates[coordinates.length - 1][1];
      if (start > 0) {
        const left = board[x][start - 1];
        if (left.length > 0) state = true;
      }
      if (end < 9) {
        const right = board[x][end + 1];
        if (right.length > 0) state = true;
      }
      if (x === 0) {
        // If is in the first row checks only down
        const down = board[x + 1][y];
        if (down.length > 0) state = true;
        return;
      }
      if (x === 9) {
        // If is in the last row checks only up
        const up = board[x - 1][y];
        if (up.length > 0) state = true;
        return;
      }
      // Checks up and down
      const up = board[x - 1][y];
      const down = board[x + 1][y];
      if (up.length > 0 || down.length > 0) state = true;
      return;
    }

    // Checks vertical spacing
    if (direction === 1) {
      const start = coordinates[0][0];
      const end = coordinates[coordinates.length - 1][0];
      // Check up and down
      if (start > 0) {
        const up = board[start - 1][y];
        if (up.length > 0) state = true;
      }
      if (end < 9) {
        const down = board[end + 1][y];
        if (down.length > 0) state = true;
      }
      if (y === 0) {
        // If is in the first column checks only right
        const right = board[x][y + 1];
        if (right.length > 0) state = true;
        return;
      }
      if (y === 9) {
        // If is in the last column checks only left
        const left = board[x][y - 1];
        if (left.length > 0) state = true;
        return;
      }
      // Checks left and right
      const left = board[x][y - 1];
      const right = board[x][y + 1];
      if (left.length > 0 || right.length > 0) state = true;
    }
  });
  return state;
}
