function mutation(arr) {
  let first = arr[0];
  let second = arr[1];
	let result = 0;
  first = first.toLowerCase();
  second = second.toLowerCase().split("");
	for(let i = 0; i < second.length; i++) {
		 if(first.includes(second[i])) {
			result = result + 1;
		 }
	}
	if(result >= second.length) {
		 return true;
	} else {
		return false
	}
}

mutation(["hello", "Hey"]);

