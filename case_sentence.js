function titleCase(str) {
  str = str.toLowerCase();
	let capitalize = [];
  let words = str.split(" ");
   for(let i = 0; i < words.length; i++) {
    let word = words[i];
	  let firstChar = word.charAt(0).toUpperCase() + word.slice(1);
		capitalize.push(firstChar);
  }
   capitalize = capitalize.join(" ");
    return capitalize;
  }

  titleCase("I'm a little tea pot");

