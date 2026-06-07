import { calculateCartTotal, applyDiscount } from "../lib/cart.js";

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${expected}, got ${actual}`);
  }
  console.log(`✓ ${label}`);
}

assertEqual(
  calculateCartTotal([
    { price: 100, quantity: 2 },
    { price: 50, quantity: 3 }
  ]),
  350,
  "calculates cart total"
);

assertEqual(
  applyDiscount(1000, 10),
  900,
  "applies percentage discount"
);
