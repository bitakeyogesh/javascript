var arr = [8,4,2,6,3,8,11,2];
function quickSort(arr, low, high){
    if(low<high){
        let partitionIndex = partition(arr, low, high);
        quickSort(arr, low, partitionIndex-1);
        quickSort(arr, partitionIndex+1, high);
    }
}

function partition(arr, start, end){
    let pivot = arr[end];
    let i = start;

    for(let j=start;j<end;j++){
        if(arr[j]<=pivot){
            let temp = arr[j];
            arr[j]=arr[i];
            arr[i] = temp;
            i++;
        }
    }
    let temp = arr[end];
    arr[end]=arr[i];
    arr[i] = temp;
    return i;
}
quickSort(arr, 0, arr.length-1);
console.log(arr)