function isPalindrome(sentence) {
  if (sentence === " " || typeof sentence !== "string") {
    throw new Error("Text not provided");
  } else {
    let palindrome = sentence
      .replaceAll(/[.,:;()_*?¿!¡-\s]/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    console.log("Received text:", palindrome);

    palindromeToArray = palindrome.split("");

    palindromeReverse = palindromeToArray.reverse().join("");

    console.log("Reversed text:", palindromeReverse);

    if (palindrome === palindromeReverse) {
      console.log("That's a palindrome!");
    }

    if (palindrome !== palindromeReverse) {
      console.log("That's not a palindrome :(");
    }
  }
}

isPalindrome("Roma é amor");

/*
@export const isPalindrome () => {
  if(text === "") {
    throw new Error('Text no provided')
  }
  const lowerText = text.toLowerCase();
  let reverseText = '';
  for(let i = 0; i < lowerText.length; i++) {
    reverseText += lowerText[lowerText.length-1-i]
  }
  
  return reverseText === lowerText
}
*/
