const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("When payment is 5 and total is 6, then change will be 1", () => {
    //Arrange
    const total = 5;
    const payment = 6;
    //Act
    const change = calculateChange(payment, total);
    //Assert
    expect(change).toBe(1);
  });

  test("When payment is 13.03 and total is 12.30, then change will be 0.73", () => {
    //Arrange
    const total = 12.3;
    const payment = 13.03;
    //Act
    const change = calculateChange(payment, total);
    //Assert
    expect(change).toBeCloseTo(0.73);
  });

  test("When payment is 25 and total is 20, then change will be 5", () => {
    //Arrange
    const total = 20;
    const payment = 25;
    //Act
    const change = calculateChange(payment, total);
    //Assert
    expect(change).toBe(5);
  });
});

describe("isSufficientPayment", () => {
  test("When payment is 25 and total is 20, expect isSufficientPayment to return true", () => {
    //Arrange
    const total = 20;
    const payment = 25;
    //Act
    const isSufficient = isSufficientPayment(payment, total);
    //Assert
    expect(isSufficient).toBe(true);
  });
});

describe("calculateTotal", () => {
  test("Calculates the total with one item", () => {
    //Arrange
    const items = [{ name: "Ball", price: 4.99 }];
    //Act
    const total = calculateTotal(items);
    //Assert
    expect(total).toEqual(4.99);
  });

  test("Calculates the total with three items", () => {
    //Arrange
    const items = [
      { name: "Socks", price: 3.5 },
      { name: "Skates", price: 12.99 },
      { name: "Candy", price: 0.03 },
    ];
    //Act
    const total = calculateTotal(items);
    //Assert
    expect(total).toBeCloseTo(16.52);
  });

  test("Calculates the total and expect to be 0", () => {
    //Arrange
    const items = [];
    //Act
    const total = calculateTotal(items);
    //Assert
    expect(total).toBe(0);
  });

  test("Calculates the total with three items", () => {
    //Arrange
    const items = [
      { name: "Socks", price: 3.0 },
      { name: "Skates", price: 12.0 },
      { name: "Candy", price: 10.0 },
      { name: "Shorts", price: 3.0 },
    ];
    //Act
    const total = calculateTotal(items);
    //Assert
    expect(total).toBeCloseTo(28.0);
  });
});

describe("addItem", () => {
  // test.todo("add addItem tests here");
  test("Adds an item to empty array", () => {
    //Arrange
    let itemsArray = [];
    let name = "Beans";
    let price = 3;
    //Act
    addItem(itemsArray, name, price);
    //Assert
    expect(itemsArray).toContainEqual({ name: "Beans", price: 3 });
  });

  test("Adds an item to the array, and checks the length of the array", () => {
    //Arrange
    let itemsArray = [{ name: "Beans", price: 3 }];
    let name = "Sugar";
    let price = 2;
    //Act
    addItem(itemsArray, name, price);
    //Assert
    expect(itemsArray).toContainEqual({ name: "Beans", price: 3 });
    expect(itemsArray).toContainEqual({ name: "Sugar", price: 2 });
    expect(itemsArray).toHaveLength(2);
  });

  test("Adds an item to item array, and checking for 4 items", () => {
    //Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Potatoes", price: 7 },
      { name: "Tomatoes", price: 2 },
    ];
    let name = "Juice";
    let price = 5;
    //Act
    addItem(itemsArray, name, price);
    //Assert
    expect(itemsArray).toHaveLength(4);
  });
});

describe("removeItem", () => {
  test("removing the first item from array", () => {
    //Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Potatoes", price: 7 },
      { name: "Tomatoes", price: 2 },
    ];
    //Act
    removeItem(itemsArray, 0);
    //Assert
    expect(itemsArray).not.toContainEqual({ name: "Beans", price: 3 });
  });

  test("removing the last item from array", () => {
    //Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Potatoes", price: 7 },
      { name: "Tomatoes", price: 2 },
    ];
    //Act
    removeItem(itemsArray, 2);
    //Assert
    expect(itemsArray).not.toContainEqual({ name: "Tomatoes", price: 2 });
  });

  test("removing the middle item from array", () => {
    //Arrange
    let itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Potatoes", price: 7 },
      { name: "Tomatoes", price: 2 },
    ];
    //Act
    removeItem(itemsArray, 1);
    //Assert
    expect(itemsArray).not.toContainEqual({ name: "Potatoes", price: 7 });
  });
});
