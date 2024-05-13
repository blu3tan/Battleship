import GameBoard from "../gameBoard";

describe("Game board class", () => {
  const testBoard = new GameBoard();

  it("Should have a board item", () => {
    expect(testBoard).toHaveProperty("gameBoard");
  });

  it("Should have x/y coordinates", () => {
    const resultBoard = testBoard.gameBoard;
    expect(resultBoard[0][0]).toStrictEqual([]);
    expect(resultBoard[9][9]).toStrictEqual([]);
  });
});
