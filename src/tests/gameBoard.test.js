import GameBoard from "../gameBoard";

describe("Game board class", () => {
  const testBoard = new GameBoard();

  it("Should have a gameBoard item", () => {
    expect(testBoard).toHaveProperty("gameBoard");
  });

  it("GameBoard should be 10 by 10", () => {
    const resultBoard = testBoard.gameBoard;
    expect(resultBoard[0][0]).toStrictEqual([]);
    expect(resultBoard[9][9]).toStrictEqual([]);
  });

  it("Should have a fleet property", () => {
    expect(testBoard).toHaveProperty("fleet");
  });

  it("There should be 6 ships in the fleet", () => {
    expect(testBoard.fleet).toHaveLength(5);
  });
});
