// Basic Algorithm Scripting: Reverse a String

function reverseString(str) {
 let array = str.split("");
 let reverse = [];
 for(let i=0; i < array.length; i++){
    reverse.unshift(array[i]);
    }
     reverse = reverse.join("");
     return(reverse);
}

reverseString("hello");
