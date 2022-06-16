/**
 * https://www.geeksforgeeks.org/group-shifted-string/
 * https://www.youtube.com/watch?v=_xeiqINtxbM&list=UU6B6UMcP7tdlE6NxkAha3tA&index=1
 * 
 * Given an array of strings (all lowercase letters), the task is to group them in such a way that all strings in a group are shifted versions of each other.
 * input = ["acd", "dfg", "wyz", "yab", "mop","bdfh", "a", "x", "moqs"]
 * output = [["acd", "dfg", "wyz","yab", "mop"], ["bdfh","moqs"],["a","x"]]
 * 
 * Time complexity O(M*N)
 * Space Complexity O(N)
 */

function groupShiftedStrings(arrayOfStrings) {
    let map = new Map();
    let result= [];
    arrayOfStrings.forEach(str => {
        let key = '';
        for (let i = 1; i < str.length; i++) {
            let prev = str[i - 1], curr = str[i];
            let difference = computeDifference(prev, curr);
            key = key + ',' + difference;
        }
        if (map.has(key)) {
            map.get(key).push(str);
        }
        else {
            map.set(key, [str]);
        }
    });

    for(let [key, value] of map.entries()){
        result.push(value);
    }
    return result;
}

function computeDifference(prev, curr) {
    let prevValue = prev.charCodeAt(0) - 'a'.charCodeAt(0) + 1, currValue = curr.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    return prevValue < currValue ? currValue - prevValue : (26 - prevValue) + currValue;
}

const input = ["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"];
const output = groupShiftedStrings(input);
console.log(output);