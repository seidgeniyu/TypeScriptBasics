//Sum of Array Elements
function sumArray(numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  // Example usage
  const numbers = [2, 5, 8, 1, 3];
  const arraySum = sumArray(numbers);
  
  console.log("Sum of the array:", arraySum);
  
  //Shopping Cart Simulation
  let shoppingCart: string[] = [];

function addToCart(item: string): void {
  shoppingCart.push(item);
  console.log(`${item} added to cart.`);
}

function removeFromCart(item: string): void {
  const index = shoppingCart.indexOf(item);
  if (index !== -1) {
    shoppingCart.splice(index, 1);
    console.log(`${item} removed from cart.`);
  } else {
    console.log(`${item} not found in cart.`);
  }
}

function displayCart(): void {
  if (shoppingCart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    console.log("Items in your cart:");
    for (const item of shoppingCart) {
      console.log("-", item);
    }
  }
}

// Example usage
addToCart("Milk");
addToCart("Bread");
addToCart("Eggs");
removeFromCart("Eggs");
displayCart();
addToCart("Apples");
displayCart();
