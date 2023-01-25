function isPalindrome(sentence) {
  if (sentence === " ") {
    console.log("Text not provided");
  } else {
    let minuscula = sentence
      .toLowerCase()
      .replaceAll(" ", "")
      .replace(/[^a-z]/gi, "");
    return minuscula;
  }
}

isPalindrome("Mano Brown*_3");
