import { calculateCartTotal, applyDiscount, calculateTax } from "../lib/cart.js";

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

assertEqual(
  calculateTax(200, 10),
  20,
  "calculates tax for a positive total and percent"
);

assertEqual(
  calculateTax(350, 0),
  0,
  "returns 0 tax when taxPercent is zero"
);

assertEqual(
  calculateTax(100, -5),
  0,
  "returns 0 when taxPercent is negative"
);

assertEqual(
  calculateTax("100", 10),
  0,
  "returns 0 when total is not a finite number"
);

assertEqual(
  calculateTax(100, NaN),
  0,
  "returns 0 when taxPercent is not finite"
);
