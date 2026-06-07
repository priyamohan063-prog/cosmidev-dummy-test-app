export function calculateCartTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

export function applyDiscount(total, discountPercent) {
  return total - total * (discountPercent / 100);
}

export function calculateTax(total, taxPercent) {
  if (!Number.isFinite(total) || !Number.isFinite(taxPercent) || taxPercent < 0) {
    return 0;
  }
  return total * (taxPercent / 100);
}
