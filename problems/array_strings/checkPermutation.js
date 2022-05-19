// check whether given two strings are permutation of each other.
// followup question - check whether string permutation comparison is case sensitive

const str1="dog",
    str2="god";

console.log("isPermutation", checkpermutationApproach1(str1, str2));
console.log("isPermutation", checkpermutationApproach2(str1, str2));

// solution approaches 
// 1. sort two strings and compare O(nlogn)
// 2. use hashtable O(n)

function checkpermutationApproach1(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

function checkpermutationApproach2(str1, str2){
    if(str1.length !== str2.length) {
        return false;
    }

    const letters = Array(128).fill(0);

    for(let i=0; i< str1.length; i++){
        letters[ str1[i].charCodeAt()]+=1;
    }
    for(let i=0; i< str2.length; i++){
        letters[ str2[i].charCodeAt()]-=1;
    }
    return letters.every(count=> count === 0);
}
