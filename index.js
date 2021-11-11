'use strict';

// YOU KNOW WHAT TO DO //

/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/**
 * identity: Designed to take any value 
 * and simply and return it.
 * @param {collection or a primitive value} : the value to be passed 
 * into the function identity.
 * @returns: input value unchanged.
 */
 function identity(value) {
  return value;
}
 module.exports.identity = identity;

 /**
  * typeOf: Designed to take any input value, check the data type of value
  * and return a string of the value's type.
  * @param {collection or a primitive value}:intended to examine it's type
  * returns: a string of the value's type
  */
  function typeOf(value) {
    if (typeof value !== "object" && Array.isArray(value) === false && value !== null) {
        return typeof value;
    }  else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === "object" && value !== null) {
        return "object";
    } else {
      return "null";
    }
    }
    module.exports.typeOf = typeOf;

    /**
     * first: Designed to take a collection and a number and return 
     * a new array with the first number(s) of item(s) based on the
     * number input being greater than zero and less that collection
     * .length.
     * @param {collection} Array : represents the collection input
     * @param {integer} number : represetns the number of items to be 
     * included in the new array 
     */
     function first(array, num) {
        var newArr = [];
       if (Array.isArray(array) === false) {
           return [];
       } else if (num === null || isNaN(num)) {
           return array[0];
       } else if (num <= 0) {
            return [];
       } else if (num > array.length) {
           return array;
       } 
       for (var i = 0; i < num; i++) {
           newArr.push(array[i]);
       }
       return newArr;
    }
    module.exports.first = first;


/**
 * last: Designed to take an array and a number and return the
 * last number of items in the array, if number is greater than
 * zero and less that collection.length.
 * @param {collection} array: original array from where to items
 * in the return array will derive. 
 * @param {number} num: represents the number of items to be 
 * included in the returned array
 * @returns : an array with one or more elements or an empty array
 * depending upon the condition
 */

function last(array, num) {
    // if array is not an array or if num is negative return [];
    var newArr = [];
   if (Array.isArray(array) === false) {
       // returns [] if array is not an array
       return [];
   } else if (num === null || isNaN(num)) {
       // return last element of the array
       return array[array.length - 1];
   } else if (num < 0) {//
        return [];
   } else if (num > array.length) {
       return array;
   }  else {
    newArr = array.slice(-num);
   }
   return newArr;
}

module.exports.last = last;


/**
 * indexOf: Designed to take a an array and a value and return
 * it's index if that value is found in the collection, else,
 * if value doesn't exist in the collection it retuns -1.
 * @param {collection} array: to be iterated upon to find index
 * @param {collection or simple data type} value: provided to 
 * check for that's value's index in the array  
 * @returns: index of value or -1 if index doesn't exist
 */
function indexOf(array, value) {
    // iterate through array
    for(var i = 0; i < array.length; i++) {
        // checks for the index of value at array[i]
        if (array[i] === value) {
            //console.log(i);
          return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to take an array and a value, and check if 
 * value is an element of that array, and if it that value is found 
 * in the collection true, the function returns true else it 
 * returns false.
 * @param {collection} array : provided to check if value is it's element
 * @param {collecton or simple data type} value: used to test if array cointains 
 * this value
 * @returns: true if value is element of collection and false if it's not.
 */
 function contains(array, value) {
    // ternary operator checks if value is an item in array
    return array.includes(value) ? true : false;
}
module.exports.cointains= contains;

/**
 * each: Designed to take a collection to be iterated and a function.
 * checks if collection is an object or an array and calls the function
 * for each value/element, index/key, object/array, then returns the 
 * result of calling a function once for each element/value.
 * @param {collection} array or object: used in the iteration
 * @param {function} action : takes in an element or [value], an index or key 
 * and a collection after iteration
 * @returns: a function call with element or value, index 
 * or key and a collection
 */

function each(collection, func) {
 // checks if collection is an array 
 if (Array.isArray(collection)) {
     //iterate though collection to access it's values and indexes
     for (var i = 0; i < collection.length; i++) {
         //call func with args: collection[i], i, collection
         func(collection[i], i, collection);
     }
 } else if (typeof collection === "object" && collection !== null && collection instanceof Date === false) {
     for (var key in collection ) {
         func(collection[key], key, collection);
     }
 }
 }
 module.exports.each= each;

 /**
  * unique: Designed to take an array and apply the indexOf
  * function to remove duplicates, and return a new array
  * without duplicates.
  * @param: {colllection } array: to iterate over
  * @returns: a new array free of duplicates
  */
 
function unique(array) {
    var uniqueItems = [];
    for (var i = 0; i < array.length; i++) {
        if (this.indexOf(uniqueItems, array[i]) < 0) {
            uniqueItems.push(array[i]);
            //console.log(uniqueItems);
        }
    }
   return uniqueItems;
}
module.exports.unique= unique;

/**
 * filter: Designed to take in an array and a function that 
 * takes three arguments (an element, an index and an array) and
 * returns an array with items for which the result of calling the
 * function was true.
 * @param: {collection} array: to be iterated over
 * @param: {fucnction} action: the function to be applied for each
 * value in the collection
 * @returns: new array of elements for which the function returned true
 */

function filter(array, func) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
        newArray.push(array[i]);
    }
    }
   return newArray;
}
module.exports.filter= filter;

/**
 * reject: Designed to take an array and a function, and apply the function to
 * each item in the array and return an array with items for which calling 
 * the function returned false.
 * @param {collection} array: to be iterated over and access items and indexes 
 * @param {fucntion} action: takes three arguments (element, index and array)
 * @returns: new array of elements for which calling function returned false
 */

function reject(array, func) {
    var falseReturns = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            falseReturns.push(array[i]);
        }
    }
    return falseReturns;
}
module.exports.reject= reject;

/**
 * partition: takes an array and a function, and applies the function 
 * to each item in the collection and return two new arrays: one with values
 * for which function returned true and the other with values for which 
 * function returned false.
 * @param {collection} array: to be iterated over 
 * @param {function} action: takes three arguments(element, index, array)
 * @returns: a new array with values for which {function} returned truthy
 * and new array that contains values for which {function} returned falsey
 */
function partition(array, func) {
    var subArrays = [];
    var truthy = [];
    var falsey = [];
    for (var i = 0; i < array.length; i++) {
        //console.log(subArrays);
        if (func(array[i], i , array)) {
            truthy.push(array[i]);
          }  else if (func(array[i], i, array) === false) {
              falsey.push(array[i]);
          } 
      }
      subArrays.push(truthy, falsey);
      // return subArray => [[truthy], [falsey]];
 return subArrays;
}
module.exports.partition = partition;

/**
 * map: Designed to take in a collection and a function to be applied on the collection, 
 * if the collection is an array it applies the function on the index, element and array
 * and returns a new array with the result of calling the function. If the collection is 
 * an object, it applies the function on the key, value and object and returns an array with
 * the result of calling the function in the object, key and value.
 * @param {collection} array : to be iterated over 
 * @param {fucntion} action: takes three arguments (an element/value, an index/key and an array/object)
 * @returns: a new array with values corresponding to each function call
 */

 function map(collection, func) {
    var passedValues = [];
    if (Array.isArray(collection)) {
        //iterate though collection to access it's values and indexes
        for (var i = 0; i < collection.length; i++) {
            //call func with args: collection[i], i, collection
            passedValues.push(func(collection[i], i, collection));
        }
    } else if (typeof collection === "object" && collection !== null) {
        for (var key in collection ) {
            passedValues.push(func(collection[key], key, collection));
        }
    }
    return passedValues;
}
module.exports.map = map;

/**
 * pluck: Designed to take a collection and a property and a map function
 * inside of it's code block to be applied on the each object and and return 
 * a new array with properties of object contained in the array.
 * @param {collection} array: to be iterated over 
 * @param {primitive data} property: passed into the map function used in
 * the pluck fuction body
 * @returns: an array containing the value of property for every element in array.
 */

function pluck(array, property) {
    var newItems = []; // Declares an array for items that pass the map function.
   //console.log(array, property);
   //this.map() iterates through array using map
         newItems = this.map(array, function(element){
       // returns the value of property in the object element
      return element[property];
   });
   // returns the new array of elements
  return newItems;
}
module.exports.pluck= pluck;

/**
 * every: Designed to take a collection and a function to be applied on 
 * on the collection and if all items in the collection pass the test 
 * function, it returns true, otherwise it returns false.
 * @param {collection} array or object: to be iterated over
 * @param {function} action: called with three arguments (value/element, key/index, 
 * and object/array)
 * @returns: true if every element/value is a truthy, and returns false otherwise
 */
    
function every(collection, func) {
    var truthy = true;
    if (!func) {
     if (Array.isArray(collection)) {
      for (var k = 0; k < collection.length; k++) {
        if (!collection[k]) {
          truthy = false;
        }
      }
    } else if (typeof collection === "object") {
      for (var key in collection) {
        if (collection[key] === false) {
          truthy = false
        }
      }
    } 
  } else if (Array.isArray(collection)) {
    //console.log(collection[0]);
    for (var i = 0; i < collection.length; i++) {
      if (func(collection[i], i, collection) === false) {
        truthy = false;
      } 
    }
  } else if (typeof collection === "object") {
    for (var key in collection) {
      if (func(collection[key], key, collection) === false ) {
        truthy = false;
      }
    }   
  }
  return truthy;
 }
 module.exports.every= every;

 /**
  *some: Designed to take a collection and a function to be applied on 
  * on the collection, and if the result of calling function is true 
  * for at least one element/value or if function is not provided
  * else returns false if the result of calling function for every
  * element is false.
  * @param {collection} array or object: to be iterated over
  * @param {function} action: called with three arguments (value/element, key/index, 
  * and object/array)
  * @returns: true if the result of calling function is true for at least one element/value
  * or if function is not provided and returns false if the result of calling function 
  * is false for every element/value
  */
 
function some(collection, func) {
    var falsey = false;
    if (!func) {
     if (Array.isArray(collection)) {
      for (var k = 0; k < collection.length; k++) {
        if (collection[k]) {
          falsey = true;
        }
      }
    } else if (typeof collection === "object") {
      for (var key in collection) {
        if (collection[key]) {
          falsey = true;
        }
      }
    } 
  } else if (Array.isArray(collection)) {
    //console.log(collection[0]);
    for (var i = 0; i < collection.length; i++) {
      if (func(collection[i], i, collection)) {
        falsey = true;
      } 
    }
  } else if (typeof collection === "object") {
    for (var key in collection) {
      if (func(collection[key], key, collection)) {
        falsey = true;
      }
    }   
  }
  return falsey;
  }
  module.exports.some= some;

  /**
   * reduce: Designed to take a collection and a function to be applied on every
   * element of the collection with three arguments(accumulator, currentValue 
   * and a seed and return a single value (the accumulator) after the final function call.
   * @param {collection} array; to be iterated over
   * @param {function} action : called on every element of the array with
   * three arguments(accumulator, currentElement and index)
   * @param {primitive data} seed : the starting value of the iteration and the 
   * accumulator parameter
   * @returns: a single value-- the seed, after the final function call
   */

function reduce(array, func, seed) {  
    // checks if seed is undefined
  if (seed === undefined) {
    // set seed to array[0];
      seed = array[0];
      // iterates through array
      for (var i = 1; i < array.length; i++) {
        // seeed accumulates the value of calling function on seed, array[i], i
        seed = func(seed, array[i], i)
      }
    } else {
      //iterate trough array 
        for (var i = 0; i < array.length; i++) {
          // seed accumulates the values of calling func on seed, array[i], i
            seed = func(seed, array[i], i)
        }
    }
    // return seed
    return seed;
  }
  module.exports.reduce= reduce;

/**
 * extend: Designed to take two or more collections and assign all object
 * keys to the first object and return that mutated object. 
 * @param {collection} object: object that will recieve keys from other objects
 * @param {collection} object1: will assign its keys to object 
 * @param {collection} object2: will pass its keys to object
 * @returns: the first param object with all the keys from object1 and object2
 */
 
function extend(object, object1, object2) {
    // assigns object1 and object2 keys to object
   Object.assign(object, object1, object2);
   // returns object
   return object;
  }
  module.exports.extend= extend;
