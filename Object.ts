//Book Object
class Book {
    title: string;
    author: string;
    genre: string;
  
    constructor(title: string, author: string, genre: string) {
      this.title = title;
      this.author = author;
      this.genre = genre;
    }
  
    displayInfo(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Genre: ${this.genre}`);
    }
  
    updateGenre(newGenre: string): void {
      this.genre = newGenre;
      console.log(`Genre updated to: ${this.genre}`);
    }
  }
  
  // Example usage
  const book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", "Fantasy");
  book1.displayInfo();
  book1.updateGenre("Epic Fantasy");
  

  //Online Store Product:
  class Product {
    name: string;
    price: number;
    description: string;
    stockQuantity: number;
    cartQuantity: number = 0; // Tracks quantity added to cart
  
    constructor(
      name: string,
      price: number,
      description: string,
      stockQuantity: number
    ) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.stockQuantity = stockQuantity;
    }
  
    displayDetails(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Price: $${this.price}`);
      console.log(`Description: ${this.description}`);
      console.log(`Stock quantity: ${this.stockQuantity}`);
    }
  
    addToCart(quantity: number): void {
      if (quantity > this.stockQuantity) {
        console.log(`Insufficient stock. Only ${this.stockQuantity} available.`);
      } else {
        this.cartQuantity += quantity;
        this.stockQuantity -= quantity;
        console.log(`${quantity} ${this.name}(s) added to cart.`);
      }
    }
  
    removeFromCart(quantity: number): void {
      if (quantity > this.cartQuantity) {
        console.log(`Cannot remove more than ${this.cartQuantity} items from cart.`);
      } else {
        this.cartQuantity -= quantity;
        this.stockQuantity += quantity;
        console.log(`${quantity} ${this.name}(s) removed from cart.`);
      }
    }
  }
  
  // Example usage
  const product1 = new Product("T-Shirt", 19.99, "A comfortable cotton T-Shirt", 10);
  product1.displayDetails();
  
  product1.addToCart(2);
  console.log("Cart:");
  product1.displayDetails(); // Shows updated stock quantity
  
  product1.removeFromCart(1);
  console.log("Cart after removing:");
  