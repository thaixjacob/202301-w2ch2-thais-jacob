function isPalindrome(sentence) {
  if (sentence === " " || typeof sentence !== "string") {
    return "Text not provided";
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
