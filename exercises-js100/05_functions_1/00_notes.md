# New Things I learned

# Math.sign()
Math.sign() has 5 possible return values:
```js
1 // positive number
-1 // negative number
0 // positive zero
-0 // negative zero
NaN // not a number
```

## String.replace()
```js
// only replaces the first occurrence of the word it finds
let word = 'The quick brown fox jumps over the lazy dog. The fox is fast.'
let newWord = word.replace('fox', 'cat')
console.log(newWord); // 'The quick brown cat jumps over the lazy dog. The fox is fast.'
// notice that the second instance of `fox` was not replaced`.
```

## String.replaceAll()
```js
/*
Replaces all occurrences of a pattern or RegExp and the original string is left unchanged

The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
*/
let word = 'The quick brown fox jumps over the lazy dog. The fox is fast.'
let newWord = word.replaceAll('fox', 'cat')
console.log(newWord); // 'The quick brown cat jumps over the lazy dog. The cat is fast.'
```