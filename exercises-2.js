// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
if (x>y){
	return x
}else{
	return y
}}

max(9,7)

return a > b ? a : b



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if ((x >= y) && (x >= z)) { 
        return x
    } else if ((y >= x) && (y >= z)) {
        return y
    } else {
        return z
    }
}

maxOfThree(5,8,2)

return Math.max(x,y,z)

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
        if(char == "a"||char== "e"|| char == "i"|| char == "o"|| char == "u"){
            return true
         }else{

    return false}

}


var vowels = "aeiou"
char = char.toLowerCase()
return vowels.indexOf(char) !== -1



// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function isConsonant(char){
	var consonant = "bcdfghjklmnpqrstvwxyz"
	char = char.toLowerCase()
	return consonant.indexOf(char) !== -1
}


function rovarspraket(phrase){
	var newStr = ""
	for ( var i = 0; i < phrase.length; i+= 1){
		if (isConsonant(phrase[i])) {
			newStr += phrase.charAt(i) + 'o' + phrase.charAt(i)
		}else{
			newStr += phrase.charAt(i)
		}
	}
	return newStr
}

rovarspraket("this")

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){ 
	var s = ""
    for (var i = x.length - 1; i >= 0; i--){
    	s += x[i]
    }
    return x
    }
    


reverse("aldskjfbpaw")

return str.split("").reverse().join("")





