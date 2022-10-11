'use strict';

// 1. countWords
function countWords(phrase) {
  /* Return an object of each word and the no. of times they appear. 
  
  You can assume that `phrase` does not contain any punctuation and that
    each word is separated with a space.

    Arguments:
        phrase (str): A string of space-separated words

    Returns:
        dict: {word: # of times word appears in `phrase`}
        
        */
    const countWords = {};

    let newPhrase = phrase.split(' ');

    // console.log(newPhrase)

    for (const word of newPhrase) {
      if (countWords[word]) {
        countWords[word] = countWords[word] + 1;
      } else {
        countWords[word] = 1;
      }
    }
    return countWords;
}

console.log(countWords("bananas bananas apple strawberry"))

console.log()

// const fruits = {'bananas': 1, 'strawberry': 0, 'watermelon': 4};

// for (const fruit in fruits) {
//   console.log(`The fruit is ${fruit} and the quantity is ${fruits[fruit]}`);
// }
console.log()

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  /* Return the array of melons that cost `price`.

    Arguments:
        price (float)

    Returns:
        array: Array of melons that cost `price`
        None: If there are no melons that cost `price`
    */

    let melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
    };
  
    if (!melonPrices[price]) {
      return null;
    }

    return melonPrices[price].sort();
}

console.log(getMelonsAtPrice(2.50))

console.log(getMelonsAtPrice(3.00))