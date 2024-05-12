import Ship from "../ship";

describe("Ship class", () => {
  const newShip = new Ship(5);
  it("Basic ship object", () => {
    expect(newShip).toHaveProperty("length", 5);
    expect(newShip).toHaveProperty("hitCount", 0);
    expect(newShip).toHaveProperty("sunk", false);
  });

  it("Has an hit function that increase the hits number", () => {
    newShip.hit();
    expect(typeof newShip.hit).toBe("function");
    expect(newShip.hitCount).toBe(1);
  });

  it("Has an isSunk function, starts as false", () => {
    expect(typeof newShip.hit).toBe("function");
    expect(newShip.isSunk()).toBe(false);
  });

  it("If number of hits is equal to length isSunk returns true", () => {
    const shipToSunk = new Ship(1);
    shipToSunk.hit();
    expect(shipToSunk.isSunk()).toBe(true);
  });
});
