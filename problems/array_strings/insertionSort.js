function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let temp = arr[i];
        let j= i-1;

        while(j>=0 && arr[j]> temp ){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
console.log(insertionSort([1,2,8,3,4,99,10]));

