//Email Validation Function
function validateEmail(email: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format check
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format. Please enter a valid email address.");
    }
  }
  
  // Example usage
  const userEmail = "user@example.com";
  
  try {
    validateEmail(userEmail);
    console.log("Valid email address.");
  } catch (error) {
    console.error(error.message);
  }
  
  