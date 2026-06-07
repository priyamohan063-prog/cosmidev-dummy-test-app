import products from "./data/products.json" assert { type: "json" };
import { calculateCartTotal, applyDiscount } from "./lib/cart.js";

const demoCart = [
  { productId: "p1", price: 1200, quantity: 2 },
  { productId: "p2", price: 4500, quantity: 1 }
];

const subtotal = calculateCartTotal(demoCart);
const totalAfterDiscount = applyDiscount(subtotal, 10);

console.log("CosmiDev Dummy Test App");
console.log("Products:", products.length);
console.log("Subtotal:", subtotal);
console.log("Total after discount:", totalAfterDiscount);
