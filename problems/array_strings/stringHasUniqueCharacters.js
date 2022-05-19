// check given string has unique characters
// followup questions -  given string ASCII string or Unicode string 
const input = "yogesh";
console.log(hasUniqueCharacters(input));

// time complexity O(n)
function hasUniqueCharacters(string) {
    let arr = [],
        result = true;
    string.split("").forEach(char => {
        if (arr.includes(char)) {
            result = false;
            return result;
        }
        arr.push(char);
    });
    return result;
};