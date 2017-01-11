// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.


module.exports = Hamming;


function Hamming() {}

Hamming.prototype.compute = function(str1,str2){
// Count used to keep track of the number of differences
var count = 0;
// To check if they are of equal length are not
if (str1.length!= str2.length){
	throw "DNA strands must be of equal length.";
}
else{
	// Simply iterates and counts the differences
	for(var i = 0; i < str1.length; i++){
		if(str1.charAt(i) != str2.charAt(i))
			count++;
	}
		return count;
	
}
}