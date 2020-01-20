// function to merge two sorted arrays together 
merge(arr1, arr2){
	let result = [];
	let i = 0; 
	let j = 0;

	while(i < arr1.length && j < arr2.length){
		if(arr2[j] > arr1[i]){
			result.push(arr1[i])
			i++;
		} else {
			result.push(arr2[j])
			j++;
		}
	}

	while(i < arr1.length){
		result.push(arr1[i]);
		i++;
	}

	while(j < arr1.length){
		result.push(arr2[j]);
		j++;
	}

	return result;
}

// a recursive function to merge sort an array
function Sort(arr){
	if(arr.length <= 1) return arr;
	let middle = Math.floor(arr.length / 2);
	let left = Sort(arr.slice(0, middle));
	let right = Sort(arr.slice(middle));

	return merge(left, right);
}