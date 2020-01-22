function pivot(arr,  start = 0, end = arr.length - 1){
    function swap(array, index1, index2){
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;
    
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length-1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        //left side of the pivot index
        quickSort(arr, left, pivotIdx-1);
        //right side of the pivot index
        quickSort(arr, pivotIdx+1, right);
    }
    return arr;
}