function findLongestWordLength(str) {
  let words = str.split(" ");
	let results = [];
	for(let i = 0; i < words.length; i++){
		results.push(words[i].length);
	}
	
	return Math.max(...results);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
