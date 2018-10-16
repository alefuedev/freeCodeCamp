function bouncer(arr) {    
	 let falsy = ['', false, null, 0, undefined, NaN]; 
	 falsy.forEach(function(neg){
	   let index = arr.indexOf(neg);
     if(arr.indexOf(neg) >= 0){
        arr.splice(index,1); 
	   }
	 })
		 if(arr.includes(NaN)){
			 arr = arr.filter(val => isNaN(val) == false);
			 return arr;
		 } else {
			 return arr;
		 }
}
  bouncer([7, "ate", "", false, 9]);
