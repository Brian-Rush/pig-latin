//Back-End logic

//random global variables
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

//cuts off first letter and returns rest of the input
var sliceFirst = function(word) {
  var x = word.slice(1);
  return x;
};

//determines if first letter is consonant and returns pig latin
var foo = function(word){ // "rum"
  var firstLetter = word.charAt(0); // "r"

  if (consonants.includes(firstLetter)) {
      // $("#result").text(result);
      return sliceFirst(word) + firstLetter + "ay";
  }
}

var foo2 = function(x) {
	if (x.length === 1) {
  	return x + "way";
  } else {
  return foo(x);
  }
}


//splits input into individual characters
// var letters = input.split("");
var initialConsonants = [];

// for (index = 0; index === true; index += 1) { // use while
//   if (consonants.includes(letter[index])) {
//     return true;
//     (initialConsonants).push(letter)
//
//     });

var multiCons = function() {
  while (consonants.includes(y)) {
    (initialConsonants).push(y)
  };
alert(initialConsonants);
};
// };



//Front-End Logic


$(document).ready(function() {
  $("form#english").submit(function(event) {
    event.preventDefault();

    //Get and store input
    var input = $("#eng").val();

    var result = foo2(input); // return a result

    // display result with jquery
    $("#result").text(result);

  });
});
