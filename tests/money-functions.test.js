const { formatCurrency, getCoins } = require("../src/js/money-functions.js");

describe("formatCurrency", () => {
  test("Given 0 returning with the amount $0.00", () => {
    //Arrange
    let amount = 0;
    //Act
    const returnsAmount = formatCurrency(amount);
    //Assert
    expect(returnsAmount).toBe("$0.00");
  });

  test("Given 1 returning with the amount $1.00", () => {
    //Arrange
    let amount = 1;
    //Act
    const returnsAmount = formatCurrency(amount);
    //Assert
    expect(returnsAmount).toBe("$1.00");
  });

  test("Given 1.5 returning with the amount $1.50", () => {
    //Arrange
    let amount = 1.5;
    //Act
    const returnsAmount = formatCurrency(amount);
    //Assert
    expect(returnsAmount).toBe("$1.50");
  });

  test("Given 0.01 returning with the amount $0.01", () => {
    //Arrange
    let amount = 0.01;
    //Act
    const returnsAmount = formatCurrency(amount);
    //Assert
    expect(returnsAmount).toBe("$0.01");
  });

  test("Given 527.6789 returning with the amount $527.68", () => {
    //Arrange
    let amount = 527.6789;
    //Act
    const returnsAmount = formatCurrency(amount);
    //Assert
    expect(returnsAmount).toBe("$527.68");
  });

  test("Given -1 returning with the amount -$1.00", () => {
    //Arrange
    let amount = -1;
    //Act
    const returnsAmount = formatCurrency(amount);
    // const results = Math.ceil((amount * 100) / 100);
    //Assert
    expect(returnsAmount).toBe("-$1.00");
  });
});

describe("getCoins", () => {
  test("getting 32 cents back in change", () => {
    let cents = 32;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 1,
      dimes: 0,
      nickles: 1,
      pennies: 2,
    });
  });

  test("getting 10 cents back in change", () => {
    let cents = 10;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 0,
      dimes: 1,
      nickles: 0,
      pennies: 0,
    });
  });

  test("getting 27 cents back in change", () => {
    let cents = 27;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 1,
      dimes: 0,
      nickles: 0,
      pennies: 2,
    });
  });

  test("getting 68 cents back in change", () => {
    let cents = 68;
    const countCents = getCoins(cents);
    expect(countCents).toEqual({
      quarters: 2,
      dimes: 1,
      nickles: 1,
      pennies: 3,
    });
  });
});
