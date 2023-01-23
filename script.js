// complete the given function

function palindrome(str){
	let reversed='';
	for (char of str){
		reversed=char+reversed;
	}
	if(str===reversed)
	{
		return true'
	}
	else
	{
		return false;
	}

}
module.exports = palindrome
