export function calculateCartTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

export function applyDiscount(total, discountPercent) {
  return total - total * (discountPercent / 100);
}

export function calculateTax(total, taxPercent) {
  return total * (taxPercent / 100);
}
