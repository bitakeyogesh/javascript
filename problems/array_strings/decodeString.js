/**
 * https://leetcode.com/problems/decode-string

    Given an encoded string, return its decoded string.
    The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
    You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
    Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

    Input: s = "3[a]2[bc]"
    Output: "aaabcbc"

    Input: s = "3[a2[c]]"
    Output: "accaccacc"
 */

/**
* @param {string} s
* @return {string}
*/
var decodeString = function (s) {
    let wordStack = [], countStack = [], number = '', word = '';
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char == '[') {
            wordStack.push(word);
            countStack.push(number);
            word = '';
            number = '';
        }
        else if (char == ']') {
            let popWord = wordStack.pop();
            let popCount = countStack.pop();
            word = popWord + word.repeat(Number(popCount));
        }
        else if (isNumber(char)) {
            number += char;
        }
        else {
            word += char;
        }
    }
    return word;
};

function isNumber(char) {
    if (char.trim() === '') {
        return false;
    }
    return !isNaN(char);
}

console.log(decodeString('3[a2[c]]'));