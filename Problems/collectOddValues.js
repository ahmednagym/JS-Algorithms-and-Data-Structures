function CollectOddValues(arr) {
    let Result = [];
    if (arr.length === 0) {
        return Result;
    }
    if (arr[0] % 2 !== 0) {
        Result.push(arr[0]);
    }

    Result = Result.concat(CollectOddValues(arr.slice(1)));
    return Result;
}

//function CollectOddValues creates an empty array each time it is called and checks
//if the number of the arr is odd, then it pushes the element into the result array
//then it merges the two arrays together