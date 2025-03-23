function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(120, 50));
console.log(makeTransaction(80, 20));
console.log(makeTransaction(100, 20));
