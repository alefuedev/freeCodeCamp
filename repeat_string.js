function repeatStringNumTimes(str, num) {
	let result = []; 
	let error = "";
	if(num <= 0){
	return error;
	} else {
	str = str.split("");
	for(let x = 1; x <= num; x++){
	for(let i = 0; i < str.length; i++){
		result.push(str[i]);
	}
	}
	}
  result = result.join("");
	return result;
}
repeatStringNumTimes("abc", 0 );
