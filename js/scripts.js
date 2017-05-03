//Back-End logic

//append way
var addWay= function() {
  $("#result").text(input + "way");
};

var sliceFirst = function(input) {
  var x = input.slice(1);
  return x;
};


//Front-End Logic
$(document).ready(function() {
  $("form#english").submit(function(event) {
    event.preventDefault();

    //Get and store input
    var input = $("#eng").val();


    addWay;

    var firstLetter = input.charAt(0);
    var restOfWord = sliceFirst(input);

    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
      if (consonants.includes(firstLetter)) {
        $("#result").text(restOfWord + firstLetter + "ay");
      }
  // alert(firstLetter);
  });
});
