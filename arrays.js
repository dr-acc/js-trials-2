'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${items[i]} ${[i]}`);
  }
}

printIndices(['apple', 'berry', 'cherry']);

console.log()

// 2. everyOtherItem
function everyOtherItem(items) {
  for (let i = 0; i < items.length; i += 2) {
    console.log(`${items[i]} ${[i]}`);
  }
}

everyOtherItem(['apple', 'berry', 'cherry', 'watermelon'])

console.log()

// 3. smallestNItems
function smallestNItems(items, n) {

  // let sortedNItems = []

  // let n;

  // for (n; n < items[items.length - 1]; n--) {
  //   sortedNItems.push(n);
  // }

  // return sortedNItems;

  let sortedNItems = items.sort((a, b) => a - b).slice(0, n);
  sortedNItems.reverse();

  return sortedNItems 

}

console.log(smallestNItems([1, 2, 3, 4, 5, 6], 3))