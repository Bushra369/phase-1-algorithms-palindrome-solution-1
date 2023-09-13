function isPalindrome(word) {
  // Write your algorithm here
   
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  }
  

  
/* 
  Add your pseudocode here
  function isPalindrome(word):
    // Step 1: Initialize a variable 'reversed' to store the reversed word.
    reversed = empty string

    // Step 2: Split the input 'word' into an array of characters.
    characters = split word into an array of characters

    // Step 3: Reverse the order of characters and store them in 'reversed'.
    for each character in characters:
        prepend character to 'reversed'

    // Step 4: Join the characters in 'reversed' back into a string.
    reversedWord = join characters in 'reversed' into a string

    // Step 5: Compare 'word' with 'reversedWord' to check if it's a palindrome.
    if word equals reversedWord:
        return true
    else:
        return false

*/

/*
  Add written explanation of your solution here
  my code code defines a JavaScript function called "isPalindrome" that checks whether a given word is a palindrome, meaning it reads the same forwards and backwards. It accomplishes this by first reversing the input word, and then comparing it with the original word. If the two words are identical, the function returns "true", indicating that the input is a palindrome; otherwise, it returns "false". This code utilizes JavaScript string manipulation methods to achieve this straightforward palindrome check.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
