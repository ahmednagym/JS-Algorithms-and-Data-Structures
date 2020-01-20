function searchString(long, short){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length-1) count++;
        }
    }
    return count;
}

//function searchString takes a long and short strings and it counts how many
//times the short one appears in the long one