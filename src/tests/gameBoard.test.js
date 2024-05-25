import GameBoard from "../gameBoard";

describe("Game board class", () => {
  const testBoard = new GameBoard();
  const resultBoard = testBoard.gameBoard;

  it("Should have a gameBoard item", () => {
    expect(testBoard).toHaveProperty("gameBoard");
  });

  it("GameBoard should be 10 by 10", () => {
    expect(resultBoard.length).toBe(10);
  });

  it("Should have a fleet item", () => {
    expect(testBoard).toHaveProperty("fleet");
  });

  it("There should be 6 ships in the fleet", () => {
    expect(testBoard.fleet).toHaveLength(5);
  });

  it("Should have a placeFleet method", () => {
    expect(testBoard).toHaveProperty("placeFleet");
  });

  it("Should have a total of 17 ship cell placed", () => {
    let result = 0;
    resultBoard.forEach((row) => {
      row.forEach((column) => {
        if (column.length > 0) result += 1;
      });
    });
    expect(result).toBe(17);
  });
});
