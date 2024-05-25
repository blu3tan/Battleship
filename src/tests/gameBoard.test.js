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
});
