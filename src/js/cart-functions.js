function calculateChange(payment, total) {
  return payment - total;
}

function isSufficientPayment(payment, total) {
  //REFACTORED

  //   if (payment >= total) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // ANOTHER OPTION
  // return payment >= total ? true : false;

  // ANOTHER OPTION
  return payment >= total;
}

// ANOTHER WAY TO WRITE LINES 5-18
// const isSufficientPayment = (payment, total) => payment >= total;

function calculateTotal(itemsArray) {
  let sum = 0;
  itemsArray.forEach((item) => (sum += item.price));
  return sum;
}

function addItem(itemsArray, name, price) {
  const newItem = new Object();
  newItem.name = name;
  newItem.price = price;
  itemsArray.push(newItem);
}

function removeItem(itemsArray, index) {
  itemsArray.splice(index, 1);
}

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
