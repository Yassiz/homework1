function palindrome (str){
	if(str.split('').reverse().join('') === str){ 
		return true;
	} else {
		return false;
	}
}

console.log(palindrome ("rarar"));