//Back-End logic

//GLOBAL VARIABLES

//consonant array
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];

//isolates first letter of word
var firstLetter = function (word) {
  word.charAt(0);
};

//cuts off first letter and returns rest of the input
var restOfWord = function (word) {
  var x = word.slice(1);
  return x;
};

//determines if first letter is consonant and returns pig latin
var foo = function (word) {
  var firstLetter = word.charAt(0);
  if (consonants.includes(firstLetter)) {
      return restOfWord(word) + firstLetter + "ay";
  };
};

//determines if first letter is not a consonant and returns apt pig latin
// var initVowel = function(word) {
//
//   if (!consonants.includes(firstLetter)) {
//     return word + "way";
//   };
// };

var foo2 = function (x) {
	if (x.length === 1) {
  	return x + "way";
  } else {
  return foo(x);
  }
};


//splits input into individual characters
// var letters = input.split("");
var initialConsonants = [];

// for (index = 0; index === true; index += 1) { // use while
//   if (consonants.includes(letter[index])) {
//     return true;
//     (initialConsonants).push(letter)
//
//     });

// var multiCons = function() {
//   while (consonants.includes(y)) {
//     (initialConsonants).push(y)
//   };
// alert(initialConsonants);
// };
// };



//Front-End Logic


$(document).ready(function () {
  $("form#english").submit(function (event) {
    event.preventDefault();

    //Get and store input
    var input = $("#eng").val();

    // return a result
    var result = foo2(input);

    // display result with jquery
    $("#result").text(result);

  });
});
