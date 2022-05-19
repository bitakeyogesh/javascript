const arr1 =[1,2,5,18,19];
const arr2 =[4,6,10,19];

function mergeTwoSortedArrays(arr1, arr2){
    const resultArr = [];
    let i=0, j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<= arr2[j]){
            resultArr.push(arr1[i]);
            i++;
        } else {
            resultArr.push(arr2[j]);
            j++;  
        }
    }
    
    if(i <arr1.length){
        while(i <arr1.length){
            resultArr.push(arr1[i]);
            i++;  
        }
    }

    if(j <arr2.length){
        while(j <arr2.length){
            resultArr.push(arr2[j]);
            j++;  
        }
    }
    return resultArr;
}

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.splice(0, mid);
    return mergeTwoSortedArrays(mergeSort(leftArr), mergeSort(arr));
}

console.log(mergeSort([3,5,1,7,2,9]));