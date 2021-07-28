"use strict"

function translate(word) {
    // Convert string to lowercase
    word = word.toLowerCase()
    // vowel array
    const vowels = ["a", "e", "i", "o", "u"];
    // set vowel index to 0
    let vowelIndex = 0;
  
    if (vowels.includes(word[0])) {
      // first letter is a vowel, add way to end
      return word + "way";
    } else {
      // is a consonant
      for (let letter of word) {
        // loop through until the first vowel is found
        if (vowels.includes(letter)) {
          // Store the index at which the first vowel exists
          vowelIndex = word.indexOf(letter);
          break;
        }
      }
      // final string
      return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
    }
  }

module.exports = translate;