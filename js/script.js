function areBothValuesNaN(valueA, valueB) {
  //isStrictNaN, confirma se os dois sao NaN atraves do Number.isNaN, vai sair true - na funçao principal, coloco ! para que sea falso
  return Number.isNaN(valueA) && Number.isNaN(valueB);
}

function areIntegers(valueA, valueB) {
  return Number.isInteger(valueA) && Number.isInteger(valueB);
}

function isStrictZero(valueA, valueB) {
  //Zero, confirma se sao os dois numeros inteiros, se sim, passa adiante, se sim, cambia os true dos valores a false.
  return areIntegers(valueA, valueB) && !valueA && !valueB;
}

function strictEquals(valueA, valueB) {
  return (
    (Object.is(valueA, valueB) && !areBothValuesNaN(valueA, valueB)) ||
    isStrictZero(valueA, valueB)
  );
}

console.log(strictEquals(1, 1)); // true
console.log(strictEquals(NaN, NaN)); // false
console.log(strictEquals(0, -0)); // true
console.log(strictEquals(-0, 0)); // true
console.log(strictEquals(1, "1")); // false
console.log(strictEquals(true, false)); // false
console.log(strictEquals(false, false)); // true
console.log(strictEquals("Water", "oil")); // false
console.log(strictEquals("Water", "Water")); // true
console.log(strictEquals("", 0)); // false
