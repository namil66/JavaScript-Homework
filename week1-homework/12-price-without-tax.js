const calculateOriginalPrice = function (priceWithTax) {
  return (priceWithoutTax = priceWithTax / (1 + 0.033));
};

console.log(calculateOriginalPrice(10_000));
