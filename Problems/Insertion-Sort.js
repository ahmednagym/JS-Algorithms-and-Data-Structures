function InsertionSort(arr){
    let currentval;
    for(let i = 1; i < arr.length; i++){
        currentval = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > currentval; j-- ){
            arr[j + 1] = arr[j];
        }
        arr[j+1] = currentval;
    }
    return arr;
}