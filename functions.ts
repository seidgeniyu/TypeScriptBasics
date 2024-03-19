//Sum of Two Numbers
function sum(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  // Example usage
  const result = sum(5, 10);
  console.log("Sum of 5 and 10:", result);

  
  //Palindrome Check
  function isPalindrome(text: string): boolean {
    // Convert to lowercase and remove spaces for case-insensitive check
    text = text.toLowerCase().replace(/ /g, "");
  
    // Compare the string with its reversed version
    return text === text.split("").reverse().join("");
  }
  
  // Example usage
  const word1 = "Race car";
  const word2 = "Hello world";
  
  console.log(`${word1} is a palindrome:`, isPalindrome(word1));
  console.log(`${word2} is a palindrome:`, isPalindrome(word2));
  