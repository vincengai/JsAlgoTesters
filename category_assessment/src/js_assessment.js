// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include 
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

String.prototype.symmetricSubstrings = function () {
    if (this.length < 1) return [];
    let results = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            let sub = this.slice(i,j+1);

            if (sub == sub.split('').reverse().join('')) {
                results.push(sub)
            }
        }
    }
    return results.sort();
}


// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function(dictionary) {
    let results = [];

    dictionary.forEach( (el) => {
        if (this.includes(el)) results.push(el);
    })

    return results.sort();
}


// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title. 
// Do not capitalize the following words (unless they are the first word in the 
// string): ["a", "and", "of", "over", "the"]


// 1- Im split every word on a space 
// 2- Iterate over every word checking if it's in lowerCaseArray
// 3- If it is, AND if the index == 0, capitalize

// word[0].toUpperCase() + word.slice(1)
function titleize(str) {
    let split = str.split(' ');
    let lowerCase = ["a", "and", "of", "over", "the"];
    let results = [];

    for (let i = 0; i < split.length; i++) {
        let capitolized = split[i][0].toUpperCase() + split[i].slice(1);

        if (!lowerCase.includes(split[i])) {
            results.push(capitolized)
        } else if (lowerCase.includes(split[i]) && i == 0) {
            results.push(capitolized)
        } else {
            results.push(split[i])
        }
    }

    return results.join(' ')
}


// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:

// Iterate over both strings , have a hashCounter
// every char += 1, while the str2 -= 1
// return Object.values.every( value => value === 0)

function anagrams(str1, str2) {
    let resultsHash = {};

    str1.split('').forEach( char => {
        if (!resultsHash[char]) resultsHash[char] = 0;
        resultsHash[char] += 1;
    })

    str2.split('').forEach( char => {
        if (!resultsHash[char]) resultsHash[char] = 0;
        resultsHash[char] -= 1;
    })

    // console.log(resultsHash)
    return Object.values(resultsHash).every( value => value == 0);
}

anagrams('listen', 'silent') //=> true
anagrams('listen', 'potato') //=> false

// Write a recursive function `primeFactorization(num)` that returns the prime
// factorization of a given number. Assume num > 1
//
// primeFactorization(12) => [2,2,3]

// Back in the good old days, you used to be able to write a darn near
// uncrackable code by simply taking each letter of a message and incrementing 
// it by a fixed number, so "abc" by 2 would look like "cde", wrapping around 
// back to "a" when you pass "z".
//
// Write a function, `caesarCipher(str, shift)` that will take a message and an
// increment amount and outputs the encoded message. Assume lowercase and no 
// punctuation. Preserve spaces.
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// Examples: 
// caesarCipher(“abc”, 2) => “cde”
// caesarCipher(“xyz”, 1) => “yza"

// Write a recursive function, `permutations(array)`, that returns all of the 
// permutations of an array (A permutation is a possible ordering of the 
// elements in an array)
// e.g. permutations([1,2]) => [[1,2], [2,1]]
// e.g. permutations([1,2,3]) => [[1,2,3], [1,3,2], [2,1,3], 
//                                [2,3,1], [3,1,2], [3,2,1]]

// **THIS PROBLEM WILL NOT SHOW UP ON A REAL ASSESSMENT** 
// If you are a non-native English speaker and find it difficult to understand this
// problem do not spend too much time on it and focus on other problems instead.

// Write a function `pigLatinify(sentence)` which translates a sentence into pig latin. 
// Rules for pig latin:
// In the English language, vowels are the following letters: ['a', 'e', 'i', 'o', 'u'] 
// Consonants are all other letters.
//  1. If the word begins with a vowel, simply append `ay` onto the end.
//      ex. 'apple' => 'appleay'
//  2. If the word begins with a consonant, move the starting consonants to the
//  end of the word and then append `ay`
//      ex1. 'pearl' => 'earlpay'
//      ex2. `school` => `oolschay`
//  3. Treat `qu` at the start of a word as a singular consonant.
//      ex1. `queen` => `eenquay`
//      ex2. `square` => `aresquay`

// Write a function `subsets(arr)` that recursively returns all subsets of an
// array. Examples:
// `subsets([1,2])` => [[],[1],[2],[1,2]]
// `subsets([1,2,3])` => [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
// Write a recursive function, `baseConverter(n, b)` that takes in a base 10 
// number `n` and converts it to a base `b` number. Assume that `b` will never 
// be greater than 16. Return the new number as a string. If the number is 0, 
// your function should return "0" regardless of the base.
//
// The 'base' of a number refers to the amount of possible digits that can occupy
// one of the places in the number. We are used to base 10 numbers, which use
// the digits 0-9, however in computer science base 2 (binary) and base 16 (hexadecimal)
// numbers are often used. The digits used in base 16 are as follows (from 
// smallest to largest):
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
//
// Examples: 
// baseConverter(0, 2) => "0"
// baseConverter(5, 2) => "101"
// baseConverter(25, 16) => 19
// baseConverter(31, 16) => "1f"
//
// To get a feel for base conversion play around on this site: https://www.mathsisfun.com/numbers/convert-base.php
// For more information on base conversion refer here: https://www.purplemath.com/modules/numbbase.htm

// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array. 
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 

// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods 
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if 
// the first element should appear before the second, 0 if they are equal, and 1 
// if the first element should appear after the second. Define and use a helper 
// method, `merge(left, right, comparator)`, to merge the halves. 
//
// **IMPORTANT: Make sure to use a function declaration (`function merge`) as
// opposed to a function expression (`const merge = function`) for `merge`. Do
// NOT use the built-in `Array.prototype.sort` method in your implementation.**
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

// Write a recursive function `stringIncludeKey(string, key)` that takes in 
// a string to search and a key string. Return true if the string contains all 
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

// Write a recursive function, `factorialsRec(num)`, that returns the first 
// `num` factorial numbers. Note that the 1st factorial number is 0!, which 
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1]. 

// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the 
// digits of the resulting number. Keep repeating until there is only one digit 
// in the result, called the "digital root". 
// **Do not use string conversion within your method.** 
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.

// Write a function `firstEvenNumbersSum(n)` that returns the sum of the
// first n even numbers recursively. Assume n > 0

// Write a function, `exponent(b, n)`, that calculates b^n recursively. 
// Your solution should accept negative values for n. Do NOT use ** or Math.pow

// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of
// the array and any interior arrays. A deep duplication means that the array 
// itself, as well as any nested arrays (no matter how deeply nested) are duped 
// and are completely different objects in memory than those in the original 
// array.

// Write a function, `doubler(arr)`, that returns a copy of the input array 
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]

// Write an `Array.prototype.myRotate(times)` method which rotates the array by 
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]

// Write a function `myFind(array, callback)` that returns the first
// element for which the callback returns true. If none is found, the 
// function should return `undefined`
// Do not use the built-in `Array.prototype.find` method.

// Write an `Array.prototype.myJoin(separator)` method, which joins the elements
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'

// Write an `Array.prototype.myFlatten()` method which flattens a 
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two 
// elements.

// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.

// Write an `Array.prototype.twoSum` method, that finds all pairs of positions 
// where the elements at those positions sum to zero.

// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

// Write an `Array.prototype.dups` method that will return an object containing 
// the indices of all duplicate elements. The keys are the duplicate elements; 
// the values are arrays of their indices in ascending order
//
// Example: 
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]

// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take 
// a start index and an (optional) end index and return a new string. Do NOT 
// use the built-in string methods `slice`, `substr`, or `substring`. 
// ex. 
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments 
// until the number of arguments collected is equal to the original `numArgs` 
// value and then invokes the curried function.

// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with 
// the passed-in object as `this`, also passing the arguments array. Do NOT use 
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods
// in your implementation.

// Write a `Function.prototype.myCall(context)` method, that accepts an object, 
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods 
// in your implementation.

// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow 
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.

// Write an `Array.prototype.mySome(callback)` method which takes a callback 
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a 
// callback and an optional argument of a default accumulator. If myReduce only 
// receives one argument, then use the first element of the array as the default 
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach` 
// methods.

// Write an `Array.prototype.myEvery(callback)` method that returns true 
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.

// Write an `Array.prototype.myReject(callback)` method. Return a new array, 
// which contains only the elements for which the callback returns false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the 
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.

// Write an `Array.prototype.myFilter(callback)` that takes a callback and 
// returns a new array which includes every element for which the callback 
// returned true. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach` 
// methods.

