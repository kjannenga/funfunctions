///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.


function sum(x,y){
	return x + y
}

sum(5,5)



// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(x,y,z){
	return ((x+y+z)/3)
}

avg (1,2,3)


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(x){
	return x.length
}

getLength("dkfjwprtbprtiub")


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(x,y){
if(x<y){
	return(true)
}else{
	return (false)}}


greaterThan(5,6)





// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(x){
	return ('Hello, ' + x + '!')
}


greet("John")

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madLib(a,b,c,d){
	return ('the ' + a + ' brown ' + b + ' jumps ' + c + ' the ' + d)
}

madLib("quick", "fox", "over", "fence")


es6 this is the new language version can be used in chrome
return `The ${a} brown ${b} jumps ${c} the ${d}`


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////