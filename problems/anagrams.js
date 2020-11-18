// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:


function anagrams(str1, str2) {
    let newHash = {};

    str1.split('').forEach( (char) => {
        if (!newHash[char]) newHash[char] = 0;
        newHash[char] += 1;
    })

    str2.split('').forEach( (char) => {
        if (!newHash[char]) newhash[char] = 0;
        newHash[char] -= 1;
    })

    return Object.values(chars).every(count => count === 0);
}

anagrams('listen', 'silent') //=> true
anagrams('listen', 'potato') //=> false
